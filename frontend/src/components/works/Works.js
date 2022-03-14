import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import NavBar from '../navBar/NavBar';
import {Container, Row} from 'react-bootstrap';
import '../home/Home.css';
import './Works.css';

import ez_apply_pic from '../../images/ez_apply_image.png';
import pascal_c_pic from '../../images/pascal_C_thumbnail.png';
import atc_pic from '../../images/atc_thumbnail.png';
import mini_fb_pic from '../../images/mini-fb_thumbnail.png';
import mern_pic from '../../images/mern_logo.png';
import textManipulator_pic from '../../images/TextManipulator_thumbnail.png';
import buyer_bot_pic from '../../images/buyer_bot_thumbnail.png';
import placeholder_pic from '../../images/placeholder_thumbnail.png';

//Modals for descriptions for this website and school works that may not be allowed to be
//shown as public.
import PascalCModal from './works_info/PascalCModal';
import ATCModal from './works_info/ATCModal';
import MiniFacebookModal from './works_info/MiniFacebookModal';
import MyWebsiteModal from './works_info/MyWebsiteModal';
import TextManipulatorModal from './works_info/TextManipulatorModal.js';

export default function Works() {

    const [pascalCModalShow, setPascalCModalShow] = React.useState(false);
    const [atcModalShow, setATCModalShow] = React.useState(false);
    const [miniFacebookModalShow, setMiniFacebookModalShow] = React.useState(false);
    const [myWebsiteModalShow, setMyWebsiteModalShow] = React.useState(false);
    const [textManipulatorModalShow, setTextManipulatorModalShow] = React.useState(false);

    return (
        <div className="Works">
            <NavBar/>
            <div className="NavBar-div">
                <div style={{background: "rgba(255, 255, 255, 0.80)", padding: "12px", borderRadius: "5px", fontFamily: "quicksand"}}>
                    <h1 style={{textAlign: "center", fontFamily: 'quicksand', textDecoration: 'underline'}}>Some of my works</h1>
                    <div style={{height: "80vh", overflowY: "auto", marginLeft: "100px"}}>
                    <Container cards>
                        <Row style={{marginTop: "10px", marginBottom: "10px", justifyContent: "left"}}>
                            <Card bg='dark' text='light' style={{ width: '18rem', marginLeft: "5px"}}>
                                <Card.Img variant="top" style={{marginTop: "5px"}} img src={mern_pic} alt={"mern"} />
                                <Card.Body>
                                    <Card.Title style={{fontWeight: "bold"}}>This Website</Card.Title>
                                    <Card.Text>
                                        My personal website to tell a bit about myself, show some of my works, and show some of my hobbies. 
                                        This website is a way to continue learning the MERN stack following my Software Engineering class.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="primary" style={{marginLeft: "2px"}} onClick={() => setMyWebsiteModalShow(true)}>More Info</Button>
                                    <MyWebsiteModal
                                        show={myWebsiteModalShow}
                                        onHide={() => setMyWebsiteModalShow(false)}/>
                                    <Button variant="secondary" style={{marginLeft: "4px"}} href="https://github.com/Christophervtran92/personal-website" target="_blank">Source Code</Button>
                                </Card.Footer>
                            </Card>
                            <Card bg='dark' text='light' style={{ width: '18rem', marginLeft: '5px'}}>
                                <Card.Img variant="top" style={{marginTop: "5px"}} img src={ez_apply_pic} alt={"ez_apply"} />
                                <Card.Body>
                                    <Card.Title style={{fontWeight: "bold"}}>EZ Apply</Card.Title>
                                    <Card.Text>
                                        Web-based application made in my Software Engineering class which allows for job seekers
                                        to quickly apply to jobs with a simple click and for recruiters to easily find talent.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="primary" style={{marginLeft: "2px"}} href="https://ez-apply.vercel.app" target="_blank">View App</Button>
                                    <Button variant="secondary" style={{marginLeft: "4px"}} href="https://github.com/jamessnguyenn/EZ-Apply" target="_blank">Source Code</Button>
                                </Card.Footer>
                            </Card>
                            <Card bg='dark' text='light' style={{ width: '18rem', marginLeft: "5px"}}>
                                <Card.Img variant="top" style={{marginTop: "5px"}} img src={pascal_c_pic} alt={"pascal_c"} />
                                <Card.Body>
                                    <Card.Title style={{fontWeight: "bold"}}>Pascal-C</Card.Title>
                                    <Card.Text>
                                        Language with a Pascal backbone but built to resemble C style languages. This compiler can run code written in the 
                                        Pascal-C language as well as generate machine code in Jasmine from code written in Pascal-C.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="primary" style={{marginLeft: "2px"}} onClick={() => setPascalCModalShow(true)}>More Info</Button>
                                        <PascalCModal 
                                            show={pascalCModalShow}
                                            onHide={() => setPascalCModalShow(false)}/>
                                </Card.Footer>
                            </Card>
                            <Card bg='dark' text='light' style={{ width: '18rem', marginLeft: "5px"}}>
                                <Card.Img variant="top" style={{marginTop: "5px"}} img src={atc_pic} alt={"atc"} />
                                <Card.Body>
                                    <Card.Title style={{fontWeight: "bold"}}>Air Traffic Controller</Card.Title>
                                    <Card.Text>
                                        A project I worked on for my Data Structures and Algorithms class. It is a simulation of air traffic control 
                                        systems through the use of heapsort and max priority queues. 
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="primary" style={{marginLeft: "2px"}} onClick={() => setATCModalShow(true)}>More Info</Button>
                                        <ATCModal
                                            show={atcModalShow}
                                            onHide={() => setATCModalShow(false)}/>
                                </Card.Footer>
                            </Card>
                        </Row>
                        
                        <Row>
                            <Card bg='dark' text='light' style={{ width: '18rem', marginLeft: "5px"}}>
                                <Card.Img variant="top" style={{marginTop: "5px"}} img src={mini_fb_pic} alt={"minifb"} />
                                <Card.Body>
                                    <Card.Title style={{fontWeight: "bold"}}>Mini-Facebook</Card.Title>
                                    <Card.Text>
                                        A project I worked on for my Data Structures and Algorithms class. It is a pseudo Facebook application using 
                                        hashing techniques and binary search trees to perform inserts, deletes, and search features.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="primary" style={{marginLeft: "2px"}} onClick={() => setMiniFacebookModalShow(true)}>More Info</Button>
                                        <MiniFacebookModal
                                            show={miniFacebookModalShow}
                                            onHide={() => setMiniFacebookModalShow(false)}/>
                                </Card.Footer>
                            </Card>
                            <Card bg='dark' text='light' style={{ width: '18rem', marginLeft: "5px"}}>
                                <Card.Img variant="top" style={{marginTop: "5px"}} img src={buyer_bot_pic} alt={"buyer_bot"} />
                                <Card.Body>
                                    <Card.Title style={{fontWeight: "bold"}}>Best Buy Automator (Buyer Bot - 02/22/22)</Card.Title>
                                    <Card.Text>
                                        A bot idea for purchasing out of stock items. It will refresh the listings until it is in stock and then
                                        goes through the checkout process, stopping right before clicking the checkout button. 
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="secondary" style={{marginLeft: "2px"}} href="https://github.com/Christophervtran92/Buyer_Bot" target="_blank">Source Code</Button>
                                </Card.Footer>
                            </Card>
                            <Card bg='dark' text='light' style={{ width: '18rem', marginLeft: "5px"}}>
                                <Card.Img variant="top" style={{marginTop: "5px"}} img src={textManipulator_pic} alt={"text_manipulator"} />
                                <Card.Body>
                                    <Card.Title style={{fontWeight: "bold"}}>Text Manipulator</Card.Title>
                                    <Card.Text>
                                        A java program that takes a string and does a variety of uppercase and lowercase manipulations. The program utilizes a GUI instead of being command line based.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="primary" style={{marginLeft: "2px"}} onClick={() => setTextManipulatorModalShow(true)}>More Info</Button>
                                        <TextManipulatorModal
                                            show={textManipulatorModalShow}
                                            onHide={() => setTextManipulatorModalShow(false)}/>
                                    <Button variant="secondary" style={{marginLeft: "4px"}} href="https://github.com/Christophervtran92/WordManipulator" target="_blank">Source Code</Button>
                                </Card.Footer>
                            </Card>
                        </Row>
                    </Container>
                    </div>
                </div>
            </div>
        </div>
    );
}