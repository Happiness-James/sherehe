import React from "react";

function LiveCard(props) {
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
                        {/* <a href="#" className="btn btn-primary" >Edit</a>
                        <a href="#" className="btn btn-primary delete" style={{marginLeft:"110px"}}>Delete</a> */}
                    </div>
                </div>
                <a href="#" className="btn btn-primary">Buy ticket</a>

            </div>

        </>
    )
}
export default LiveCard;