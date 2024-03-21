import { API_KEY, API_URL } from "../constants";

export const addTask = async (taskData) => {
    try {
        const response = await fetch(`${API_URL}/tasks`, {
            method: "POST",
            headers: {
                Authorization: API_KEY,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(taskData),
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        return data.data;

    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        throw error;
    }
};
