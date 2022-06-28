import axios from 'axios';

const baseUrl = "http://localhost:3001/products"

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
