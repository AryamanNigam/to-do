import "./styles.css";
import { Task } from "./tasks"
import "./today"
import "./upcoming"
import "./projects"
import "./priority"
import {addTask, deleteTask} from "./domManipulation"


const deleteButton = document.querySelector(".task-delete-button");
const editButton = document.querySelector(".edit-button");
const newButton = document.querySelector("#new-task");

document.addEventListener("click", (event) => {
    const deleteButton = event.target.closest(".task-delete-button");
    if (deleteButton) {
        const taskElement = deleteButton.closest(".task");
        if (taskElement) {
            deleteTask(taskElement); 
        }
    }
});

newButton.addEventListener("click", () => {
    addTask();
});

const t1 = new Task("Task One", "Description One", "2023-01-01", "High", "Notes One", false, "Project One");
localStorage.setItem("t1", JSON.stringify(t1));

