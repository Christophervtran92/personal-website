import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../navBar/NavBar'
import '../home/Home.css'

export default function UnderConstruction() {

    return (
        <div className="UnderConstruction">
            <NavBar/>
            <div>
                <header style={{position: 'absolute', top: "40%", left: "40%"}}>
                <p>
                    <div>
                    <h1 style={{textDecoration: "underline", textAlign: "center"}}> 
                        This page is under construction!
                    </h1>
                    <h2 style={{textAlign: "center"}}>
                        <Link to="/">Click here to go back to the home page</Link>
                    </h2>
                    </div>
                </p>
                </header>
            </div>
        </div>
    );
}