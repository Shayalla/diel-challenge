import axios from 'axios';

const baseUrl = "http://localhost:3001/tasks"

export const allTasks = async() => {
  try {
    const tasks = await axios.get(baseUrl);
    return tasks;
  } catch (error) {
    console.log(error);
  }
};

export const createTask = async(task) => {
  try {
    await axios.post(baseUrl, task);
  } catch (error) {
    console.log(error);
  };
};

export const editTasks = async(id, task) => {
  try {
    const edit = await axios.put(`${baseUrl}/${id}`, task);
    console.log(edit);
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