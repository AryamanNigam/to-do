class Task{
    constructor(title, description, dueDate, priority, notes, done, project){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.done = done;
        this.project = project;
    }
}

export {Task}