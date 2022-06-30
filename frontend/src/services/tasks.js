import axios from 'axios';

const baseUrl = "http://localhost:3001"

export const allTasks = async() => {
  try {
    const { data } = await axios.get(baseUrl);
    console.log(data);
    return data;
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
    console.log(edit, id);
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
    const tasks = await axios.get(`${baseUrl}/queryTitle/?search=${title}`);
    console.log(tasks);
    return tasks.data;
  } catch(error) {
    console.log(error);
  }
};

export const taskByDate = async(date) => {
  try {
    const tasks = await axios.get(`${baseUrl}/queryDate/?search=${date}`);
    console.log(tasks);
    return tasks.data;
  } catch(error) {
    console.log(error);
  }
};