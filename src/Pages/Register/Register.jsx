import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <>
            <div className="register">
                <div className="container">
                    <div className="left">
                        <h3>Register</h3>
                        <form >
                            <input type="text" placeholder='Username' />
                            <input type="email" placeholder='Email' />
                            <input type="password" placeholder='Password' />
                            <input type="text" placeholder='Name' />
                            <button>Register</button>
                        </form>
                    </div>

                    <div className="right">
                        <h1>Lama Social.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum, alias totam to numquam ipsanumass to exercitationem dignissimos, error to nam, consequatur Lorem, ipsum dolor.</p>
                        <span>Do you have an account?</span>
                        <Link to="/login" style={{ textDecoration: "none", color: "purple" }}><button>Login</button></Link>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Register