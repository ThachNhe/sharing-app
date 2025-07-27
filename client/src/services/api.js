import { BASE_URL } from "../utils/constants";

export const api = {
  saveSnippet: async (snippet) => {
    const response = await fetch(`${BASE_URL}/snippets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(snippet),
    });

    if (!response.ok) {
      throw new Error("Failed to save snippet");
    }

    return response.json();
  },

  getSnippet: async (id) => {
    const response = await fetch(`${BASE_URL}/snippets/${id}`);

    if (!response.ok) {
      throw new Error("Failed to retrieve snippet");
    }

    return response.json();
  },
};
