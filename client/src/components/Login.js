import React from "react";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";



function Login({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((r) => {
            console.log('Helllo', r)
            if (r.ok) {
                r.json().then((user) => onLogin(user));
                navigate('/create')
            }
            else{
                alert("Invalid credentials")
            }
        })
        
    }


    // function handleSubmitLog() {
    //     console.log('Navigate')
    //     navigate('/create')

    // }


    return (
        <>
            <section className="h-100 gradient-form" style={{ backgroundColor: "#eee" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-10">
                            <div className="card rounded-3 text-black">
                                <div className="row g-0">
                                    <div className="col-lg-6">
                                        <div className="card-body p-md-5 mx-md-4">
                                            <form onSubmit={handleSubmit}>
                                                {/* <button id="button" className="btn btn-primary">Add Event</button> */}
                                                <p>Please login to your account</p>

                                                <div className="form-outline mb-4">
                                                    <label className="form-label" >Username</label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        id="username"
                                                        autoComplete="off"
                                                        value={username}
                                                        onChange={(e) => setUsername(e.target.value)} required />
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <label className="form-label" >Password</label>
                                                    <input
                                                        className="form-control"
                                                        type="password"
                                                        id="password"
                                                        autoComplete="current-password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)} required />
                                                </div>

                                                <div className="text-center pt-1 mb-5 pb-1">
                                                    <button className="btn btn-primary " type="submit">Log
                                                        in</button>
                                                </div>

                                                <div>
                                                    <p>Don't have an account? <a href="/sign" className="link-info">Register here</a></p>

                                                </div>

                                            </form>

                                        </div>
                                    </div>
                                    <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                            <h4 className="mb-4">We are more than just a company</h4>
                                            <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Login;