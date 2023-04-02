import React from "react";
import { useNavigate } from 'react-router-dom';


function Credential() {

    const navigate = useNavigate();

    // function handleClickCreate() {
    //     navigate("/create");
    // }
    function handleClickLogin() {
        navigate("/login");
    }
    function handleClickSign() {
        navigate("/sign");
    }
    return (
        <>
            <nav className="navbar bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <div className="logo-image">
                            <img src={require("../images/image-removebg-preview.png")} className="img-fluid" />
                        </div>
                    </a>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button className="btn btn-light btn-sm me-md-2" type="button" onClick={handleClickSign}>Sign Up</button>
                        <button className="btn btn-light btn-sm" type="button" onClick={handleClickLogin}>Login</button>
                        {/* <button class="btn btn-light btn-sm" type="button" style={{ color: "blue" }} onClick={handleClickSign}>Create an event</button> */}

                    </div>
                </div>
            </nav>

        </>
    )
}
export default Credential;