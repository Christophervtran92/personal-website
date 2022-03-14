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
                            the class that got me on the path to become a computer scientist. After graduating high school I decided to attend De Anza College with plans
                            to transfer to a 4-year university within two years. While at De Anza I first learned to program in C and later C++ when the classes moved on
                            from C. Other classes I took gave me experience with x86 Assembly Language, HTML, CSS, as well as Adobe Photoshop, Flash, and Dreamweaver. On
                            top of these CS classes I also took many different electives to really get a feel for what I wanted to pursue. While I went to college with my
                            focus on CS I was still open to other ideas.
                        </p1>
                        <p1 className="Default-paragraph">
                            After a while I started losing focus on my goals in college and decided to reduce my credits and get a job at Central Computers in Sunnyvale, CA. 
                            My time at Central Computers allowed me to get some real world experience and refocus myself on my CS goals. While there, I was able to put my interest in computers 
                            to work by building workstations, gaming computers, and servers. While working there I was able to build my interpersonal skills by interacting with customers and 
                            co-workers to help solve technical problems. I started out as a sales associate helping customers choose products for their needs and picking components for their 
                            custom built computers. Later on I became a computer technician helping with building computers and servers as well as troubleshooting software issues for customers. 
                            When I decided to go back and focus on transferring, the CS curriculum changed over to C++ and that was when I got my first experience with C++. From this point I focused 
                            on completing the classes needed for transfer, which was more than I anticipated but by 2019 I was finally able to move on from De Anza.
                        </p1>
                        <p1 className="Default-paragraph">
                            My time at SJSU gave me an opportunity to work with many new programming concepts and languages I never had the chance to try before. Languages like Pascal, 
                            Jasmine, Scheme, Haskell, Prolog, Javascript, and SQL. Concepts such as UML diagrams, game design and programming using OpenFramework through C++, database 
                            design using SQLite, Android Development through Java and Android Studio, frontend and backend web-development using the MERN stack, designing a language with 
                            ANTLR, automata theory, and regular expressions. While I had a general idea of most of these concepts prior to my time at SJSU, the classes I took provided me 
                            a more detailed look into the concepts.
                        </p1>
                        <p1 className="Default-paragraph">
                            Although my journey was not smooth, there were even times where I felt I was not going to be able to finish my program, I persevered through it 
                            all and finally reached the end and got my degree. For me, getting my degree really feels like a major accomplishment as it is a culmination of
                            a long chapter of my life that began decades ago. Starting as a kid who, honestly, could not care less about school to finally getting through 
                            college and receiving a bachelors. I am now ready to move on from that chapter of my life and move on to new horizons and take on new challenges.
                        </p1> 
                        <h1 style={{textDecoration: "underline", textAlign: "center"}}> Education</h1>
                        <p1><center>
                            <h5 style={{fontWeight: "bold"}}>San José State University</h5>
                            Bachelor of Science - Computer Science (August 2019 - December 2021) <br/>
                            <Accordion style={{width: "40%"}}>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Classes Taken</Accordion.Header>
                                    <Accordion.Body>
                                    <ListGroup variant="flush" style={{textAlign: "left", overflowY: "auto", lineHeight: "1.5", height: "20vh"}}>
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
                            work, and other endeavors. My personal works have links to the source code on Github while schoolwork 
                            have detailed information provided with snapshots of the programs and code snippets. School work has been 
                            privatized on Github due to the request of my instructors who do not want the code copied by future students. 
                            While the website may not look all too impressive at the moment, I hope to learn more ways to improve it and 
                            make it better.
                        </p2>
                    </div>
                </p>
            </div>
        </div>
    );
}