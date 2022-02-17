import React from 'react';
import NavBar from '../navBar/NavBar'
import '../home/Home.css'
import './About.css'
import {Accordion, ListGroup} from 'react-bootstrap'

export default function About() {

    return (
        <div className="about-pic">
            <NavBar/>
            <div className="NavBar-div">
                <p>
                    <div className="Default-div" style={{height: "90vh", overflowY: "auto"}}>
                    <h1 style={{textDecoration: "underline", textAlign: "center"}}> About Me</h1>
                        <p1 className="Default-paragraph">
                            During my junior year of high school I took a java programming class and that was my first experience with computer programming. That was
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
                            Bachelor of Science - Computer Science (August 2019 - December 2021) <br/>
                            <Accordion style={{width: "40%"}}>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Classes Taken</Accordion.Header>
                                    <Accordion.Body>
                                    <ListGroup variant="flush" style={{textAlign: "left", overflowY: "auto", lineHeight: "1.5"}}>
                                        <h6 style={{textDecoration: "underline"}}>Core Classes</h6>
                                        <ListGroup.Item>CS146 -- Data Structures and Algorithms</ListGroup.Item>
                                        <ListGroup.Item>CS147 -- Computer Architecture</ListGroup.Item>
                                        <ListGroup.Item>CS149 -- Operating Systems</ListGroup.Item>
                                        <ListGroup.Item>CS151 -- Object-Oriented Design</ListGroup.Item>
                                        <ListGroup.Item>CS152 -- Programming Language Paradigms</ListGroup.Item>
                                        <ListGroup.Item>CS153 -- Concepts of Compiler Design</ListGroup.Item>
                                        <ListGroup.Item>CS154 -- Formal Language and Computability</ListGroup.Item>
                                        <ListGroup.Item>CS160 -- Software Engineering</ListGroup.Item>
                                        <h6 style={{textDecoration: "underline", paddingTop: "10px"}}>Electives</h6>
                                        <ListGroup.Item>CS134 -- Computer Game Design and Programming</ListGroup.Item>
                                        <ListGroup.Item>CS157A -- Introduction to Database Management Systems</ListGroup.Item>
                                        <ListGroup.Item>CS166 -- Information Security</ListGroup.Item>
                                        <ListGroup.Item>CS174 -- Server-side Web Programming</ListGroup.Item>
                                        <ListGroup.Item>CS175 -- Mobile Device Development</ListGroup.Item>
                                    </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <br/>
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
                            work, and other endeavors. Frontend is deployed through Vercel.
                        </p2>
                    </div>
                </p>
            </div>
        </div>
    );
}