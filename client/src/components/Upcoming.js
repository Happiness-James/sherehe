import React from "react";
import { useState, useEffect } from "react";
import UpcomingCard from "./UpcomingCard";

function Upcoming(){
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch("/events")
            .then(r => r.json())
            .then(data => setEvents(data))

    }, [])

    const allevents = events
    .filter((eventObj) => eventObj.category == "upcoming")
    .map((eventObj) => {
        return (

            <div className="col-3">
                <UpcomingCard
                    key={eventObj.id}
                    event={eventObj}
                />
            </div>
        )
    })

    return (
        <>
            <div className="row">
                {allevents}
            </div>
        </>
    )
}
export default Upcoming;