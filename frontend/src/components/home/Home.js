import React from 'react';
import {Link} from 'react-router-dom';
//import {useNavigate} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap'
import './Home.css';
import NavBar from '../navBar/NavBar';
import Image from 'react-bootstrap/Image'
import "bootstrap/dist/css/bootstrap.min.css";
import self_pic from '../../images/photo.jpg';


export default function Home() {

   return (
    <div className="Home-div">
        {/* NavBar */}
        <NavBar/>
        <div className="NavBar-div">
            <body className="Default-body">
                <div className="Default-div">
                    <h1 style={{textDecoration: "underline", textIndent: "10px", textAlign: "center"}}>Hello and Welcome!</h1>
                    <Container>
                    <Row>
                        <Col xs={3}>
                        <Image rounded="true" img src={self_pic} height="400px" style={{marginBottom: "10px"}}></Image>
                        </Col>
                        <Col>
                            <p1 className="Default-paragraph" textAlign="left">
                                &emsp; My name is Christopher Tran and this is my website! To learn more about me
                                and what this website is about, check out the about page. To see what I have worked 
                                on check out my works page. These pages can be navigated to from the links above.
                                <p2 style={{fontWeight: "bold", fontSize: "30px"}}><br/><br/>Thanks for checking out my website!</p2>
                            </p1>
                        </Col>
                    </Row>
                    </Container>
                </div>
            </body>
        </div>
    </div>
   );
}