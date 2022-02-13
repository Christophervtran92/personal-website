
import React, {useEffect, useState} from 'react';
//import {Link, useResolvedPath} from 'react-router-dom';
import NavBar from '../navBar/NavBar'
import axios from "axios";
import '../home/Home.css'
import './GamesList.css'
import {Table, Tab, Tabs, TabContainer, TabContent, TabPane, Container, Button} from 'react-bootstrap';

const headings = ["Title", "System", "Release Date", "Status", "Year Completed"];
const demoData = ["Elden Ring", "Playstation 5", "02/25/2022", "Upcoming", "-"];
const demoData2 = ["Metroid Dread", "Nintendo Switch", "10/08/2021", "Completed", "2021"];


export default function GamesList() {

    const [response, setResponse] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/games")
        .then(res => {
            setResponse(res.data)
        })
        .catch(err => {
            err.status(400).json(err)
        })
    }, [])

    const gamesListTable = () => {
        return response.map((res, index) => {
            switch(res.status) {
                case "Upcoming":
                    return (
                        <tr style={{backgroundColor: "#5AB4E0"}}>
                            <td>{index+1}</td>
                            <td>{res.title}</td>
                            <td>{res.system}</td>
                            <td>{res.release_date}</td>
                            <td>{res.status}</td>
                            <td>{res.yr_completed}</td>
                        </tr>
                    )
                case "Planned":
                    return (
                        <tr style={{backgroundColor: "#BDBDBD"}}>
                            <td>{index+1}</td>
                            <td>{res.title}</td>
                            <td>{res.system}</td>
                            <td>{res.release_date}</td>
                            <td>{res.status}</td>
                            <td>{res.yr_completed}</td>
                        </tr>
                    )
                case "Limbo":
                    return (
                        <tr style={{backgroundColor: "#FFC34D"}}>
                            <td>{index+1}</td>
                            <td>{res.title}</td>
                            <td>{res.system}</td>
                            <td>{res.release_date}</td>
                            <td>{res.status}</td>
                            <td>{res.yr_completed}</td>
                        </tr>
                    )
                case "In Progress":
                    return (
                        <tr style={{backgroundColor: "#FAFF69"}}>
                            <td>{index+1}</td>
                            <td>{res.title}</td>
                            <td>{res.system}</td>
                            <td>{res.release_date}</td>
                            <td>{res.status}</td>
                            <td>{res.yr_completed}</td>
                        </tr>
                    )
                case "Completed":
                    return (
                        <tr style={{backgroundColor: "#8EDB76"}}>
                            <td>{index+1}</td>
                            <td>{res.title}</td>
                            <td>{res.system}</td>
                            <td>{res.release_date}</td>
                            <td>{res.status}</td>
                            <td>{res.yr_completed}</td>
                        </tr>
                    )
            }
        })
    }

    return (
        <div className="games-list">
            <NavBar/>
            <div className="NavBar-div">
                <div style={{background: "white", opacity: "90%", padding: "12px", borderRadius: "5px", fontFamily: "quicksand"}}>
                    <h1 style={{textDecoration: "underline", textAlign: "center"}}> Games List<br/> </h1>
                    <Tabs defaultActiveKey="gamelist" id="gamelist-id" className="gamesTabs">
                        <Tab eventKey="gamelist" title="Games Progress">
                            <div className="filter-div" style={{padding: "2px"}}>
                                Sort By (Under Construction):
                                <Button variant="outline-primary" style={{marginLeft: "5px"}}>Title</Button>
                                <Button variant="outline-primary" style={{marginLeft: "3px"}}>System</Button>
                                <Button variant="outline-primary" style={{marginLeft: "3px"}}>Release Date</Button>
                                <Button variant="outline-primary" style={{marginLeft: "3px"}}>Status</Button>
                                <Button variant="outline-primary" style={{marginLeft: "3px"}}>Year Completed</Button>
                            </div>
                            <div style={{height: "75vh", overflowY: "scroll"}}>
                                <Table responsive bordered hover>
                                    <thead>
                                        <th>#</th>
                                        {Array.from(headings).map((headingName, index) => (
                                        <th key={index}>{headingName}</th>
                                        ))}
                                    </thead>
                                    <tbody>
                                        {gamesListTable()}
                                    </tbody>
                                </Table>
                            </div>
                        </Tab>
                        <Tab eventKey="gamecollection" title="Games Collection">
                            Under construction!
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}

/*
{response.map((res, index) => 
    <tr>
        <td>{index+1}</td>
        <td>{res.title}</td>
        <td>{res.system}</td>
        <td>{res.release_date}</td>
        <td>{res.status}</td>
        <td>{res.yr_completed}</td>
    </tr>
    )}

*/
