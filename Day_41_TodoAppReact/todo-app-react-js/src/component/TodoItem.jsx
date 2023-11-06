// import React, { useState } from 'react'
// import HttpClient from './helper/httpClient';
// const client = new HttpClient();
// import Button from './component/Button'
//
//
//
// function TodoItem({item}) {
//     const [loading, setLoading] = useState(true);
//     const [apiKeyValue, setApiKeyValue] = useState(localStorage.getItem("apiKey") ?? '');
//     const [contenTodo, setContentTodo] = useState('');
//     const [searchTodo, setSearchTodo] = useState('');
//     const [queryTodo, setQueryTodo] = useState('');
//
//
//
//     };
//
//     async function handleEditTodo(id) {
//         ('handleEditTodo', id);
//    }
//
//     function handleEditContentTodo(event) {
//         ('event', event.target.value);
//     }
//
//     async function handleChangeStatusTodo(id) {
//         ('handleChangeStatusTodo', id);
//         // if(listTodo[id].editting === true) {
//         //      listTodo[id].editting === false
//         // } else {
//         //      listTodo[id].editting === true
//         // }
//     }
//
//
//
//     async function handleDeleteTodo(id) {
//     const { res, data } = await client.delete(`/todos/${id}`, '', apiKeyValue);
//         console.log('handleDeleteTodo res', res);
//         setLoading(true);
//         if (res.status === 200) {
//             toast(data.message)
//             getTodos().finally(() => {
//                 setLoading(false);
//             });
//         }
//     }
//
//
//     async function handleExitEditTodo(id) {
//         ('handleExitEditTodo', id);
//     }
//      async function handleUpdateTodo(id) {
//         const body ={
//             todo: 'update',
//         }
//         const res = await client.patch('/todos', body, apiKeyValue);
//             ('handleUpdateTodo res,id: ', res, id);
//      }
//
//
//
// 		return (
//             <>
//                 <div className="work-item">
//
//                     <div className="work-item__input">
//                     <input
//                         type="text" className={item.isCompleted ? 'line-through' : '' }
//                         value={item.todo}
//                         onChange={() => handleEditContentTodo(item.todo)}
//                         readOnly={item.editting ? false : true}
//                     />
//                     {/* <div>{item.todo}</div> */}
//
//                     </div>
//                     {/*  */}
//                     <div className="work-item__action-btn">
//
//                     {item.editting ?
//                     <div className="status-preview">
//                         <Button onClick={() => handleEditTodo(item._id)} text="Sửa" className="btn-edit" />
//                         <Button onClick={() => handleDeleteTodo(item._id)} text="Xóa" className="btn-del" />
//                     </div>
//                     :
//                     <div className="status-edit">
//
//                         <div className="work-status">
//                         <label htmlFor="completed" onClick={() => handleChangeStatusTodo(item._id)} >
//                             { item.isCompleted ? 'Completed ' : 'Not completed' }
//                         </label>
//
//                         <input id="completed" type="checkbox" defaultChecked={item.isCompleted} onClick={() => handleChangeStatusTodo(item.isCompleted)}/>
//                         {/* !item.isCompleted */}
//                         </div>
//
//
//                         <div className="status-edit__action-btn">
//                         <Button onClick={() => handleExitEditTodo(item._id)} text="Thoát" className="btn-exit" />
//                         <Button onClick={() => handleUpdateTodo(item._id)} text="Update" className="btn-update" />
//                         <Button onClick={() => handleDeleteTodo(item._id)} text="Xóa" className="btn-del" />
//                         </div>
//                     </div>
//                     }
//
//                     </div>
//                     </div>
//             </>
// 		)
// }
//
// export default TodoItem;