import "./tasks"
import deleteButton from "../assets/delete.svg?url";
import editButton from "../assets/pencil-svgrepo-com.svg?url";
import { Tasks } from "./tasks";

export const deleteTask = (taskElement) => {
    if (!taskElement) return; 

    const taskList = document.querySelector("#tasks-list");
    if (taskList.contains(taskElement)) {
        taskList.removeChild(taskElement); 
    }

    let tasksLeft = document.querySelector("#tasks-left");
    if (tasksLeft) {
        let currentCount = parseInt(tasksLeft.textContent) || 0;
        tasksLeft.textContent = Math.max(0, currentCount - 1); 
    }
};



export const addTask = () => {
    console.log("hello world");
} 