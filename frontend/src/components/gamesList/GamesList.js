
import React, {useEffect, useState} from 'react';
import NavBar from '../navBar/NavBar';
import GamesListTable from './GamesListTable';
import AddModal from './AddModal';
import UpdateModal from './UpdateModal';
import DeleteModal from './DeleteModal';
import axios from "axios";
import '../home/Home.css';
import './GamesList.css';
import {Button, Table, Tab, Tabs, ButtonGroup, ToggleButton, InputGroup, Form, FormControl, Col, Row} from 'react-bootstrap';

export default function GamesList() {

    const headings = ["Title", "System", "Release Date", "Status", "Year Completed"];
    const [response, setResponse] = useState([]);       //Query result
    const [responseB, setResponseB] = useState([{title: "Title", system: "System"}]); //Entry to update
    const [userInput, setUserInput] = useState([]);     //For the filter text box
    const [userInputB, setUserInputB] = useState("");   //For the update text box
    const [filter, setFilter] = useState([]);           //Filter type (headings)
    const [selection, setSelection] = useState([]);     //The type of update to be performed
    const radio_btn = [
        {name: 'add', value: 'add'},
        {name: 'update', value: 'update'},
        {name: 'delete', value: 'delete'}
    ];
    const [modalShow, setModalShow] = useState(false);
    const [addModalShow, setAddModalShow] = useState(false);
    const [deleteModalShow, setDeleteModalShow] = useState(false);
    var formdata = ["title", "system", "release-date", "status", "yr_completed"];

    useEffect(() => {
        if(filter && userInput) {
            axios.get("http://localhost:4000/games?"+filter+"="+userInput)
            .then(res => {
                setResponse(res.data)
            })
            .catch(err => {
                err.status(400).json(err)
            })
        }
        else
        {
            axios.get("http://localhost:4000/games")
            .then(res => {
                setResponse(res.data)
            })
            .catch(err => {
                err.status(400).json(err)
            })
        }
    }, [])

    //Handle the selection on the filter dropdown menu
    const handleSelect=(e)=>{
        setFilter(e);
        console.log(e);
    }

    //Handle querying from the search box
    const handleSubmit=(e)=>{
        console.log(e);
        if(filter && userInput) {
            axios.get("http://localhost:4000/games?"+filter+"="+userInput)
            .then(res => {
                setResponse(res.data)
            })
            .catch(err => {
                err.status(400).json(err)
            })
        }
        else
        {
            axios.get("http://localhost:4000/games")
            .then(res => {
                setResponse(res.data)
            })
            .catch(err => {
                err.status(400).json(err)
            })
        }
    }

    //Handle the database entry update functionality
    const handleUpdate=(e)=>{
        console.log(e);
        if(selection === "update" && userInputB !== "") {
            axios.get("http://localhost:4000/games?title="+userInputB)
            .then(res => {
                console.log(res.data)
                if(res.data && Object.keys(res.data).length === 1) {
                    setResponseB(res.data);
                    setModalShow(true);
                }
                else if(Object.keys(res.data).length < 1) {
                    alert("Title does not exist");
                }
                else {
                    alert("There are more than one title with this substring, try again.");
                }
            })
            .catch(err => {
                console.log("Bad Request");
                err.status(400).json(err);
            })
        }
        else if(selection === "add" && userInputB !== "") {
            setAddModalShow(true);
        }
        else if(selection === "delete" && userInputB !== "") {
            axios.get("http://localhost:4000/games?title="+userInputB)
            .then(res => {
                if(res.data && Object.keys(res.data).length === 1) {
                    setResponseB(res.data);
                    setDeleteModalShow(true);
                }
            })
            .catch(err => {
                console.log("Bad Request");
                err.status(400).json(err);
            })
        }
    }

    return (
        <div className="games-list">
            <NavBar/>
            <div className="NavBar-div">
                <div style={{ background: "white", opacity: "90%", padding: "12px", borderRadius: "5px", fontFamily: "quicksand"}}>
                    <h1 style={{textDecoration: "underline", textAlign: "center"}}> Games List<br/> </h1>
                    <Tabs defaultActiveKey="gamelist" id="gamelist-id" className="gamesTabs">
                        <Tab eventKey="gamelist" title="Games Progress">
                            <div className="filter-div" style={{padding: "5px"}}>
                                Filter:
                                <InputGroup className="game-list-filter">
                                    <Col xs={8}>
                                        <FormControl 
                                         aria-label="Game list filter" 
                                         type="text" 
                                         value={userInput}
                                         onChange={(e)=> setUserInput(e.target.value)}
                                        />
                                    </Col>
                                    <Col xs={2} md={2}>
                                        <Form.Select aria-label="Filters" style={{width: "95%", fontFamily: "quicksand"}}
                                        onChange={(e) => handleSelect(e.target.value)}>
                                            <option>Filters</option>
                                            <option value="title">Title</option>
                                            <option value="system">System</option>
                                            <option value="release_date">Release Date</option>
                                            <option value="status">Status</option>
                                            <option value="yr_completed">Year Completed</option>
                                        </Form.Select>
                                    </Col>
                                    <Col xs={2} md={2}>
                                        <Button variant="primary" style={{width: "50%"}}
                                        onClick={handleSubmit}>Submit</Button>
                                    </Col>
                                </InputGroup>
                            </div>
                            <div className="update-div" style={{paddingLeft: "5px", paddingBottom: "5px"}}>
                                Update:
                                <Row>
                                    <Col xs={8} style={{width: "67%"}}>
                                        <FormControl 
                                         aria-label="games-updater" 
                                         type="text" 
                                         value={userInputB}
                                         onChange={(e)=> setUserInputB(e.target.value)}
                                        />
                                    </Col>
                                    <Col xs={2} md={1}>
                                        <ButtonGroup>
                                            {radio_btn.map((radio, index) => (
                                                <ToggleButton
                                                 key={index}
                                                 id={'radio-' + index}
                                                 type="radio"
                                                 variant="outline-secondary"
                                                 name="radio"
                                                 value={radio.value}
                                                 checked={selection === radio.value}
                                                 onChange={(e) => setSelection(e.currentTarget.value)}
                                                >
                                                     {radio.name}
                                                </ToggleButton>
                                            ))}
                                        </ButtonGroup>
                                    </Col>
                                    <Col xs={2} md={2} style={{width: "16%", marginLeft: "100px"}}>
                                        <Button variant="success" 
                                         style={{width: "50%"}}
                                         onClick={handleUpdate}
                                        >
                                            Continue
                                        </Button>
                                        <UpdateModal
                                            responseb={responseB}
                                            formdata={formdata}
                                            show={modalShow}
                                            onHide={() => setModalShow(false)}
                                        />
                                        <AddModal
                                            userinput={userInputB}
                                            show={addModalShow}
                                            onHide={() => setAddModalShow(false)}
                                        />
                                        <DeleteModal
                                            responseB={responseB}
                                            userinput={userInputB}
                                            show={deleteModalShow}
                                            onHide={() => setDeleteModalShow(false)}
                                        />
                                    </Col>
                                </Row>
                            </div>
                            <div style={{width: "99%", height: "60vh", overflowY: "auto"}}>
                                <Table responsive bordered hover>
                                    <thead>
                                        <th>#</th>
                                        {Array.from(headings).map((headingName, index) => (
                                        <th key={index}>{headingName}</th>
                                        ))}
                                    </thead>
                                    <tbody>
                                        <GamesListTable
                                            response={response}
                                        />
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