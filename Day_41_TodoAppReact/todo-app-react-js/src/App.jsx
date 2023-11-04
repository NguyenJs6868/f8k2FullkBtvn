// eslint-disable-next-line react-hooks/exhaustive-deps
import { useEffect, useState } from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from './component/loading/Loading';
import './App.scss'
import Button from './component/Button'

import HttpClient from './helper/httpClient';
const client = new HttpClient();

function App() {
  const [loadding, setLoadding] = useState(true);
  const [apiKey, setApiKey] = useState(localStorage.getItem("apiKey"));
  const [contenTodo, setContenTodo] = useState('To do ');

  const [listTodo, setListTodo] = useState([]);

     const [filters, setFilters] = useState({
          querry: "",
     });


  useEffect(() => {
    const apiKeyLocal =  localStorage.getItem("apiKey");
    const emailLocal =  localStorage.getItem("email");
    // Chưa có
    if (!apiKeyLocal) {
      getApiKey();
    } else {
      if (emailLocal){
        toast(`Chào mừng bạn  ${emailLocal}`);
      } else {
        window.alert('Bạn cần nhập email để tiếp tục');
        localStorage.clear();
        window.location.reload();
      }
    }
  }, []);

  useEffect(() => {
    if (apiKey) {
      getTodos(apiKey);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

     // Gọi API Key
     async function getApiKey() {
          let email = window.prompt("Please enter your email", "example@example.com");
          if (!email) {
               window.alert('Bạn cần nhập email để tiếp tục');
               window.location.reload();
          }

          const { data} = await client.get('/api-key', {email});
          const { code, data: dataGetApiKey} = data
          if (code === 200) {
               const { apiKey } = dataGetApiKey;
               localStorage.setItem("apiKey", apiKey);
               localStorage.setItem("email", email);
               toast(`Chào mừng bạn`);
          }
     }
      // xây form -> có action
      // xây dựng hàm post truyền vào todo và api key,
      // xây hàm delete truyền vào apikey và id của item todo
      // xây hàm patch truyền vào todo hoặc is completeed hoặc cả hai

      //   async function deleteTodo() {
      //     console.log('delete');
      //   };

     // Get list Todo
      const getTodos = async (apiKey) => {
        setLoadding(true);
        const { data, res } = await client.get('/todos', {}, apiKey);
        if (res.status === 200) {
          const { listTodo } = data.data
          setListTodo(listTodo);
          setLoadding(false);
        } else if (res.status === 401) {
          setLoadding(false);
          getApiKey();
        }
      };

     // const listTodo = [
     //      {
     //           id: 1,
     //           content: 'Todo 1',
     //           // status_complete: true,
     //           status_complete: false,
     //           // editting: true,
     //           editting: false,
     //      },
     //      {
     //           id: 2,
     //           content: 'Todo 2',
     //           status_complete: false,
     //           editting: true,
     //      }
     // ]


     // ADD Todo
     async function handleAddTodo() {
          console.log('handleAddTodo');
          const body = {
               todo: contenTodo,
          }

          const { data } = await client.post('/todos', body, apiKey);
          // const { code, data: dataAddTodo} = data;

          console.log('data', data);
          // console.log('dataAddTodo', dataAddTodo);
     }

     function handleEditContentTodo(event) {
          ('event', event.target.value);
     }

     async function handleEditTodo(id) {
          ('handleEditTodo', id);
     }

     async function handleChangeStatusTodo(id) {
          ('handleChangeStatusTodo', id);
          // if(listTodo[id].editting === true) {
          //      listTodo[id].editting === false
          // } else {
          //      listTodo[id].editting === true
          // }
     }
     async function handleDeleteTodo(id) {
          ('handleDeleteTodo', id);
     }
     async function handleExitEditTodo(id) {
          ('handleExitEditTodo', id);
     }
     async function handleUpdateTodo(id) {
          ('handleUpdateTodo', id);
     }

  return (
    <>
    <Loading status={loadding}/>

    <div className="todo-app-react">
      <div className="container">
        <div className="todo-app-react-frame">
          <div className="todo-app-react-wrap">

            <div className="todo-app-react__title">Welcome to Todo App</div>
            {/*  */}
            <div className="todo-app-react__functions">
              <div className="function-add">
                <input
                    type="text" placeholder='Thêm một việc làm mới' value={contenTodo}
                    onChange={(event) => setContenTodo(event.target.value)}
                />

                <Button onClick={handleAddTodo} text="Thêm mới" className="btn-add" />
              </div>
            </div>
            {/*  */}
            <div className="todo-app-react__list-work">
              {
               listTodo ?
               listTodo.map((item, index) => (

                    <div key={index + 1} className="work-item">

                      <div className="work-item__input">
                        <input
                          type="text" className={item.isCompleted ? 'line-through' : '' } defaultValue={item.todo}
                          onChange={(event) => handleEditContentTodo(event)}
                        />
                      </div>
                      {/*  */}
                      <div className="work-item__action-btn">

                        {item.editting ?
                        <div className="status-preview">
                          <Button onClick={() => handleEditTodo(item.id)} text="Sửa" className="btn-edit" />
                          <Button onClick={() => handleDeleteTodo(item.id)} text="Xóa" className="btn-del" />
                        </div>
                        :
                        <div className="status-edit">

                          <div className="work-status">
                            <label htmlFor="completed" onClick={() => handleChangeStatusTodo(item.id)} >
                              { item.isCompleted ? 'Completed ' : 'Not completed' }
                            </label>

                            <input id="completed" type="checkbox" defaultChecked={true} onClick={() => handleChangeStatusTodo(item.id)}/>
                            {/* !item.isCompleted */}
                          </div>


                          <div className="status-edit__action-btn">
                            <Button onClick={() => handleExitEditTodo(item.id)} text="Thoát" className="btn-exit" />
                            <Button onClick={() => handleUpdateTodo(item.id)} text="Update" className="btn-update" />
                            <Button onClick={() => handleDeleteTodo(item.id)} text="Xóa" className="btn-del" />
                          </div>
                        </div>
                        }

                      </div>
                  </div>
                  ))
                :
                <div className='todo-app-react__list-work-empty'>
                  <div className="work-item">
                    <span>Không có todo</span>
                  </div>
                </div>
              }

              {/*  */}

            </div>

            {/*  */}
          </div>
        </div>
      </div>
    </div>

    <ToastContainer />

  </>
  )
}

export default App


{/*
  import reactLogo from './assets/react.svg'
  import viteLogo from '/vite.svg'
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src={viteLogo} className="logo" alt="Vite logo" />
    </a>
    <a href="https://react.dev" target="_blank">
      <img src={reactLogo} className="logo react" alt="React logo" />
    </a>
  </div>
  <h1>Vite + React</h1>
  <div className="card">
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
    <p>
      Edit <code>src/App.tsx</code> and save to test HMR
    </p>
  </div>
  <p className="read-the-docs">
    Click on the Vite and React logos to learn more
  </p> */}