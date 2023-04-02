import React from "react";
import { useState, useEffect } from "react";
import OnlineCard from "./OnlineCard";

function Online(){
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch("/events")
            .then(r => r.json())
            .then(data => setEvents(data))

    }, [])

    const allevents = events
    .filter((eventObj) => eventObj.category == "online")
    .map((eventObj) => {
        return (

            <div className="col-3">
                <OnlineCard
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
export default Online;