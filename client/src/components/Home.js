import React from "react";
import Credential from "./Credential";
import './Home.css'
import Navbar from "./Navbar";
import Upcoming from "./Upcoming";
import Live from "./Live";
import Online from "./Online";

function Home({user}) {
    console.log(user)
    return (
        <>
            <Credential />
            <section className="home" id="home">
                <div className="transbox">
                    <div className="text-home">
                        <h1>What you need, is an Event, to remember for a lifetime!!!</h1>
                        <p>Less work, more play. Whether you're into online streams weekend festivals or daytime get-togethers; we have something for you. Find what you're looking for and join the movement.</p>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-primary" type="submit">Search</button>
                        </form><br /><br />
                        <div className="navbarlinks">
                            <Navbar />
                        </div>
                    </div>
                </div>
            </section>
            <section className="live" id="live">
                <h1>Live Events</h1>
                <p>Events happening now</p>
                <Live user={user}/>
            </section>
            <section className="upcoming" id="upcoming">
                <h1>Upcoming Events</h1>
                <p>Events happening soon</p>
                <Upcoming user={user}/>
            </section>
            <section className="online" id="online">
                <h1>Online Events</h1>
                <p>Events happening online</p>
                <Online user={user}/>
            </section>

        </>
    )
}
export default Home;