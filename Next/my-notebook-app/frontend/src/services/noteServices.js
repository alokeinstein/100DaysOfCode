// frontend/src/services/noteService.js

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Helper function to handle fetch responses
const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Something went wrong');
  }
  return response.json();
};

export const getNotes = async () => {
  const response = await fetch(`${API_URL}/notes`);
  return handleResponse(response);
};

export const getNote = async (id) => {
  const response = await fetch(`${API_URL}/notes/${id}`);
  return handleResponse(response);
};

export const createNote = async (note) => {
  const response = await fetch(`${API_URL}/notes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
  });
  return handleResponse(response);
};

export const updateNote = async (id, note) => {
  const response = await fetch(`${API_URL}/notes/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
  });
  return handleResponse(response);
};

export const deleteNote = async (id) => {
  const response = await fetch(`${API_URL}/notes/${id}`, {
    method: 'DELETE',
  });
  return handleResponse(response);
};

/* 
Notes:

Error Handling: The handleResponse function ensures that any non-2xx responses are handled gracefully.
Environment Variables: Ensure NEXT_PUBLIC_API_URL is correctly set in your .env.local file.
*/