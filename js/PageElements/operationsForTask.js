import React, {useState} from "react";
import {editOperation} from "../edit/editOperation";

function OperationsForTask({operation, task}) {
    const [hideForm, setHideForm] = useState(true);
    const [hideAddTimeButton, setAddTimeHideButton] = useState(false);
    const [timeSpent, setTimeSpent] = useState(0);
    const handleTimeChange = (e) => {setTimeSpent(e.target.value);}
    const clickHandler = async (e) => {
        e.preventDefault();
        try {
            const newOperationTime = {
                description: operation.description,
                timeSpent: timeSpent,
            };
            await editOperation(task.id, operation.id, newOperationTime);
            setTimeSpent(0);
            setHideForm(true);
            setAddTimeHideButton(false);
        }catch (e){
            console.error("There was a problem with editing an operation:", e);
        }
    }

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>{operation.description}
                {operation.timeSpent > 0 && (
                    <span className="badge badge-success badge-pill ml-2">{operation.timeSpent}</span>
                )}
            </div>

            <form hidden={hideForm}>
                <div className="input-group input-group-sm">
                    <input type="number"
                           className="form-control"
                           placeholder="Spent time in minutes"
                           name="timeSpent"
                           value={timeSpent}
                           style={{width: '12rem'}}
                    onChange={handleTimeChange}/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-success"
                        onClick={clickHandler}
                        >
                            <i className="fas fa-save"/>
                        </button>
                        <button className="btn btn-outline-dark">
                            <i className="fas fa-times false"/>
                        </button>
                    </div>
                </div>
            </form>

            <div hidden={hideAddTimeButton}>
                {task.status === "open" && (
                    <>
                        <button className="btn btn-outline-success btn-sm mr-2" onClick={() => {
                            setAddTimeHideButton(true);
                            setHideForm(false);
                        }}>
                            Add time
                            <i className="fas fa-clock ml-1"/>
                        </button>
                        <button className="btn btn-outline-danger btn-sm">
                            <i className="fas fa-trash"/>
                        </button>
                    </>
                )}
            </div>
        </li>
    )
}

export default OperationsForTask;
