import axios from "axios";

const API_URL = "https://hkdjdvibbimznecrvial.supabase.co/rest/v1/notes";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhrZGpkdmliYmltem5lY3J2aWFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3NzM2NDksImV4cCI6MjA2NTM0OTY0OX0.gfwOEIoX7Q0bVJDBVqwwEnAaCXIIuvGPNlx0D1TGl_k";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

export const notesAPI = {
  async fetchNotes() {
    const response = await axios.get(API_URL, { headers });
    return response.data;
  },

  async createNote(data) {
    const response = await axios.post(API_URL, data, { headers });
    return response.data;
  },

  async updateNote(id, data) {
    const response = await axios.patch(`${API_URL}?id=eq.${id}`, data, {
      headers,
    });
    return response.data;
  },

  async deleteNote(id) {
    const response = await axios.delete(`${API_URL}?id=eq.${id}`, {
      headers,
    });
    return response.data;
  },
};
