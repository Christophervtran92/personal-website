import React from 'react';
import {Link} from 'react-router-dom';
//import {useNavigate} from 'react-router-dom';
import NavBar from '../navBar/NavBar'
import '../home/Home.css'
import './About.css'

export default function About() {
//    const navigate = useNavigate();

    return (
        <div className="about-pic">
            <NavBar/>
            <div className="NavBar-div">
                <header className="Default-body">
                    <p>
                        <div className="Default-div">
                        <h1 style={{textDecoration: "underline", textAlign: "center"}}> About Me</h1>
                            <p1 className="Default-paragraph">
                                My name is Christopher Tran and I am a computer science graduate from San José State University. I have lived and studied in the bay area my entire life. Ever since 
                                I was a kid I have been interested in electronics whether it be computers or video games, cell phones or televisions, just learning about new technologies 
                                always piqued my interest. During my junior year of high school I took a java programming class and that was my first experience with computer programming. That was
                                the class that got me on the path to become a computer scientist. Although my journey was not smooth, there were even times where I felt I was not going to be
                                able to finish my program, I persevered through it all and finally reached the end and got my degree.
                            </p1> 
                            <p1 className="Default-paragraph">
                                During my time at De Anza community college I worked at Central Computers in Sunnyvale, CA. There, I was able to put my interest in computers to work by building
                                workstations, gaming computers, and servers. While working there I was able to build my interpersonal skills by interacting with customers and co-workers to help
                                solve technical problems. I started out as a sales associate helping customers choose products for their needs and picking components for their custom built computers.
                                Later on I became a computer technician helping with building computers and servers as well as troubleshooting software issues for customers. 
                            </p1>
                            <h1 style={{textDecoration: "underline", textAlign: "center"}}> Education</h1>
                            <p1><center>
                                <h5 style={{fontWeight: "bold"}}>San José State University</h5>
                                Bachelor of Science - Computer Science (August 2019 - December 2021) <br/><br/>
                                <h5 style={{fontWeight: "bold"}}>De Anza College</h5>
                                Associate in Arts - Liberal Arts - Science, Math and Engineering Emphasis (September 2010 - March 2019)<br/><br/>
                            </center></p1> 
                            <h1 style={{textDecoration: "underline", textAlign: "center"}}> Work History</h1>
                            <div>
                                <h5 style={{fontWeight: "bold", textAlign: "center"}}>Central Computers (Sept 2013 - May 2016)</h5>
                                <h6 style={{textDecoration: "underline", textAlign: "center"}}>Computer Technician (Jan 2014 - May 2016)</h6>
                                <p1 className="Default-paragraph" style={{display: "block", marginLeft: "15%", marginRight: "15%"}}>
                                    As a technician I helped to troubleshoot and repair customer computers whether it be software or hardware related.
                                    I also built and upgraded workstations, personal computers, and servers for both regular and corporate customers.
                                    I provided technical support in person or over the phone.
                                </p1>
                                <h6 style={{textDecoration: "underline", textAlign: "center"}}>Sales Associate (Sept 2013 - Jan 2014)</h6>
                                <p1 className="Default-paragraph" style={{display: "block", marginLeft: "15%", marginRight: "15%"}}>
                                    As a sales associate I helped customers to find and choose products based on their needs from basic tech needs to full system builds.
                                    Along with that I also did typical sales tasks such as organizing and stocking products.
                                </p1>
                            </div> 
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