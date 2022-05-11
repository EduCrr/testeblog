import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export default {
  getPosts: async () => {
    let { data: json } = await api.get(`/posts`);
    return json;
  },

  getPostId: async (id) => {
    let { data: json } = await api.get(`/posts/${id}`);
    return json;
  },

  getTodo: async () => {
    let { data: json } = await api.get(`/todos`);
    return json;
  },
};
