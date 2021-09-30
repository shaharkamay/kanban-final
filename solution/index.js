"use strict";

/*
Page structure
*/
( () => {
    setLocalStorage();
    
    //light/dark theme
    document.addEventListener("DOMContentLoaded", () => {
        const savedTheme = localStorage.getItem("theme") || "auto";
        
        applyTheme(savedTheme);
        
        for(const optionElement of document.querySelectorAll("#selTheme option")) {
            optionElement.selected = savedTheme === optionElement.value;
        }
        
        document.getElementById("selTheme").addEventListener("change", function () {
            localStorage.setItem("theme", this.value);
            applyTheme(this.value);
        });
    });
    
    //event listener to add-task inputs to sense 'Enter' press
    const inputTasksElements = document.querySelectorAll(".add-task > input");
    for(const input of inputTasksElements) input.addEventListener("keyup", clickAddTaskEventHandler);
    
    //event listeners to the section of all lists together
    const listsSection = document.getElementById("lists");
    listsSection.addEventListener("click", clickAddTaskEventHandler);
    listsSection.addEventListener("dblclick", editTaskEventHandler);
    listsSection.addEventListener("keydown", editTaskEventHandler);
    
    //event listeners to the section the api section
    const apiSection = document.getElementById("api-interaction-section");
    apiSection.addEventListener("click", clickEventHandlerApi);
    

    document.addEventListener("keydown", keydownMoveTaskEventHandler);
    
    document.addEventListener("keyup", searchEventHandler);
    
    //add event listener for each task-list to enable drag option
    const listSections = listsSection.querySelectorAll("section");
    listSections.forEach(listSection => {
        listSection.addEventListener("dragover", (e) => e.preventDefault());
    });

    //add event listener to the 'trash' element
    const deleteDrag = document.getElementById("delete-drag");
    deleteDrag.addEventListener("dragover", (e) => e.preventDefault());

    //add event listener to reminder inputs
    const reminderInputs = document.querySelectorAll("[placeholder='Add reminder']");
    for(const input of reminderInputs) {
        input.addEventListener("focus", (e) => { 
            e.target.type = "datetime-local" 
            e.target.min = new Date().toISOString().split(".")[0];
        });
        input.addEventListener("blur", (e) => { if(!e.target.value) e.target.type = "text" });
    }

    generateLists();
})();


/*
DOM functions
*/

//Displays the tasks lists to DOM
function generateLists() {
    const ulLists = document.querySelectorAll("ul");
    for(const list of ulLists) {
        while(list.firstChild) list.removeChild(list.firstChild);
        const listType = list.closest("section").dataset.listType;
        const allObjectsTasks = JSON.parse(localStorage.getItem("tasksObjects"));
        const tasksList = allObjectsTasks[listType];
        for(const task of tasksList) {
            const li = createElement("li", [task.task], ["task"], {
                "data-task": task.task, 
                "data-date": task.date, 
                "data-reminder": task.reminder,
                draggable: "true",
            });
            addEventsToTasks(li);
            const span = createElement("span", ["🛈"], ["info-icon"]);
            span.addEventListener("mouseover", mouseoverInfoEventHandler);
            span.addEventListener("mouseout", mouseoutInfoEventHandler);
            list.append(li);
            list.append(span);
        }
    }
}

//Sets event handlers to the tasks elements
function addEventsToTasks(taskElem) {
    taskElem.addEventListener("blur", blurEventHandler);

    taskElem.addEventListener("dragstart", () => {
        taskElem.classList.add("dragging");
        document.getElementById("delete-drag").classList.add("red-bg-color");
        
    });
    
    taskElem.addEventListener("dragend", (e) => {
        taskElem.classList.remove("dragging");
        document.getElementById("delete-drag").classList.remove("red-bg-color");
        dragendEventHandler(e);
    });
    taskElem.addEventListener("dragover", dragoverTaskEventHandler);
    taskElem.addEventListener("dragleave", dragleaveTaskEventHandler);
}

function filterLists(query) {
    const allLiTasks = document.querySelectorAll('.task');
    
    for(const liTask of allLiTasks) {
        const task = liTask.textContent.toLowerCase();
        
        const infoSpan = liTask.nextElementSibling;

        if(task.search(new RegExp(query.replace(/\s+/, '|'))) !== -1) {
            liTask.style.display = '';
            infoSpan.style.display = '';
        } else {
            liTask.style.display = "none";
            infoSpan.style.display = "none";
        }
    }
}

/**
 * Creates a new DOM element.
 *
 * Example usage:
 * createElement("div", ["just text", createElement(...)], ["nana", "banana"], {id: "bla"})
 *
 * @param {String} tagName - the type of the element
 * @param {Array} children - the child elements for the new element.
 *                           Each child can be a DOM element, or a string (if you just want a text element).
 * @param {Array} classes - the class list of the new element
 * @param {Object} attributes - the attributes for the new element
 */

function createElement(tagName, children = [], classes = [], attributes = {}) {
    const element = document.createElement(tagName);
    for(let child of children) {
        element.append(child);
    }
    element.classList = classes.join(" ");
    for(let attr in attributes) {
        element.setAttribute(attr, attributes[attr]);
    }
    return element;
}

function getDragIndexTaskDOM(y, listBounds, taskHeight = 36) {
    const height = listBounds.height;
    const taskPosition = height - (y - listBounds.top);

    const index = Math.round((height - taskPosition) / taskHeight);
    
    return index;
}


/*
Event handlers
*/

//Light/Dark theme mode
function applyTheme(theme) {
    document.body.classList.remove("theme-auto", "theme-light", "theme-dark");
    document.body.classList.add(`theme-${theme}`);
}

//Handles the add task event
function clickAddTaskEventHandler(e) {
    if(e.target.placeholder !== "Insert task" && e.target.tagName !== "BUTTON") return;

    let taskInput;
    let reminderInput;
    let ul;

    if(e.target.placeholder === "Insert task") {
        if(e.key !== "Enter") return;
        reminderInput = e.target.nextElementSibling;
        taskInput = e.target;
        ul = e.target.parentElement.previousElementSibling
    }
    else if(e.target.tagName === "BUTTON") {
        reminderInput = e.target.previousElementSibling;
        taskInput = e.target.previousElementSibling.previousElementSibling;
        ul = e.target.parentElement.previousElementSibling;
    }
    const listType = taskInput.closest("section").dataset.listType;

    if(!taskInput.value) {
        alert("Invalid input!");
        return;
    }

    let reminder = null;
    if(reminderInput.value) {
        reminder = new Date(reminderInput.value).toLocaleString();
    }

    const task = {
        task: taskInput.value,
        date: new Date().toLocaleString(),
        reminder: reminder,
    }

    const reminderInMilliseconds = (new Date(task.reminder).getTime() - new Date(task.date).getTime());
    if(reminder && reminderInMilliseconds > 0) {
        setTimeout(() => {
            alert(`Reminder from "${listType}" list:\n"${task.task}"`);
        }, reminderInMilliseconds);
    }

    addTask(task, listType);
    
    taskInput.value = "";
    reminderInput.value = "";
    reminderInput.type = "text";

    generateLists();
}

//Handles the task edit
function editTaskEventHandler(e) {
    if(e.target.tagName !== "LI") return;

    const liTask = e.target;
    liTask.contentEditable = true;
    liTask.draggable = false;
    liTask.classList.add("text-cursor");
    liTask.focus();

    const listType = liTask.closest("section").dataset.listType;

    const newTask = {
        task: liTask.textContent,
        date: new Date().toLocaleString(),
        reminder: liTask.dataset.reminder,
    }

    const oldTask = {
        task: liTask.dataset.task,
        date: liTask.dataset.date,
        reminder: liTask.dataset.reminder,
    }

    if(e.key === "Enter") {
        updateTask(newTask, oldTask, listType);
        generateLists()
    }
}

//Handles the blur event so if the task element loses focus, the change will be saved.
function blurEventHandler(e) {
    if(e.target.tagName === "LI") {
        const liTask = e.target;
        liTask.contentEditable = false;
        liTask.draggable = true;
        liTask.classList.remove("text-cursor");
        
        const listType = liTask.closest("section").dataset.listType;

        const newTask = {
            task: liTask.textContent,
            date: new Date().toLocaleString(),
            reminder: liTask.dataset.reminder,
        }
    
        const oldTask = {
            task: liTask.dataset.task,
            date: liTask.dataset.date,
            reminder: liTask.dataset.reminder,
        }
        
        updateTask(newTask, oldTask, listType);

        generateLists();
    }
}

//Handles the task movements between lists
function keydownMoveTaskEventHandler(e) {
    const mouseOverElements = document.querySelectorAll(":hover");
    const liMouseOn = mouseOverElements[mouseOverElements.length - 1];

    if(!liMouseOn || liMouseOn.tagName !== "LI" || e.key !== 'Alt') return;

    altKeyDownEventHandler(e);
}
function altKeyDownEventHandler(e) {
    document.addEventListener("keydown", numberKeyDownEventHandler);
    document.addEventListener("keyup", altKeyUpEventHandler);
}
function altKeyUpEventHandler(e) {
    const keyUp = e.key;

    if(keyUp === "Alt") {
        document.removeEventListener("keydown", numberKeyDownEventHandler);
        document.removeEventListener("keyup", altKeyUpEventHandler);
    }
}
function numberKeyDownEventHandler(e) {
    const keyPressed = e.key;

    const mouseOverElements = document.querySelectorAll(":hover");
    const liMouseOn = mouseOverElements[mouseOverElements.length - 1];

    if(!liMouseOn || liMouseOn.tagName !== "LI") return;

    const task = {
        task: liMouseOn.textContent,
        date: liMouseOn.dataset.date,
        reminder: liMouseOn.dataset.reminder,
    }
    const previousListType = liMouseOn.closest("section").dataset.listType;
    let newListType = null;

    switch(keyPressed) {
        case '1':
            newListType = "todo";
            break;
        case '2':
            newListType = "in-progress";
            break;
        case '3':
            newListType = "done";
            break;
    }

    if(newListType !== null) moveTask(task, previousListType, newListType);
}

//Handles the keyup event so when the user types a letter, the interface will change accordingly.
function searchEventHandler(e) {
    if(document.activeElement.id !== "search") return;
    const searchInput = document.activeElement;
    
    let query = searchInput.value;

    filterLists(query.toLowerCase());
}

//Handles the save and load buttons click and save data to the API or load data from the API
async function clickEventHandlerApi(e) {
    if(e.target.id === "save-btn") {
        //Save to api
        const tasksObjects = JSON.parse(localStorage.getItem("tasksObjects"));
        saveTasksToApi(tasksObjects);
    } else if(e.target.id === "load-btn") {
        //Load from api
        await loadTasksFromApi();
        generateLists();
    }
}

//Handles the dragend event of a task and deletes/moves the task
function dragendEventHandler(e) {
    const hoverElements =  document.querySelectorAll(":hover");

    //Delete drag task
    if(hoverElements[hoverElements.length - 1].id === "delete-drag") {
        const listType = e.target.closest("section").dataset.listType;
        const task = {
            task: e.target.textContent,
            date: e.target.dataset.date,
            reminder: e.target.dataset.reminder,
        }
        removeTask(task, listType);
        generateLists();
    }

    const ulList = hoverElements[hoverElements.length - 1].closest("ul");
    const listSection = hoverElements[hoverElements.length - 1].closest("section");
    
    if(!listSection.dataset.listType) return;
    
    const newListType = listSection.dataset.listType;
    const previousListType = e.target.closest("section").dataset.listType;
    const task = {
        task: e.target.textContent,
        date: e.target.dataset.date,
        reminder: e.target.dataset.reminder,
    }
    let index = null;

    if(ulList && ulList.children.length > 0) {
        const listBounds = ulList.getBoundingClientRect();
        const y = e.clientY;
        index = getDragIndexTaskDOM(y, listBounds);
    }

    if(e.target.closest("ul") === ulList) {
        const liIndex = Array.prototype.indexOf.call(ulList.querySelectorAll("li"), e.target);
        if(liIndex < index) {
            index--;
        }
    } 
    moveTask(task, previousListType, newListType, index);
}

//Handles the dragover/dragleave event of a task and add a class to indicate what position to insert in
function dragoverTaskEventHandler(e) {
    const ulList = e.target.closest("ul");
    const listBounds = ulList.getBoundingClientRect();
    const y = e.clientY;
    const dragIndex = getDragIndexTaskDOM(y, listBounds);
    const liTasks = ulList.querySelectorAll("li");
    const taskIndex = Array.prototype.indexOf.call(liTasks, e.target);

    liTasks.forEach((li) => {
        li.classList.remove("dragover-border-bottom");
        li.classList.remove("dragover-border-top");
    });

    if(dragIndex !== liTasks.length) liTasks[dragIndex].classList.add("dragover-border-top");
    else liTasks[taskIndex].classList.add("dragover-border-bottom");
}
function dragleaveTaskEventHandler(e) {
    const liTasks = e.target.closest("ul").querySelectorAll("li");
    liTasks.forEach((li) => {
        li.classList.remove("dragover-border-bottom");
        li.classList.remove("dragover-border-top");
    });
}

//Handles the mouseover event and displays a div with info of the task
function mouseoverInfoEventHandler(e) {
    const infoDiv = document.querySelector(".info-div");
    infoDiv.classList.remove("display-none");

    const task = e.target.previousElementSibling.dataset.task;
    let date = e.target.previousElementSibling.dataset.date;
    date = date.split(", ");
    const reminderDate = e.target.previousElementSibling.dataset.reminder;

    const liTaskText = createElement("li", [task], [], {"data-highlightword": "Task: "});
    const liTaskDate = createElement("li", [date[0]], [], {"data-highlightword": "Date: "});
    const liTaskTime = createElement("li", [date[1]], [], {"data-highlightword": "Time: "});
    const liTaskReminder = createElement("li", [reminderDate], [], {"data-highlightword": "Reminder: "});
    const ulTask = createElement("ul", [liTaskText, liTaskDate, liTaskTime, liTaskReminder]);
    infoDiv.append(ulTask);

    const left = e.pageX;
    const top = e.pageY;
    const divHeight = infoDiv.offsetHeight;
    infoDiv.style.left = left - 100 + "px";
    infoDiv.style.top = top - (divHeight / 2) - 20 + "px";
}
function mouseoutInfoEventHandler(e) {
    const infoDiv = document.querySelector(".info-div");
    infoDiv.classList.add("display-none");
    while(infoDiv.firstChild) infoDiv.removeChild(infoDiv.firstChild);
}


/*
Local Storage functions (task is an object)
*/

function addTask(task, listType) {
    const allTasksObj = JSON.parse(localStorage.getItem("tasks"));
    allTasksObj[listType].unshift(task.task);
    localStorage.setItem("tasks", JSON.stringify(allTasksObj));

    const allObjectsTasks = JSON.parse(localStorage.getItem("tasksObjects"));
    allObjectsTasks[listType].unshift(task);
    localStorage.setItem("tasksObjects", JSON.stringify(allObjectsTasks));
}

function updateTask(newTask, oldTask, listType) {
    const allTasksObj = JSON.parse(localStorage.getItem("tasks"));
    const i = allTasksObj[listType].findIndex(x => x === oldTask.task);
    allTasksObj[listType][i] = newTask.task;
    localStorage.setItem("tasks", JSON.stringify(allTasksObj));

    const allObjectsTasks = JSON.parse(localStorage.getItem("tasksObjects"));
    const j = allObjectsTasks[listType].findIndex(x => x.task === oldTask.task && x.date === oldTask.date);
    allObjectsTasks[listType][j] = newTask;
    localStorage.setItem("tasksObjects", JSON.stringify(allObjectsTasks));
}

function removeTask(task, listType) {
    const allTasksObj = JSON.parse(localStorage.getItem("tasks"));
    const i = allTasksObj[listType].findIndex(x => x === task.task);
    allTasksObj[listType].splice(i, 1);
    localStorage.setItem("tasks", JSON.stringify(allTasksObj));

    const allObjectsTasks = JSON.parse(localStorage.getItem("tasksObjects"));
    const j = allObjectsTasks[listType].findIndex(x => x.task === task.task);
    allObjectsTasks[listType].splice(j, 1);
    localStorage.setItem("tasksObjects", JSON.stringify(allObjectsTasks));
}

function moveTask(task, previousListType, newListType, spliceIndex = null) {
    if(!spliceIndex){
        removeTask(task, previousListType);
        addTask(task, newListType);
    } else {
        removeTask(task, previousListType)
        spliceTasks(task, spliceIndex, newListType);
    }
    
    generateLists();
}

function setLocalStorage() {
    const setTasks = {
        "todo": [],
        "in-progress": [],
        "done": [],
    }
    if(!localStorage.getItem("tasks")) {
        localStorage.setItem("tasks", JSON.stringify(setTasks));
    }
    if(!localStorage.getItem("tasksObjects")) {
        localStorage.setItem("tasksObjects", JSON.stringify(setTasks));
    }
}

function removeAllTasks(){
    localStorage.removeItem("tasks");
    localStorage.removeItem("tasksObjects");
}

function replaceAllTasks(tasks) {
    removeAllTasks();
    const todo = [];
    const inProgress = [];
    const done = [];

    for(const task of tasks["todo"]) todo.push(task.task);
    for(const task of tasks["in-progress"]) inProgress.push(task.task)
    for(const task of tasks["done"]) done.push(task.task);

    const tasksStrings = {
        "todo": todo,
        "in-progress": inProgress,
        "done": done,
    }
    localStorage.setItem("tasks", JSON.stringify(tasksStrings));
    localStorage.setItem("tasksObjects", JSON.stringify(tasks));
}

function spliceTasks(task, startIndex, listType, deleteCount = 0) {
    const allTasksObj = JSON.parse(localStorage.getItem("tasks"));
    allTasksObj[listType].splice(startIndex, deleteCount, task.task);
    localStorage.setItem("tasks", JSON.stringify(allTasksObj));

    const allObjectsTasks = JSON.parse(localStorage.getItem("tasksObjects"));
    allObjectsTasks[listType].splice(startIndex, deleteCount, task);
    localStorage.setItem("tasksObjects", JSON.stringify(allObjectsTasks));
}


/*
API functions
*/

async function saveTasksToApi(tasksObjects) {
    loaderDisplay();

    const response = await fetch("https://json-bins.herokuapp.com/bin/614afa054021ac0e6c080cc3", {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({tasks: tasksObjects}), 
    });
    if(!response.ok) alert(`error status! ${response.status}`);

    loaderDisplay();
}

async function loadTasksFromApi() {
    loaderDisplay();

    const response = await fetch("https://json-bins.herokuapp.com/bin/614afa054021ac0e6c080cc3", {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        }
    });

    if(!response.ok) alert(`status error! ${response.status}`);

    const data = await response.json();
    const tasks = data.tasks;

    replaceAllTasks(tasks);
    
    loaderDisplay();
}


/*
Helper functions
*/

//loader gif display function
function loaderDisplay() {
    const div = document.querySelector(".api-interaction > div");
    if(div.lastElementChild.tagName === "IMG") {
        document.getElementById("loader-img").remove();
    } else {
        const loaderImg = createElement("img", [], ["loader"], {id: "loader-img", src: "../images/loading.gif"});
        div.append(loaderImg);
    }
}

