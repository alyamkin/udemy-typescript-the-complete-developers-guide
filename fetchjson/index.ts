import axios from 'axios';

const url = `https://jsonplaceholder.typicode.com/todos/1`;

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const fetchData = async () => {
  try {
    const response = await axios.get(url);

    const { id, title, completed } = response.data as Todo;

    logTodo(id, title, completed);
  } catch (error) {
    console.log(error);
  }
};

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
      The Todo with ID: ${id}
      Has a title of: ${title}
      Is it finished? ${completed}
    `);
};

fetchData();
