import { API_KEY, API_URL } from "../constants";

export const addOperation = async (taskId, operationData) => {
    try {
        const response = await fetch(`${API_URL}/tasks/${taskId}/operations`, {
            method: 'POST',
            headers: {
                'Authorization': API_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(operationData)
        });

        if (!response.ok) {
            throw new Error('Failed to add operation');
        }

        const data = await response.json();
        return data;

    } catch (err) {
        console.error('Error adding operation:', err);
        throw err;
    }
};
