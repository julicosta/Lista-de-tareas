import { Todo } from "../models/todo.model";


/**
 * 
 * @param {Todo} todo 
 */


export const createTodoHTML = ( todo ) => {

if(!todo) throw new Error( 'A TODO object is rquired');

const {done, description, id} = todo; //desestructuracion de datos

const html = 
`
<div class="view">
    <input class="toggle" type="checkbox" ${ done ? 'cheked' : ''}>
    <label>${ description }</label>
    <button class="destroy"></button>
</div>
<input class="edit" value="Create a TodoMVC template">
`;

const liElement = document.createElement('li');
liElement.innerHTML = html;
liElement.setAttribute('data-id', id );

if(todo.done)
liElement.classList.add('completed');

return liElement;

}