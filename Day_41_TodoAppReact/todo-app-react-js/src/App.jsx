// eslint-disable-next-line react-hooks/exhaustive-deps
import './App.scss'
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import Loading from './component/loading/Loading';
import Button from './component/Button'

import HttpClient from './helper/httpClient';
const client = new HttpClient();

let loadding = true;
function App() {
  // const [loadding, setLoadding] = useState(true);
  const [apiKey] = useState(localStorage.getItem("apiKey"));
  const [contenTodo, setContenTodo] = useState('To do ');
  const [searchTodo, setSearchTodo] = useState('');
  const [queryTodo, setQueryTodo] = useState('');


  const [listTodo, setListTodo] = useState([]);


  useEffect(() => {
    const apiKeyLocal =  localStorage.getItem("apiKey");
    const emailLocal =  localStorage.getItem("email");
    // Chưa có
    if (!apiKeyLocal) {
      getApiKey();
    } else {
      if (emailLocal){
        toast(`Chào mừng bạn  ${emailLocal}`);
        getTodos();
      } else {
        window.alert('Bạn cần nhập email để tiếp tục');
        localStorage.clear();
        window.location.reload();
      }
    }
  }, []);

  useEffect(() => {
    if (apiKey) {
      getTodos();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryTodo]);

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

     // Get list Todo
      const getTodos = async () => {
        loadding = true;
        const { data, res } = await client.get(`/todos?q=${queryTodo}`, {}, apiKey);
        if (res.status === 200) {
          const { listTodo } = data.data
          console.log('listTodo', listTodo);
          setListTodo([]);
          setListTodo(listTodo);
          loadding = false;
        } else if (res.status === 401) {
          loadding = false;
          getApiKey();
        }
      };
      // Search
      async function handleSearchTodo(event) {
        setSearchTodo(event.target.value);
        setQueryTodo('')
        setTimeout( function() {
          setQueryTodo(event.target.value);
        }, 1000);

      }
      // useDebounce

     // ADD Todo
     async function handleAddTodo() {
        const body = {
              todo: contenTodo,
        }
        const { res, data } = await client.post('/todos', body, {}, apiKey);
        console.log('res', res);
        console.log('data', data);
        if (res.status === 201 || data.code === 200) {
            toast(data?.message);
            setContenTodo('');
            getTodos();
        } else if (res.status === 401) {
            getApiKey();
        }

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
        const { res, data } = await client.delete(`/todos/${id}`, '', apiKey);
        console.log('handleDeleteTodo res', res);
            if (res.status === 200) {
                toast(data.message)
                getTodos();
            }
        }
     async function handleExitEditTodo(id) {
          ('handleExitEditTodo', id);
     }
     async function handleUpdateTodo(id) {
        const body ={
            todo: 'update',
        }
        const res = await client.patch('/todos', body, apiKey);
            ('handleUpdateTodo res,id: ', res, id);
     }

  return (
    <>
    <Loading status={loadding}/>

    <div className="todo-app-react">
    <div className="todo-app-react-frame">
          <div className="todo-app-react-wrap">

            <div className="todo-app-react__title">Welcome to Todo App</div>
            {/* Thêm mới */}
            <div className="todo-app-react__functions">
              <div className="function-add">
                <input
                    type="text" placeholder='Thêm một việc làm mới' value={contenTodo}
                    onChange={(event) => setContenTodo(event.target.value)}
                />

                <Button onClick={handleAddTodo} text="Thêm mới" className="btn-add" />
              </div>
            </div>
            {/* Tìm kiếm */}
            <div className='search-work'>
              <input
                className="input-filter"
                placeholder="Tìm kiếm todo..."
                type="text" value={searchTodo}
                onChange={(event) => handleSearchTodo(event)}
              />
            </div>
            {/* Danh sách việc cần làm */}
            <div className="todo-app-react__list-work">
              {
               listTodo ?
               listTodo.map((item) => (

                    <div key={item._id} className="work-item">

                      <div className="work-item__input">
                        <input
                          type="text" className={item.isCompleted ? 'line-through' : '' }
                          value={item.todo}
                          onChange={() => handleEditContentTodo(item.todo)}
                          readOnly={item.editting ? false : true}
                        />
                       {/* <div>{item.todo}</div> */}

                      </div>
                      {/*  */}
                      <div className="work-item__action-btn">

                        {item.editting ?
                        <div className="status-preview">
                          <Button onClick={() => handleEditTodo(item._id)} text="Sửa" className="btn-edit" />
                          <Button onClick={() => handleDeleteTodo(item._id)} text="Xóa" className="btn-del" />
                        </div>
                        :
                        <div className="status-edit">

                          <div className="work-status">
                            <label htmlFor="completed" onClick={() => handleChangeStatusTodo(item._id)} >
                              { item.isCompleted ? 'Completed ' : 'Not completed' }
                            </label>

                            <input id="completed" type="checkbox" defaultChecked={item.isCompleted} onClick={() => handleChangeStatusTodo(item.isCompleted)}/>
                            {/* !item.isCompleted */}
                          </div>


                          <div className="status-edit__action-btn">
                            <Button onClick={() => handleExitEditTodo(item._id)} text="Thoát" className="btn-exit" />
                            <Button onClick={() => handleUpdateTodo(item._id)} text="Update" className="btn-update" />
                            <Button onClick={() => handleDeleteTodo(item._id)} text="Xóa" className="btn-del" />
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



     // xây form -> có action
      // xây dựng hàm post truyền vào todo và api key,
      // xây hàm delete truyền vào apikey và id của item todo
      // xây hàm patch truyền vào todo hoặc is completeed hoặc cả hai

      //   async function deleteTodo() {
      //     console.log('delete');
      //   };
