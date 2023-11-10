// import React from 'react'

 function Login() {
    return (
        <frameElement>
           <div className="login-page">
                <label className="login-page__label" htmlFor="email">Email:</label>

                <input className="login-page__input" id="email" defaultValue={'@gmail.con'} placeholder="example@example.com" />

                <button>Submit</button>

              </div>
        </frameElement>
    )
}


export default Login;