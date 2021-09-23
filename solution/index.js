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
    const dataType = taskInput.closest("section").dataset.type;

    if(!taskInput.value) {
        alert("Invalid input!");
        return;
    }
    
    let allTasksObj = {};
    let listArr = [];
    if(localStorage.getItem("tasks")) {
        const tasksJson = localStorage.getItem("tasks");
        allTasksObj = JSON.parse(tasksJson);
        if(allTasksObj.hasOwnProperty(dataType)) {
            listArr =  allTasksObj[dataType];
        }
    }

    // const taskObj = {
    //     id: generateId(listArr),
    //     task: taskInput.value,
    //     date: new Date().toLocaleString(),
    // }

    // listArr.push(taskObj);
    listArr.push(taskInput.value);

    allTasksObj[dataType] = listArr;


    localStorage.setItem("tasks", JSON.stringify(allTasksObj));

    const li = createElement("li", [taskInput.value], ["task"], {});
    ul.prepend(li);
    taskInput.value = "";
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

/*
this function display the tasks lists to DOM
*/
function generateLists() {
    const ulLists = document.querySelectorAll("ul");
    for(const list of ulLists) {
        const dataType = list.closest("section").dataset.type;
        if(localStorage.getItem("tasks")) {
            const allTasksObj = JSON.parse(localStorage.getItem("tasks"));
            const tasksList = allTasksObj[dataType];
            sortListByDate(tasksList);
            for(const task of tasksList) {
                const li = createElement("li", [task.task], ["task"], {});
                list.append(li);
            }
        }
    }
}

/*
this function sort a list by the task's date-time
*/
function sortListByDate(list) {
    return list.sort((a, b) => {
        if(Date.parse(a.date) > Date.parse(b.date)) return -1;
    });
}

/*
page structure
*/
( () => {

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

    const listsSection = document.getElementById("lists");
    listsSection.addEventListener("click", handleAddTask);

    generateLists();
})();