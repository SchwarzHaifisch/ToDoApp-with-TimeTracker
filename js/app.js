import React from "react";
import {createRoot} from "react-dom/client";
import NewTask from "./new/newTask";
import TaskList from "./PageElements/taskList";

function App() {
    return <>
        <NewTask/>
        <TaskList/>
    </>
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);
