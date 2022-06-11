import axios from "axios";

const URL = 'http://jsonplaceholder.typicode.com/todos/1';

interface Todo{
    id: number;
    title: string;
    completed: boolean;
}

axios.get(URL).then(response => {
    //console.log(response.data);
    const todo = response.data as Todo;
    
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logTodo(id, title, completed);
    
});


const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
        O To-Do com ID ${id}
        Tem título: "${title}"
        E está concluído?: ${completed}
    `);
}