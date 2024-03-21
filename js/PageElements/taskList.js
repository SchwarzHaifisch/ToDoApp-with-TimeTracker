import React, { useState, useEffect } from "react";
import { getTasks } from "../get/getTasks";
import Task from "./task";



function TaskList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                await getTasks(setTasks);
            } catch (error) {
                console.error("Error Fetching Data:", error);
            }
        };
        fetchTasks();
    }, []);

    return (
        <div>
            {tasks.map((task) => (
                <Task task={task} key={task.id}/>
            ))}
        </div>
    );
}

export default TaskList;
