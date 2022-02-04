import React from 'react';
import {Link, useResolvedPath} from 'react-router-dom';
//import {useNavigate} from 'react-router-dom';
import NavBar from '../navBar/NavBar'
import '../home/Home.css'
import {Table, Tab, Tabs, TabContainer, TabContent, TabPane} from 'react-bootstrap';

const headings = ["Title", "System", "Release Date", "Status", "Year Completed"];
const demoData = ["Elden Ring", "Playstation 5", "02/25/2022", "Upcoming", "-"];
const demoData2 = ["Metroid Dread", "Nintendo Switch", "10/08/2021", "Completed", "2021"];

export default function GamesList() {
    return (
        <div className="GamesList">
            <NavBar/>
            <div className="NavBar-div">
                <header className="Default-body">
                    <div style={{background: "white"}}>
                        <h1 style={{textDecoration: "underline", textAlign: "center"}}> Games List<br/> </h1>
                        <Tabs defaultActiveKey="gamelist" id="gamelist-id" className="gamesTabs">
                            <Tab eventKey="gamelist" title="Games List">
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            {Array.from(headings).map((headingName, index) => (
                                            <th key={index}>{headingName}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            {Array.from(demoData).map((gameData, index) => (
                                            <td key={index}>{gameData}</td>
                                            ))}
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            {Array.from(demoData2).map((gameData, index) => (
                                            <td key={index}>{gameData}</td>
                                            ))}
                                        </tr>
                                    </tbody>
                                </Table>
                            </Tab>
                            <Tab eventKey="gamecollection" title="Games Collection">
                                Under construction!
                            </Tab>
                        </Tabs>
                    </div>
                </header>
            </div>
        </div>
    );
}