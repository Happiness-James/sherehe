import React from "react";
import { useState, useEffect } from "react";
import LiveCard from "./LiveCard";
function Live(){
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch("/events")
            .then(r => r.json())
            .then(data => setEvents(data))

    }, [])

    const allevents = events
    .filter((eventObj) => eventObj.category == "live")
    .map((eventObj) => {
        return (

            <div className="col-3">
                <LiveCard
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
export default Live;