import todoStore from '../store/todo.store';
import html from './app.html?raw';
import { renderTodos } from './use-cases';

const elementIds = {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
}


/**
 * 
 * @param {String} elementId 
 */
export const App = (elementId) =>{

const displayTodos = () => {
const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
renderTodos( elementIds.TodoList, todos );
}

//CUANDO LA FUNCION APP() SE LLAMA
(()=>{

const app=document.createElement('div');
app.innerHTML = html;
document.querySelector(elementId).append(app);
displayTodos();
})();


// Referencias HTML
const newDescriptionInput = document.querySelector(EelementIDs.NewTodoInput);
//ARREGLAR ELEMENTSIDS

}