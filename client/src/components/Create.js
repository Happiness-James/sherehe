import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';




// Handles Event creation
function Create() {
    const [formData, setFormData] = useState({
        title: "",
        location: "",
        Date: "",
        showtime: "",
        Available_tickets: "",
        price: "",
        category: "",
        poster: "",
        user_id: ""

    })
    // this.props.location.state
    const location = useLocation();
    const state = location.state;
    console.log(state);
    console.log("userId")
    formData.user_id = state.userId
    console.log(formData)

    function handleChange(e) {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const navigate = useNavigate();


    function handleSubmit() {
        fetch("/events", {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
            .then((resp) => (resp.json)())
        navigate('/')
    }
    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
        }).then(() => navigate("/"));
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
                        <button className="btn btn-light btn-sm" type="button" style={{ color: "blue" }}>Create an event</button>
                        <button className="btn btn-light btn-sm" type="button" onClick={handleLogout}>LogOut</button>

                    </div>
                </div>
            </nav>

            <div className="card-form" >
                <div className="card-body">
                    <form onSubmit={handleSubmit} >
                        <h3 className="headers">Add Your Event Here</h3><br />
                        <input onChange={handleChange} className="form-control" placeholder="title" type="text" name="title" value={formData.title}></input><br /><br />
                        <input onChange={handleChange} className="form-control" placeholder="location" type="text" name="location" value={formData.location}></input><br /><br />
                        <input onChange={handleChange} className="form-control" placeholder="Date" type="text" name="Date" value={formData.Date}></input ><br /><br />
                        <input onChange={handleChange} className="form-control" placeholder="showtime" type="text" name="showtime" value={formData.showtime}></input ><br /><br />
                        <input onChange={handleChange} className="form-control" placeholder="Available_tickets" type="text" name="Available_tickets" value={formData.Available_tickets}></input ><br /><br />
                        <input onChange={handleChange} className="form-control" placeholder="price" type="text" name="price" value={formData.price}></input ><br /><br />
                        <input onChange={handleChange} className="form-control" placeholder="category" type="text" name="category" value={formData.category}></input ><br /><br />
                        <input onChange={handleChange} className="form-control" placeholder="poster" type="text" name="poster" value={formData.poster} required></input ><br /><br />
                        <button id="button" className="btn btn-primary">Add Event</button>
                    </form>
                </div>
            </div>
            
        </>
    )
}
export default Create;