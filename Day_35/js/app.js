/** @format */

import { client } from "./client.js";

async function renderListTodo() {
	const { data:  listTask } = await client.get(`/tasks`);
    console.log('listTask :', listTask, listTask.length);

    const listTaskWrap = document.querySelector('.list-task-wrap');

    console.log('listTaskWrap: ',  [listTaskWrap.children]);

    const listTaskHtml = [];
    listTask.map(item => {
        listTaskHtml.push(
            `
            <div class="task-item">
                <div class="name-task">${item.name}</div>

                <div class="button-container">
                    <button class="btn-custom btn-trash"><i class="fa fa-trash" aria-hidden="true"></i></button>
                    <button class="btn-custom btn-edit"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="btn-custom btn-check"><i class="fa-solid fa-check-to-slot"></i></button>
                </div>
            </div>
            `
        );
    });

    listTaskWrap.innerHTML = listTaskHtml;

    // console.log('listTaskHtml: ', listTaskHtml);

}

renderListTodo();

// @click="deleteItem(${item.id})"
const btnDelete = document.querySelector('.btn-trash')
console.log('btnDelete: ', btnDelete);

function deleteItem(id) {
    console.log('Delete', id);
}