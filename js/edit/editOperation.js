import { API_KEY, API_URL } from "../constants";

export const editOperation = async (taskId, operationId, operationData) => {
    try {
        const response = await fetch(`${API_URL}/tasks/${taskId}/operations/${operationId}`, {
            method: 'PUT',
            headers: {
                'Authorization': API_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(operationData)
        });

        if (!response.ok) {
            throw new Error('Failed to edit operation');
        }

        const data = await response.json();
        return data;
    } catch (err) {
        console.error('Error editing operation:', err);
        throw err;
    }
};
