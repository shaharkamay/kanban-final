"use strict";

/*
page structure
*/
( () => {
    
    setLocalStorage();
    
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
    
    const inputTasksElements = document.querySelectorAll(".add-task > input");
    for(const input of inputTasksElements) input.addEventListener("keyup", handleAddTask);
    
    const ulLists = document.querySelectorAll("ul");
    
    const listsSection = document.getElementById("lists");
    listsSection.addEventListener("click", handleAddTask);
    listsSection.addEventListener("dblclick", handleEditTask);
    listsSection.addEventListener("keydown", handleEditTask);
    
    const apiSection = document.getElementById("api-interaction-section");
    apiSection.addEventListener("click", clickEventHandlerApi);
    
    document.addEventListener("keydown", handleMoveTask);
    
    document.addEventListener("keyup", searchEventHandler);
    
    const listSections = listsSection.querySelectorAll("section");
    listSections.forEach(listSection => {
        listSection.addEventListener("dragover", (e) => e.preventDefault());
    });
    generateLists();
    
})();


/*
DOM functions
*/

/*
this function display the tasks lists to DOM
*/
function generateLists() {
    const ulLists = document.querySelectorAll("ul");
    for(const list of ulLists) {
        while(list.firstChild) list.removeChild(list.firstChild);
        const listType = list.closest("section").dataset.listType;
        const allTasksObj = JSON.parse(localStorage.getItem("tasks"));
        const tasksList = allTasksObj[listType];
        // sortListByDate(tasksList);
        for(const task of tasksList) {
            const li = createElement("li", [task], ["task"], {"data-task": task, draggable: "true"});
            list.append(li);
        }
    }
    
    const liTasks = document.querySelectorAll(".task");
    for(const li of liTasks) {
        li.addEventListener("blur", blurEventHandler);
        li.addEventListener("dragstart", () => li.classList.add("dragging"));
        li.addEventListener("dragend", (e) => {
            li.classList.remove("dragging");
            dragendEventHandler(e);
        });
    }
}

function filterLists(query) {
    const allLiTasks = document.querySelectorAll('.task');
    
    for(const liTask of allLiTasks) {
        const task = liTask.textContent.toLowerCase();
        
        liTask.style.display = task.search(new RegExp(query.replace(/\s+/, '|'))) !== -1 ? '' : "none";
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

function getDragIndexTaskDOM(y, listBounds, taskBounds) {
    const taskHeight = 36;
    const height = listBounds.height;
    const taskPosition = height - (y - listBounds.top);

    const index = Math.round((height - taskPosition) / taskHeight);
    
    return index;
}


/*
Event handlers
*/

/*
Light/Dark theme mode
*/
function applyTheme(theme) {
    document.body.classList.remove("theme-auto", "theme-light", "theme-dark");
    document.body.classList.add(`theme-${theme}`);
}

/*
this function handle the add task event
*/
function handleAddTask(e) {
    if(e.target.tagName !== "INPUT" && e.target.tagName !== "BUTTON") return;

    let taskInput;
    let ul;

    if(e.target.tagName === "INPUT") {
        if(e.key !== "Enter") return;
        taskInput = e.target;
        ul = e.target.parentElement.previousElementSibling
    }
    else if(e.target.tagName === "BUTTON") {
        taskInput = e.target.previousElementSibling;
        ul = e.target.parentElement.previousElementSibling;
    }
    const listType = taskInput.closest("section").dataset.listType;

    if(!taskInput.value) {
        alert("Invalid input!");
        return;
    }
    
    addTask(taskInput.value, listType);
    
    taskInput.value = "";

    generateLists();
}

/*
this function handle the task edit
*/
function handleEditTask(e) {
    if(e.target.tagName !== "LI") return;

    const liTask = e.target;
    liTask.contentEditable = true;
    liTask.focus();

    const listType = liTask.closest("section").dataset.listType;

    if(e.key === "Enter") {
        updateTask(liTask.textContent, liTask.dataset.task, listType);
        liTask.blur();
    }
}

/*
this function handles the blur event so if the task 
element loses focusthe change will be saved.
*/
function blurEventHandler(e) {
    if(e.target.tagName === "LI") {
        const liTask = e.target;
        liTask.contentEditable = false;
        const listType = liTask.closest("section").dataset.listType;
        updateTask(liTask.textContent, liTask.dataset.task, listType);
    }
}

/*
this functions handles the task movements between lists
*/
function handleMoveTask(e) {
    const mouseOverElements = document.querySelectorAll(":hover");
    const liMouseOn = mouseOverElements[mouseOverElements.length - 1];
    
    if(!liMouseOn || liMouseOn.tagName !== "LI" || e.key !== 'Alt') return;

    altKeyDownEventHandler(e);
}
function altKeyDownEventHandler(e) {
    const mouseOverElements = document.querySelectorAll(":hover");
    const liMouseOn = mouseOverElements[mouseOverElements.length - 1];
    
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

    const task = liMouseOn.textContent;
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

/*
this function handles the keyup event so when the
user type a letter, the interface will change 
appropriately.
*/
function searchEventHandler(e) {
    if(document.activeElement.id !== "search") return;
    const searchInput = document.activeElement;
    
    let query = searchInput.value;

    filterLists(query.toLowerCase());
}

/*
this function handles the save and load buttons click
and save data to the API or load data from the API
*/
async function clickEventHandlerApi(e) {
    if(e.target.id === "save-btn") {
        //save to api
        const tasks = JSON.parse(localStorage.getItem("tasks"));
        saveTasksToApi(tasks);
    } else if(e.target.id === "load-btn") {
        //load from api
        await loadTasksFromApi();
        generateLists();
    }
}

function dragendEventHandler(e) {
    const hoverElements =  document.querySelectorAll(":hover");
    const ulList = hoverElements[hoverElements.length - 1].closest("ul");
    const listSection = hoverElements[hoverElements.length - 1].closest("section");
    
    if(!listSection.dataset.listType) return;
    
    const newListType = listSection.dataset.listType;
    const previousListType = e.target.closest("section").dataset.listType;
    const task = e.target.textContent;
    let index = null;

    if(ulList && ulList.children.length > 0) {
        const taskBounds = e.target.getBoundingClientRect();
        const listBounds = ulList.getBoundingClientRect();
        const y = e.clientY;
        index = getDragIndexTaskDOM(y, listBounds, taskBounds);
    }
    moveTask(task, previousListType, newListType, index);
    

}


/*
Local Storage functions
*/
function addTask(task, listType) {
    const tasksJson = localStorage.getItem("tasks");
    const allTasksObj = JSON.parse(tasksJson);
    const listArr =  allTasksObj[listType];
    
    listArr.unshift(task);
    allTasksObj[listType] = listArr;
    
    localStorage.setItem("tasks", JSON.stringify(allTasksObj));
}

function updateTask(newTask, oldTask, listType) {
    const tasksJson = localStorage.getItem("tasks");
    const allTasksObj = JSON.parse(tasksJson);
    const listArr =  allTasksObj[listType];
    
    const i = listArr.findIndex(x => x === oldTask);
    listArr[i] = newTask;
    allTasksObj[listType] = listArr;
    
    localStorage.setItem("tasks", JSON.stringify(allTasksObj));
}

function removeTask(task, listType) {
    const tasksJson = localStorage.getItem("tasks");
    const allTasksObj = JSON.parse(tasksJson);
    const listArr =  allTasksObj[listType];
    
    const i = listArr.findIndex(x => x === task);
    listArr.splice(i, 1);
    
    allTasksObj[listType] = listArr;
    
    localStorage.setItem("tasks", JSON.stringify(allTasksObj));
}

function moveTask(task, previousListType, newListType, spliceIndex) {
    if(!spliceIndex){
        console.log('haha');
        removeTask(task, previousListType);
        addTask(task, newListType);
    } else {
        console.log('hehe');
        removeTask(task, previousListType)
        spliceTasks(task, spliceIndex, newListType);
    }
    
    generateLists();
}

function setLocalStorage() {
    if(!localStorage.getItem("tasks")) {
        const setObjTasks = {
            "todo": [],
            "in-progress": [],
            "done": [],
        }
        localStorage.setItem("tasks", JSON.stringify(setObjTasks));
    }
}

function removeAllTasks(){
    localStorage.removeItem("tasks");
}

function replaceAllTasks(tasks) {
    removeAllTasks();
    localStorage.setItem("tasks", JSON.stringify(tasks));
    
}

function spliceTasks(task, startIndex, listType, deleteCount = 0) {
    const tasksJson = localStorage.getItem("tasks");
    const allTasksObj = JSON.parse(tasksJson);
    const listArr =  allTasksObj[listType];

    listArr.splice(startIndex, deleteCount, task);
    allTasksObj[listType] = listArr;
    
    localStorage.setItem("tasks", JSON.stringify(allTasksObj));
}

/*
API functions
*/
async function saveTasksToApi(tasks) {
    loaderDisplay();

    const response = await fetch("https://json-bins.herokuapp.com/bin/614afa054021ac0e6c080cc3", {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({tasks}),
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

/*
loader gif display function
*/
function loaderDisplay() {
    const div = document.querySelector(".api-interaction > div");
    if(div.lastElementChild.tagName === "IMG") {
        document.getElementById("loader-img").remove();
    } else {
        const loaderImg = createElement("img", [], ["loader"], {id: "loader-img", src: "../images/loading.gif"});
        div.append(loaderImg);
    }
}

/*
this function generates ID to a list
*/
// function generateId(arr) {
//     let max = 0;
//     for (let obj of arr) {
//         if(obj.id > max) max = obj.id;
//     }
//     return max + 1;
// }



/*
this function sort a list by the task's date-time
*/
// function sortListByDate(list) {
//     return list.sort((a, b) => {
//         if(Date.parse(a.date) > Date.parse(b.date)) return -1;
//     });
// }