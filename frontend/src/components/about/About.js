import React from 'react';
import {Link} from 'react-router-dom';
//import {useNavigate} from 'react-router-dom';
import NavBar from '../navBar/NavBar'
import '../home/Home.css'

export default function About() {
//    const navigate = useNavigate();

    return (
        <div className="About">
            <NavBar/>
            <div className="NavBar-div">
                <header className="Default-body">
                    <p>
                        <div className="Default-div">
                        <h1 style={{textDecoration: "underline", textAlign: "center"}}> About Me</h1>
                            <p1 className="Default-paragraph">
                                My name is Christopher Tran and I am a recent graduate of San Jose State University majoring in
                                computer science.<br/>
                            </p1> 
                        </div>
                        <div className="Default-div">
                            <h1 style={{textDecoration: "underline", textAlign: "center"}}>About the Site</h1>
                            <p2 className="Default-paragraph">
                                This website is a way for me to continue learning the MERN stack following my Software Engineering class. 
                                The goal is for the website to become a sleek modern website that can be used to showcase my hobbies, 
                                work, and other endeavors.
                            </p2>
                        </div>
                    </p>
                </header>
            </div>
        </div>
    );
}