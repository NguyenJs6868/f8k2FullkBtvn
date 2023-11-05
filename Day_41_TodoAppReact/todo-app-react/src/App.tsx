import { useState } from 'react'

import './App.css'

function App() {
  const [count,setCount] = useState(0)

  return (
    <>
      <div className="todo-app-react">
        <div className="container">
          <div className="todo-app-react-frame">
            <div className="todo-app-react-wrap">

              <div className="todo-app-react__title">todo-app-react__title</div>
              {/*  */}
              <div className="todo-app-react__functions">todo-app-react__functions</div>
              {/*  */}
              <div className="todo-app-react__list-work">

                <div className="work-item">

                  <div className="work-item__input">
                    <input type="text" />
                  </div>

                  <div className="work-item__action-btn">
                    <div className="status-preview">
                      .Sửa
                      .Xóa
                    </div>

                    <div className="status-edit">
                      <div className="work-status">
                        <span>Not Completed</span>

                        <input type="checkbox" />
                      </div>

                    </div>


                    <div className="status-edit">
                      <span>Thoát</span>
                      <span>update</span>
                      <span>Xóa</span>

                    </div>


                  </div>


                </div>


              </div>

              {/*  */}
            </div>
          </div>
        </div>
      </div>


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