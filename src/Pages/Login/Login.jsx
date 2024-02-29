import { Link } from 'react-router-dom'
import './Login.css'
import React from 'react'


export const Login = () => {
    return (
        <div className="login">
            <div className="login_container">
                <div className="login_left">
                    <h1>Hello World.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum, alias totam to numquam ipsanumass to exercitationem dignissimos, error to nam, consequatur Lorem, ipsum dolor.</p>
                    <span>Don't you have an account?</span>
                    <Link to="/register" style={{ textDecoration: "none", color: "purple" }}><button>Register</button></Link>
                </div>
                <div className="login_right">
                    <h3>Login</h3>
                    <form >
                        <input type="text" placeholder='Username' />
                        <input type="password" placeholder='Password' />
                        <button>Login</button>
                    </form>

                </div>
            </div >
        </div>
    )
}
