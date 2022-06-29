import axios from 'axios';

const baseUrl = "http://localhost:3001/tasks"

export const createTask = async(product) => {
  try {
    await axios.post(baseUrl, product);
  } catch (error) {
    console.log(error);
  };
};

export const allTasks = async() => {
  try {
    const tasks = await axios.get(baseUrl);
    return tasks;
  } catch (error) {
    console.log(error);
  }
};

export const delTask = async(id) => {
  try {
    await axios.delete(`${baseUrl}/${id}`);
  } catch(error) {
    console.log(error);
  }
};

export const taskByTitle = async(title) => {
  try {
    const tasks = await axios.get(`${baseUrl}/?title_like=${title}`);
    console.log(tasks);
    return tasks.data;
  } catch(error) {
    console.log(error);
  }
};