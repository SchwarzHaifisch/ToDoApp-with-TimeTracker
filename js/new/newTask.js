import React, { useState } from "react";
import { addTask } from "../add/addTask";

function NewTask() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleAddTask = async (e) => {
        try {
            const newTaskData = {
                title: title,
                description: description,
                status: "open",
            };

            const newTask = await addTask(newTaskData);
            setTitle("");
            setDescription("");
        } catch (error) {
            console.error("There was a problem with adding a new task:", error);
        }
    };

    return (
        <div className="card shadow">
            <div className="card-body">
                <h1 className="card-title">New Task</h1>
                <form>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="title"
                            value={title}
                            placeholder="Title"
                            onChange={handleTitleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="description"
                            value={description}
                            placeholder="Description"
                            onChange={handleDescriptionChange}
                        />
                    </div>
                    <button className="btn btn-info" onClick={handleAddTask}>
                        Add Task
                        <i className="fas fa-plus-circle ml-1"></i>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default NewTask;
