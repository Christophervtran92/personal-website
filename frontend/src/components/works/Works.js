import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import NavBar from '../navBar/NavBar'
import {Container, Row, Col} from 'react-bootstrap'
import '../home/Home.css'
import './Works.css'
import ez_apply_pic from '../../images/ez_apply_image.png'
import pascal_c_pic from '../../images/pascal_C_thumbnail.png'
import atc_pic from '../../images/atc_thumbnail.png'
import mini_fb_pic from '../../images/mini-fb_thumbnail.png'
import placeholder_pic from '../../images/placeholder_thumbnail.png'

export default function Works() {
//    const navigate = useNavigate();

    return (
        <div className="Works">
            <NavBar/>
            <div className="NavBar-div">
                <div style={{background: "rgba(255, 255, 255, 0.80)", padding: "12px", borderRadius: "5px", fontFamily: "quicksand"}}>
                    <h1 style={{textAlign: "center", fontFamily: 'quicksand', textDecoration: 'underline'}}>Some of my works</h1>
                    <div style={{height: "80vh", overflowY: "scroll", marginLeft: "100px"}}>
                    <Container cards>
                        <Row style={{marginTop: "10px", marginBottom: "10px", justifyContent: "left"}}>
                            <Card bg='dark' text='light' style={{ width: '18rem'}}>
                                <Card.Img variant="top" style={{marginTop: "5px"}} img src={ez_apply_pic} alt={"ez_apply"} />
                                <Card.Body>
                                    <Card.Title style={{fontWeight: "bold"}}>EZ Apply</Card.Title>
                                    <Card.Text>
                                        Web-based application made in my Software Engineering class which allows for job seekers
                                        to quickly apply to jobs with a simple click and for recruiters to easily find talent.
                                    </Card.Text>
                                    <Button variant="primary" style={{marginLeft: "2px"}} href="https://github.com/jamessnguyenn/EZ-Apply" target="_blank">Source Code</Button>
                                    <Button variant="secondary" style={{marginLeft: "4px", fontSize: "13.7px"}} href="https://ez-apply.vercel.app" target="_blank">Check It Out</Button>
                                </Card.Body>
                            </Card>
                            <Card bg='dark' text='light' style={{ width: '18rem', marginLeft: "5px"}}>
                                <Card.Img variant="top" style={{marginTop: "5px"}} img src={pascal_c_pic} alt={"pascal_c"} />
                                <Card.Body>
                                    <Card.Title style={{fontWeight: "bold"}}>Pascal-C</Card.Title>
                                    <Card.Text>
                                        Language with a Pascal backbone but built to resemble C style languages. This compiler can run code written in the 
                                        Pascal-C language as well as generate machine code in Jasmine from code written in Pascal-C.
                                    </Card.Text>
                                    <Button variant="primary" style={{marginLeft: "2px"}} href="https://github.com/Christophervtran92/FALL_2020/tree/master/CS153/Pascal-C" target="_blank">Source Code</Button>
                                </Card.Body>
                            </Card>
                            <Card bg='dark' text='light' style={{ width: '18rem', marginLeft: "5px"}}>
                                <Card.Img variant="top" style={{marginTop: "5px"}} img src={atc_pic} alt={"atc"} />
                                <Card.Body>
                                    <Card.Title style={{fontWeight: "bold"}}>Air Traffic Controller</Card.Title>
                                    <Card.Text>
                                        A project I worked on for my Data Structures and Algorithms class. It is a simulation of air traffic control 
                                        systems through the use of heapsort and max priority queues. 
                                    </Card.Text>
                                    <Button variant="primary" style={{marginLeft: "2px"}} href="https://github.com/Christophervtran92/SPRING_2020/tree/master/CS146/ATC" target="_blank">Source Code</Button>
                                </Card.Body>
                            </Card>
                            <Card bg='dark' text='light' style={{ width: '18rem', marginLeft: "5px"}}>
                                <Card.Img variant="top" style={{marginTop: "5px"}} img src={mini_fb_pic} alt={"minifb"} />
                                <Card.Body>
                                    <Card.Title style={{fontWeight: "bold"}}>Mini-Facebook</Card.Title>
                                    <Card.Text>
                                        A project I worked on for my Data Structures and Algorithms class. It is a pseudo Facebook application using 
                                        hashing techniques and a binary search tree to perform inserts, deletes, and search features.
                                    </Card.Text>
                                    <Button variant="primary" style={{marginLeft: "2px"}} href="https://github.com/Christophervtran92/SPRING_2020/tree/master/CS146/PA3" target="_blank">Source Code</Button>
                                </Card.Body>
                            </Card>
                        </Row>



                        <Row style={{marginTop: "10px", marginBottom: "10px", justifyContent: "left"}}>
                            <Card bg='dark' text='light' style={{ width: '18rem'}}>
                                <Card.Img variant="top" style={{marginTop: "5px"}} img src={placeholder_pic} alt={"place_holder"} />
                                <Card.Body>
                                    <Card.Title style={{fontWeight: "bold"}}>Placeholder</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                    </Card.Text>
                                    <Button variant="primary" style={{marginLeft: "2px"}} href="about:blank" target="_blank">Source Code</Button>
                                </Card.Body>
                            </Card>
                            <Card bg='dark' text='light' style={{ width: '18rem', marginLeft: "5px"}}>
                                <Card.Img variant="top" style={{marginTop: "5px"}} img src={placeholder_pic} alt={"place_holder"} />
                                <Card.Body>
                                    <Card.Title style={{fontWeight: "bold"}}>Placeholder</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                    </Card.Text>
                                    <Button variant="primary" style={{marginLeft: "2px"}} href="about:blank" target="_blank">Source Code</Button>
                                </Card.Body>
                            </Card>
                            <Card bg='dark' text='light' style={{ width: '18rem', marginLeft: "5px"}}>
                                <Card.Img variant="top" style={{marginTop: "5px"}} img src={placeholder_pic} alt={"place_holder"} />
                                <Card.Body>
                                    <Card.Title style={{fontWeight: "bold"}}>Placeholder</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                    </Card.Text>
                                    <Button variant="primary" style={{marginLeft: "2px"}} href="about:blank" target="_blank">Source Code</Button>
                                </Card.Body>
                            </Card>
                            <Card bg='dark' text='light' style={{ width: '18rem', marginLeft: "5px"}}>
                                <Card.Img variant="top" style={{marginTop: "5px"}} img src={placeholder_pic} alt={"place_holder"} />
                                <Card.Body>
                                    <Card.Title style={{fontWeight: "bold"}}>Placeholder</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                    </Card.Text>
                                    <Button variant="primary" style={{marginLeft: "2px"}} href="about:blank" target="_blank">Source Code</Button>
                                </Card.Body>
                            </Card>
                        </Row>
                        <Row style={{marginTop: "10px", marginBottom: "10px", justifyContent: "left"}}>
                            <Card bg='dark' text='light' style={{ width: '18rem'}}>
                                <Card.Img variant="top" style={{marginTop: "5px"}} img src={placeholder_pic} alt={"place_holder"} />
                                <Card.Body>
                                    <Card.Title style={{fontWeight: "bold"}}>Placeholder</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                    </Card.Text>
                                    <Button variant="primary" style={{marginLeft: "2px"}} href="about:blank" target="_blank">Source Code</Button>
                                </Card.Body>
                            </Card>
                            <Card bg='dark' text='light' style={{ width: '18rem', marginLeft: "5px"}}>
                                <Card.Img variant="top" style={{marginTop: "5px"}} img src={placeholder_pic} alt={"place_holder"} />
                                <Card.Body>
                                    <Card.Title style={{fontWeight: "bold"}}>Placeholder</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                    </Card.Text>
                                    <Button variant="primary" style={{marginLeft: "2px"}} href="about:blank" target="_blank">Source Code</Button>
                                </Card.Body>
                            </Card>
                            <Card bg='dark' text='light' style={{ width: '18rem', marginLeft: "5px"}}>
                                <Card.Img variant="top" style={{marginTop: "5px"}} img src={placeholder_pic} alt={"place_holder"} />
                                <Card.Body>
                                    <Card.Title style={{fontWeight: "bold"}}>Placeholder</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                    </Card.Text>
                                    <Button variant="primary" style={{marginLeft: "2px"}} href="about:blank" target="_blank">Source Code</Button>
                                </Card.Body>
                            </Card>
                            <Card bg='dark' text='light' style={{ width: '18rem', marginLeft: "5px"}}>
                                <Card.Img variant="top" style={{marginTop: "5px"}} img src={placeholder_pic} alt={"place_holder"} />
                                <Card.Body>
                                    <Card.Title style={{fontWeight: "bold"}}>Placeholder</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                    </Card.Text>
                                    <Button variant="primary" style={{marginLeft: "2px"}} href="about:blank" target="_blank">Source Code</Button>
                                </Card.Body>
                            </Card>
                        </Row>


                    </Container>
                    </div>
                </div>
            </div>
        </div>
    );
}