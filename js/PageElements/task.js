import React, {useState, useEffect} from "react";
import {getOperations} from "../get/getOperations";
import NewOperation from "../new/newOperation";
import OperationsForTask from "./operationsForTask";

const Task = ({task}) => {
    const [operations, setOperations] = useState([]);
    const [hideNewOperation, setHideNewOperation] = useState(true)

    useEffect(() => {
        const fetchOperations = async () => {
            try {
                await getOperations(task.id, setOperations);
            } catch (error) {
                console.error("Error Fetching Data:", error);
            }
        };
        fetchOperations();
    }, []);

    return (<section className="card mt-5 shadow-sm">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h5>{task.title}</h5>
                        <h6>{task.description}</h6>
                    </div>
                    <div>
                        {task.status === "open" && (<>
                                <button className="btn btn-info btn-sm mr-2" onClick={() => {
                                    setHideNewOperation(false);
                                }}>
                                    Add Operation
                                    <i className="fas fa-plus-circle ml-1"/>
                                </button>
                                <button className="btn btn-dark btn-sm">
                                    Finish
                                    <i className="fas fa-archive ml-1"></i>
                                </button>
                            </>)}
                        <button className="btn btn-outline-danger btn-sm ml-2">
                            <i className="fas fa-trash false"></i>
                        </button>
                    </div>
                </div>
            </div>
            <ul className="list-group list-group-flush">
                <NewOperation hid={hideNewOperation} taskId={task.id}/>
                {operations.map((operation) => (
                    <OperationsForTask operation={operation} task={task} key={operation.id}/>
                    ))}
            </ul>
        </section>)
}

export default Task;