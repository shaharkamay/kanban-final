"use strict";

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
    
    const li = createElement("li", [taskInput.value], ["task"], {"data-task": taskInput.value});
    ul.prepend(li);
    taskInput.value = "";
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
this function handles the task movements between lists
*/
function handleMoveTask(e) {
    const mouseOverElements = document.querySelectorAll(":hover");
    const liMouseOn = mouseOverElements[mouseOverElements.length - 1];
    
    if(liMouseOn.tagName !== "LI" || e.key !== 'Alt') return;

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
    const keyPressed = e.key

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




/*
this function generates ID to a list
*/
function generateId(arr) {
    let max = 0;
    for (let obj of arr) {
        if(obj.id > max) max = obj.id;
    }
    return max + 1;
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
            const li = createElement("li", [task], ["task"], {"data-task": task});
            list.append(li);
        }
    }
}

/*
this function sort a list by the task's date-time
*/
// function sortListByDate(list) {
//     return list.sort((a, b) => {
//         if(Date.parse(a.date) > Date.parse(b.date)) return -1;
//     });
// }

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
    for(const input of inputTasksElements) input.addEventListener("keypress", handleAddTask);

    const ulLists = document.querySelectorAll("ul");
    
    const listsSection = document.getElementById("lists");
    listsSection.addEventListener("click", handleAddTask);
    listsSection.addEventListener("dblclick", handleEditTask)
    document.addEventListener("keypress", handleEditTask)
    document.addEventListener("keydown", handleMoveTask);

    generateLists();


})();




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

function moveTask(task, previousListType, newListType) {
    removeTask(task, previousListType);
    addTask(task, newListType);

    generateLists();
}