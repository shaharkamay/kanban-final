"use strict";

/*
Page structure
*/
( () => {
    setLocalStorage();
    
    //light/dark theme
    indicateTheme();
    
    //event listener to add-task inputs to sense 'Enter' press
    const inputTasksElements = document.querySelectorAll(".add-task__input");
    for(const input of inputTasksElements) input.addEventListener("keyup", clickAddTaskEventHandler);
    
    //event listeners to the section of all lists together
    const listsSection = document.getElementById("lists");
    addEventsToElement(listsSection, {
        "click": clickAddTaskEventHandler, 
        "dblclick": editTaskEventHandler,
        "keydown": editTaskEventHandler,
    });
    
    //event listeners to the section the api section
    const apiSection = document.getElementById("api-interaction-section");
    apiSection.addEventListener("click", clickEventHandlerApi);
        
    //event listener to search input
    addEventsToElement(document.getElementById("search"), {"keyup": searchEventHandler});
    
    //add event listener for each task-list to enable drag option
    const listSections = listsSection.querySelectorAll(".list-section");
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

function indicateTheme() {
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
}

/*
DOM functions
*/
//Displays the tasks lists to DOM
function generateLists() {
    const listsSection = document.getElementById("lists");
    const ulLists = listsSection.querySelectorAll("ul");
    
    for(const list of ulLists) {
        while(list.firstChild) list.removeChild(list.firstChild);
        const tasksList = getTasksList(list.closest(".list-section").dataset.listType);
        for(const task of tasksList) {
            const li = createTaskElement(task);
            const span = createInfoElement();
            list.append(li, span);
        }
    }
}

function getTasksList(listType, item = "tasksObjects") {
    const allObjectsTasks = JSON.parse(localStorage.getItem(item));
    return allObjectsTasks[listType];
}

function createTaskElement(task = {}) {
    const li = createElement("li", [task.task], ["task"], {
        "data-task": task.task, 
        "data-date": task.date, 
        "data-reminder": task.reminder,
        draggable: "true",
    }, {
        "blur": blurEventHandler,
        "mouseover": mouseoverTaskEventHandler,
        "dragstart": dragstartTaskEventHandler,
        "dragend": dragendTaskEventHandler,
        "dragover": dragoverTaskEventHandler,
        "dragleave": dragleaveTaskEventHandler,
    });
    return li;
}

function createInfoElement() {
    const span = createElement("span", ["🛈"], ["info-icon"], {}, {
        "mouseover": mouseoverInfoEventHandler,
        "mouseout": mouseoutInfoEventHandler,
    });
    return span;
}

//Handles the dragstart of a task element
function dragstartTaskEventHandler(e) {
    e.target.classList.add("dragging");
    document.getElementById("delete-drag").classList.add("red-bg-color");
}

//Handles the dragend of a task element
function dragendTaskEventHandler(e) {
    e.target.classList.remove("dragging");
    document.getElementById("delete-drag").classList.remove("red-bg-color");
    dragendEventHandler(e);
}

//Takes an object that has keys=types and its values=functions and sets the event listener in the element
function addEventsToElement(elem, eventListenerObj) {
    for(const type in eventListenerObj) {
        elem.addEventListener(type, eventListenerObj[type]);
    }
}

function filterLists(query) {
    const allLiTasks = document.querySelectorAll('.task');
    
    for(const liTask of allLiTasks) {
        const task = liTask.textContent.toLowerCase();
        const infoSpan = liTask.nextElementSibling;
        if(searchByQuery(task, query)) elementsDisplay([liTask, infoSpan]);
        else elementsDisplay([liTask, infoSpan], "none");
    }
}
function searchByQuery(str, query) {
    return (str.search(new RegExp(query.replace(/\s+/, '|'))) !== -1); 
}
function elementsDisplay(elements, display = '') {
    for(const elem of elements) {
        elem.style.display = display;
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

function createElement(tagName, children = [], classes = [], attributes = {}, eventListeners = {}) {
    const element = document.createElement(tagName);
    for(const child of children) element.append(child);

    element.classList = classes.join(" ");
    for(const attr in attributes) element.setAttribute(attr, attributes[attr]);

    for(const event in eventListeners) element.addEventListener(event, eventListeners[event]);

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
    if(!e.target.classList.contains("add-task__input") && !e.target.classList.contains("add-task__button")) return;
    if(e.target.classList.contains("add-task__input")) {
        if(e.key !== "Enter") return;
    }
    const listSection = e.target.closest(".list-section");
    const [taskInput, reminderInput] = [listSection.querySelector(".add-task__input"), listSection.querySelector(".add-task__reminder")];
    const listType = listSection.dataset.listType;

    if(isVarFalsyAlert(taskInput.value, () => window.alert("Invalid Input!"))) return; 

    const task = taskConstructor(taskInput.value, (reminderInput.value ? new Date(reminderInput.value).toLocaleString() : null));

    if(task.reminder) setReminderTimeout(task.date, task.reminder, () => alert(`Reminder from "${listType}" list:\n"${task.task}"`));

    addTask(task, listType);

    [taskInput.value, reminderInput.value, reminderInput.type] = ["", "", "text"];

    generateLists();
}

function setReminderTimeout(date, reminder, func) {
    const reminderInMilliseconds = (new Date(reminder).getTime() - new Date(date).getTime());
    setTimeout(func, reminderInMilliseconds);
}

function taskConstructor(task, reminder, date = new Date().toLocaleString()) {
    return {task, date, reminder};
}

function isVarFalsyAlert(variable, alertMessage = (() => window.alert("Invalid!"))) {
    if(variable) {
        return false;
    }
    alertMessage();
    return true;
}


//Handles the task edit
function editTaskEventHandler(e) {
    if(!e.target.classList.contains("task")) return;

    const liTask = e.target;
    toggleEditTaskProperties(liTask, e);

    if(e.key === "Enter") liTask.blur(); // it executes the blurEventHandler which updates the task
}

function updateEditedTask(liTask) {
    const listType = liTask.closest(".list-section").dataset.listType;
    const newTask = taskConstructor(liTask.textContent, liTask.dataset.reminder);
    const oldTask = taskConstructor(liTask.dataset.task, liTask.dataset.date, liTask.dataset.reminder);
    updateTask(newTask, oldTask, listType);
}

function toggleEditTaskProperties(liTask, e = {type: null}) {
    liTask.contentEditable = liTask.contentEditable ? true : null; //true
    liTask.draggable = liTask.draggable ? false : true; //false
    liTask.classList.toggle("text-cursor");
    if(e.type === "dblclick") liTask.focus();
}

//Handles the blur event so if the task element loses focus, the change will be saved.
function blurEventHandler(e) {
    if(e.target.classList.contains("task")) {
        const liTask = e.target;
        toggleEditTaskProperties(liTask, e);
        updateEditedTask(liTask);
        generateLists();
    }
}

//Handles the task movements between lists
function mouseoverTaskEventHandler(e) {
    document.addEventListener("keydown", numberKeyDownEventHandler);
    e.target.addEventListener("mouseout", mouseoutTaskEventHandler);
}

function mouseoutTaskEventHandler(e) {
    document.removeEventListener("keydown", numberKeyDownEventHandler);
    e.target.removeEventListener("mouseout", mouseoutTaskEventHandler);
}

function numberKeyDownEventHandler(e) {
    const listsObj = { 1: "todo", 2: "in-progress", 3: "done" }
    if(!(e.key in listsObj) || !e.altKey) return;
    
    const mouseOverElements = document.querySelectorAll(":hover");
    const liMouseOn = mouseOverElements[mouseOverElements.length - 1].closest(".task");

    const task = taskConstructor(liMouseOn.textContent, liMouseOn.dataset.reminder, liMouseOn.dataset.date);

    const previousListType = liMouseOn.closest(".list-section").dataset.listType;

    const newListType = listsObj[e.key];

    moveTask(task, previousListType, newListType);
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
    if(hoverElements[hoverElements.length - 1].closest("#delete-drag")) return deleteTaskHandler(e);

    const listSection = hoverElements[hoverElements.length - 1].closest(".list-section");
    if(isVarFalsyAlert(listSection, () => window.alert("You are not allowed to drag there!"))) return;

    const ulList = listSection.querySelector("ul");
    const newListType = listSection.dataset.listType;
    const previousListType = e.target.closest(".list-section").dataset.listType;
    const task = taskConstructor(e.target.textContent, e.target.dataset.reminder, e.target.dataset.date);
    
    const index = indicateTaskDragIndex(ulList, e);
    
    moveTask(task, previousListType, newListType, index);
}

function indicateTaskDragIndex(ulList, e) {
    const listBounds = ulList.getBoundingClientRect();
    const y = e.clientY;
    let index = getDragIndexTaskDOM(y, listBounds, e.target.offsetHeight);

    if(e.target.closest("ul") === ulList) {
        const liIndex = getElementIndex(e.target);
        if(liIndex < index) index--;
    } 
    return index;
}

function deleteTaskHandler(e) {
    const listType = e.target.closest(".list-section").dataset.listType;
    const task = taskConstructor(e.target.textContent, e.target.dataset.reminder, e.target.dataset.date);
    removeTask(task, listType);
    generateLists();
    return true;
}


//Handles the dragover/dragleave event of a task and add a class to indicate what position to insert in
function dragoverTaskEventHandler(e) {
    const ulList = e.target.closest("ul");
    const listBounds = ulList.getBoundingClientRect();
    const y = e.clientY;
    const liTasks = ulList.querySelectorAll("li");
    const dragIndex = getDragIndexTaskDOM(y, listBounds, liTasks[0].offsetHeight);
    const taskIndex = getElementIndex(e.target);

    liTasks.forEach((li) => { li.classList.remove("dragover-border-bottom", "dragover-border-top"); });

    if(dragIndex !== liTasks.length) liTasks[dragIndex].classList.add("dragover-border-top");
    else liTasks[taskIndex].classList.add("dragover-border-bottom");
}

function dragleaveTaskEventHandler(e) {
    const liTasks = e.target.closest("ul").querySelectorAll("li");
    liTasks.forEach((li) => { li.classList.remove("dragover-border-bottom", "dragover-border-top"); });
}

//Handles the mouseover event and displays a div with info of the task
function mouseoverInfoEventHandler(e) {
    const infoDiv = document.querySelector(".info-div");
    infoDiv.classList.remove("display-none");

    const task = getTaskByName(e.target.previousElementSibling.dataset.task, e.target.closest(".list-section").dataset.listType);

    const ulTask = createElement("ul", createInfoList(task));
    infoDiv.append(ulTask);

    const left = e.pageX;
    const top = e.pageY;
    const divHeight = infoDiv.offsetHeight;
    infoDiv.style.left = left - 100 + "px";
    infoDiv.style.top = top - (divHeight / 2) - 20 + "px";
}

function createInfoList(task) {
    const liTaskText = createElement("li", [task.task], [], {"data-highlightword": "Task: "});
    const liTaskDate = createElement("li", [task.date.split(", ")[0]], [], {"data-highlightword": "Date: "});
    const liTaskTime = createElement("li", [task.date.split(", ")[1]], [], {"data-highlightword": "Time: "});
    const liTaskReminder = createElement("li", [task.reminder], [], {"data-highlightword": "Reminder: "});
    return [liTaskText, liTaskDate, liTaskTime, liTaskReminder];
}
function mouseoutInfoEventHandler(e) {
    const infoDiv = document.querySelector(".info-div");
    infoDiv.classList.add("display-none");
    while(infoDiv.firstChild) infoDiv.removeChild(infoDiv.firstChild);
}


/*
Local Storage functions (task is an object)
*/

function getTaskByName(taskName, listType) {
    const allObjectsTasks = JSON.parse(localStorage.getItem("tasksObjects"));
    const i = allObjectsTasks[listType].findIndex(x => x.task === taskName);
    return allObjectsTasks[listType][i];
}

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
    const j = allObjectsTasks[listType].findIndex(x => x.task === oldTask.task);
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
    removeTask(task, previousListType);

    if(!spliceIndex) addTask(task, newListType);
    else spliceTasks(task, spliceIndex, newListType);
    
    generateLists();
}

function setLocalStorage() {
    const setTasks = {
        "todo": [],
        "in-progress": [],
        "done": [],
    }
    if(!localStorage.getItem("tasks")) localStorage.setItem("tasks", JSON.stringify(setTasks));
    if(!localStorage.getItem("tasksObjects")) localStorage.setItem("tasksObjects", JSON.stringify(setTasks));
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
async function apiRequest(method, tasksObjects = null) {
    const response = await fetch("https://json-bins.herokuapp.com/bin/614afa054021ac0e6c080cc3", {
        method,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: tasksObjects ? JSON.stringify({tasks: tasksObjects}) : null, 
    });
    return response;
}

async function saveTasksToApi(tasksObjects) {
    toggleLoader();

    const response = await apiRequest("PUT", tasksObjects);

    if(!response.ok) alert(`error status! ${response.status}`);

    toggleLoader();
}

async function loadTasksFromApi() {
    toggleLoader();

    const response = await apiRequest("GET");

    if(!response.ok) alert(`status error! ${response.status}`);

    const data = await response.json();
    const tasks = data.tasks;

    replaceAllTasks(tasks);
    
    toggleLoader();
}


/*
Helper functions
*/

//loader gif display function
function toggleLoader() {
    const div = document.querySelector(".api-interaction > div");
    if(div.lastElementChild.tagName === "IMG") {
        document.getElementById("loader-img").remove();
    } else {
        const loaderImg = createElement("img", [], ["loader"], {id: "loader-img", src: "../images/loading.gif"});
        div.append(loaderImg);
    }
}

function getElementIndex(element) {
    const parent = element.parentElement;
    const childrenType = parent.querySelectorAll(element.tagName);
    return Array.prototype.indexOf.call(childrenType, element);
}