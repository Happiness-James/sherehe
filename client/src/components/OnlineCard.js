import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function OnlineCard(props) {
    const [editMode, setEditMode] = useState(false);
    const [input, setInput] = useState(props.event ? props.event : {});

    const navigate = useNavigate();

    const deleteEvent = () => {
        console.log("Delete")
        console.log(props.event)
        fetch(`/events/${props.event.id}`, { method: 'DELETE' })
            .then(r => r.json())
            // .then(() => console.log("deleted"))
            .then(() => navigate('/'))
    }

    const editEvent = () => {
        setEditMode(true);
    }

    const handleSubmit = () => {
        // Send the updated data to the server
        fetch(`/events/${props.event.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: input.title,
                location: input.location,
                Date: input.Date,
                showtime: input.showtime,
                Available_tickets: input.Available_tickets,
                price: input.price,
                category: input.category,
                poster: input.poster
            })
        })
            .then(r => r.json())
            .then(updatedEvent => {
                // Disable edit mode and update the post with the new data
                setEditMode(false);
                props.updatedEvent(updatedEvent);
            });
    };

    const handleChange = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        });
    }

    if (editMode) {
        return (
            <div className="card" >
                <div className="card-body">
                    <form onSubmit={handleSubmit} >
                        <input onChange={handleChange} className="form-control" placeholder="title" type="text" name="title" value={input.title}></input><br /><br />
                        <input onChange={handleChange} className="form-control" placeholder="location" type="text" name="location" value={input.location}></input><br /><br />
                        <input onChange={handleChange} className="form-control" placeholder="Date" type="text" name="Date" value={input.Date}></input ><br /><br />
                        <input onChange={handleChange} className="form-control" placeholder="showtime" type="text" name="showtime" value={input.showtime}></input ><br /><br />
                        <input onChange={handleChange} className="form-control" placeholder="Available_tickets" type="text" name="Available_tickets" value={input.Available_tickets}></input ><br /><br />
                        <input onChange={handleChange} className="form-control" placeholder="price" type="text" name="price" value={input.price}></input ><br /><br />
                        <input onChange={handleChange} className="form-control" placeholder="category" type="text" name="category" value={input.category}></input ><br /><br />
                        <input onChange={handleChange} className="form-control" placeholder="poster" type="text" name="poster" value={input.poster} required></input ><br /><br />
                        <button id="button" className="btn btn-primary">Update</button>
                    </form>
                </div>
            </div>
        );
    } else {


        return (
            <>
                <div className="card">
                    <img src={props.event.poster} className="card-img-top" alt={props.event.poster} />

                    <div className="card-body card-style">

                        <div className="the-one-with-title">
                            <h5 className="card-title">{props.event.title}</h5>
                            <p className="event-location"> {props.event.Date} | {props.event.location} at {props.event.showtime} </p>
                        </div>
                        <div className="the-one-with-money">
                            <p> Available tickets: {props.event.Available_tickets} </p>
                            <p className="card-text"> KES {props.event.price}</p>

                            <a href="#" className="btn btn-primary" onClick={editEvent}>Edit</a>
                            <a href="#" className="btn btn-primary delete" style={{ marginLeft: "110px" }} onClick={deleteEvent}>Delete</a>
                        </div>
                    </div>
                    <a href="#" className="btn btn-primary">Buy ticket</a>

                </div>

            </>
        )
    }
}
export default OnlineCard;