// eslint-disable-next-line react-hooks/exhaustive-deps
import { useEffect, useState } from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import loading from './component/loading/Loading';



// useState
import './App.css'
import Button from './component/button'

import HttpClient from './helper/httpClient';
const client = new HttpClient();

function App() {
  const [apiKey, setApiKey] = useState(localStorage.getItem("apiKey"));

  const [filters, setFilters] = useState({
    apiKey: apiKey,
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
  //
  //   };

  const getTodos = async (apiKey) => {

    const { data, res } = await client.get('/todos', filters, apiKey);
    if (res.ok) {
     console.log('data', data);
    }
  };

  const listTodo = [
    {
      id: 1,
      content: 'Todo 1',
      // status_complete: true,
      status_complete: false,
      // editting: true,
      editting: false,
    },
    {
      id: 2,
      content: 'Todo 2',
      status_complete: false,
      editting: true,
    }
  ]


  function handleWriteNewContentTodo(event) {
    console.log('event', event.target.value);
  }

  function handleEditContentTodo(event) {
    console.log('event', event.target.value);

  }

  async function handleAddTodo() {
    const todo = {

    }
    console.log('handleAddTodo');
    const { data} = await client.post('/todos', todo, apiKey);
    const { code, data: dataAddTodo} = data;
    console.log('code', code);
    console.log('dataAddTodo', dataAddTodo);

  }
  async function handleEditTodo(id) {
    console.log('handleEditTodo', id);
  }

  async function handleChangeStatusTodo(id) {
    console.log('handleChangeStatusTodo', id);
  }
  async function handleDeleteTodo(id) {
    console.log('handleDeleteTodo', id);
  }
  async function handleExitEditTodo(id) {
    console.log('handleExitEditTodo', id);
  }
  async function handleUpdateTodo(id) {
    console.log('handleUpdateTodo', id);
  }

  return (
    <>
    <div className="spinner-border text-secondary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <div className="todo-app-react">
      <div className="container">
        <div className="todo-app-react-frame">
          <div className="todo-app-react-wrap">

            <div className="todo-app-react__title">Welcome to Todo App</div>
            {/*  */}
            <div className="todo-app-react__functions">
              <div className="function-add">
                <input type="text" placeholder='Thêm một việc làm mới' onChange={(event) => handleEditContentTodo(event)} />

                <Button onClick={handleAddTodo()} text="Thêm mới" className="btn-add" />
              </div>
            </div>
            {/*  */}
            <div className="todo-app-react__list-work">
              {
                listTodo.map((item) => (

                  <div key={item.id} className="work-item">

                    <div className="work-item__input">
                      <input
                        type="text" className={item.status_complete ? 'line-through' : '' }
                        onChange={(event) => handleWriteNewContentTodo(event)}
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
                            { item.status_complete ? 'Completed ' : 'Not Completed' }
                          </label>

                          <input id="completed" type="checkbox" defaultChecked={true} onClick={() => handleChangeStatusTodo(item.id)}/>
                          {/* !item.status_complete */}
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