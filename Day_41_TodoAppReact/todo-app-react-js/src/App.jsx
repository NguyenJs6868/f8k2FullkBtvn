// eslint-disable-next-line react-hooks/exhaustive-deps
import './App.scss'
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import Loading from './component/loading/Loading';
import Button from './component/Button'
// import TodoItem from './component/TodoItem';


import HttpClient from './helper/httpClient';
const client = new HttpClient();

// let loadding = false;
function App() {
  const [loading, setLoading] = useState(true);
  const [apiKeyValue, setApiKeyValue] = useState(localStorage.getItem("apiKey") ?? '');
  const [contenTodo, setContentTodo] = useState('');
  const [searchTodo, setSearchTodo] = useState('');
  const [queryTodo, setQueryTodo] = useState('');


  const [listTodo, setListTodo] = useState([]);


//   useEffect(() => {
//     const apiKeyLocal =  localStorage.getItem("apiKey");
//     const emailLocal =  localStorage.getItem("email");
//     // Chưa có
//     if (!apiKeyLocal) {
//       getApiKey();
//     } else {
//       if (emailLocal){
//         // getTodos();
//         toast(`Chào mừng bạn  ${emailLocal}`);
//       } else {
//         window.alert('Bạn cần nhập email để tiếp tục');
//         localStorage.clear();
//         window.location.reload();
//       }
//     }
//   }, []);

//  Kiểm tra token và name
  useEffect(() => {
    if (checkAPiKeyEmail()) {
        console.log("Có apiKeyLocal có thông tin rồi -> get list", checkAPiKeyEmail());
        getTodos();
    } else {
        console.log('Mất apiKeyLocal');
        getApiKey();
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    // const checkLogin = async () => {
    //     const getAllTodoResult = await getAllTodo();
    //         if (!getAllTodoResult.data) {
    //             return false;
    //         }
    //         return true;
    // }

    function checkAPiKeyEmail() {
        console.log('checkAPiKeyEmail');
        const apiKeyLocal =  localStorage.getItem("apiKey");
        const emailLocal =  localStorage.getItem("email");

        if (apiKeyLocal || emailLocal) {
            return true;
        } else {
            return false;
        }
    }

     // Gọi API Key
     async function getApiKey() {

        let email = window.prompt("Please enter your email", "example@example.com");
        //   if (!email) {
        //        window.alert('Bạn cần nhập email để tiếp tục');
        //        window.location.reload();
        //   }

        const { data} = await client.get('/api-key', {email});
        const { code, data: dataGetApiKey} = data
        console.log('getApiKey code', code);

        if (code === 200) {
            const { apiKey } = dataGetApiKey;
            localStorage.removeItem('apiKey');
            localStorage.removeItem('email');
            localStorage.setItem("apiKey", apiKey);
            localStorage.setItem("email", email);
            setApiKeyValue(apiKey); // Chậm !
            getTodos(); // !
            toast(`Chào mừng bạn ${ (email.split('@'))[0] }`);
        }  else if (code === 400) {
            toast(dataGetApiKey.message || `Bạn cần nhập lại đúng email`);
            window.location.reload();
        } else {
            toast(dataGetApiKey.message);
        }
     }

     useEffect(() => {
        getTodos();
      }, [queryTodo]);

     // Get list Todo
    const getTodos = async () => {
        setLoading(true);
        // const { data, res } = await client.get(`/todos?q=${queryTodo ? queryTodo : ''}`, {});
        const apiKeyLocal =  localStorage.getItem("apiKey");
        if (apiKeyLocal) {
            console.log('có apiKeyLocal :', apiKeyLocal);
            const { data, res } = await client.get(`/todos?q=${queryTodo}`, {}, apiKeyLocal);
            if (res.status === 200) {
                const { listTodo } = data.data
                console.log('getTodos 200', listTodo);
                setListTodo([]);
                setListTodo(listTodo);
                setLoading(false);
            } else if (res.status === 401) {
                setLoading(false);
                toast(`${data.message} + API key gửi lên sai hoặc tk đăng nhập nhiều app tab khác`)
                getApiKey();
            }
        }

    };
//         function handleSearch() {
//
//         }
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
        console.log('Chạy hàm handleAddTodo');

        const body = {
            todo: contenTodo,
        }
        const { res, data } = await client.post('/todos', body, {}, apiKeyValue);
        console.log('res', res);
        console.log('data', data);
        if (res.status === 201 || data.code === 200) {
            toast(data?.message);
            setContentTodo('');
            getTodos();
        } else if (res.status === 400) {
            toast(data?.message || 'Todo không được phép trống');
        } else if (res.status === 401) {
            toast(data?.message ?? 'Unauthorize');
            localStorage.removeItem('apiKey');
            localStorage.removeItem('email');
            getApiKey();
        } else {
            toast(data?.message);
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
        const { res, data } = await client.delete(`/todos/${id}`, '', apiKeyValue);
            console.log('handleDeleteTodo res', res);
            setLoading(true);
            if (res.status === 200) {
                toast(data.message)
                getTodos().finally(() => {
                    setLoading(false);
                });
            }
        }
     async function handleExitEditTodo(id) {
          ('handleExitEditTodo', id);
     }
     async function handleUpdateTodo(id) {
        const body ={
            todo: 'update',
        }
        const res = await client.patch('/todos', body, apiKeyValue);
            ('handleUpdateTodo res,id: ', res, id);
     }

  return (
    <>
    <Loading status={loading}/>

    <div className="todo-app-react">
    <div className="todo-app-react-frame">
          <div className="todo-app-react-wrap">

            <div className="todo-app-react__title">Welcome to Todo App</div>
            {/* Thêm mới */}
            <div className="todo-app-react__functions">
              <div className="function-add">
                <input
                    type="text" placeholder='Thêm một việc làm mới' value={contenTodo}
                    onChange={(event) => setContentTodo(event.target.value)}
                />

                <Button onClick={handleAddTodo} text="Thêm mới" className="btn-add" />
            </div>
            <Button  text="Tìm kiếm" className="btn-search" />
            </div>
            {/* Tìm kiếm */}
            <div className='search-work'>
              <input
                className="input-filter"
                placeholder="Tìm kiếm todo..."
                type="text" value={searchTodo}
                onChange={handleSearchTodo}
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
