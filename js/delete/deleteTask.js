import { API_KEY, API_URL } from "../constants";
export const finishTask = async (taskId) => {
    try {
        const response = await fetch(`${API_URL}/tasks/${taskId}`,{
            method: "DELETE",
            headers: {
                Authorization: API_KEY,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(taskData),
        });
        if (!response.ok){
            throw new Error("Network response was not ok");
        }
    } catch (e) {
        console.error("There was a problem with the fetch operation:", error);
        throw e;
    }


}