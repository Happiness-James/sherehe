import React from "react";


function Navbar() {
    return (
        <>
                <div className="container-fluid">
                        <div className="navbar">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                            <a className="nav-link" href="#live">Live Events </a>
                            <a className="nav-link" href="#upcoming">Upcoming Events</a>
                            <a className="nav-link" href="#online">Online Events</a>
                            <a className="nav-link" href="#">Categories</a>
                            <a className="nav-link" href="#">Artist</a>


                        </div>
                </div>
        </>
    )
}
export default Navbar;