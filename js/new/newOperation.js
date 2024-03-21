import React, { useState } from "react";
import { addOperation } from "../add/addOperation";

export default function NewOperation({ hid, taskId}) {
    const [operationDescription, setOperationDescription] = useState("");

    const handleAddOperation = async (e) => {
        e.preventDefault();
        try {
            const newOperationData = {
                description: operationDescription,
                timeSpent: 0,
            };
            await addOperation(taskId, newOperationData);
            setOperationDescription("");
        } catch (error) {
            console.error("There was a problem with adding a new operation:", error);
        }
    };

    return (
        <div className="card-body" hidden={hid}>
            <form>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Operation description"
                        name="operationDescription"
                        value={operationDescription}
                        onChange={(e) => {
                            setOperationDescription(e.target.value);
                        }}
                    />

                    <div className="input-group-append">
                        <button className="btn btn-info" onClick={handleAddOperation}>
                            Add
                            <i className="fas fa-plus-circle ml-1"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
