
import React, {useEffect, useState} from 'react';
import NavBar from '../navBar/NavBar'
import axios from "axios";
import '../home/Home.css'
import './GamesList.css'
import {Button, Table, Tab, Tabs, ButtonGroup, ToggleButton, InputGroup, Form, FormControl, Col, Row, Modal} from 'react-bootstrap';

const headings = ["Title", "System", "Release Date", "Status", "Year Completed"];
// const demoData = ["Elden Ring", "Playstation 5", "02/25/2022", "Upcoming", "-"];
// const demoData2 = ["Metroid Dread", "Nintendo Switch", "10/08/2021", "Completed", "2021"];

export default function GamesList() {

    const [response, setResponse] = useState([]);
    const [responseB, setResponseB] = useState([{title: "Title", system: "System"}]);
    const [userInput, setUserInput] = useState([]);
    const [userInputB, setUserInputB] = useState("");
    const [filter, setFilter] = useState([]);
    const [selection, setSelection] = useState([]);
    const radio_btn = [
        {name: 'add', value: 'add'},
        {name: 'update', value: 'update'},
        {name: 'delete', value: 'delete'}
    ];

    const [modalShow, setModalShow] = React.useState(false);


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
    },[])

    const handleSelect=(e)=>{
        setFilter(e);
        console.log(e);
    }

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

    const handleUpdate=(e)=>{
        console.log(e);
        if(selection === "update" && userInputB !== "") {
            axios.get("http://localhost:4000/games?title="+userInputB)
            .then(res => {
                console.log(res.data)
                if(res.data && Object.keys(res.data).length === 1) {
                    setResponseB(res.data)
                    setModalShow(true)
                }
                else if(Object.keys(res.data).length < 1) {
                    alert("Title does not exist")
                }
                else {
                    alert("There are more than one title with this substring, try again.")
                }
            })
            .catch(err => {
                err.status(400).json(err)
            })
        }
    }

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
                default:
                    return null;
            }
        })
    }

    function UpdateModal(props) {
        return (
          <Modal style={{fontFamily: "Quicksand"}}
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Update Menu
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="update-title" controlId="form-update-title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name="title" placeholder={responseB[0].title}/>
                    </Form.Group>
                    <Form.Group className="update-system" controlId="form-update-system">
                        <Form.Label>System</Form.Label>
                        <Form.Control type="text" name="system" placeholder={responseB[0].system}/>
                    </Form.Group>
                    <Form.Group className="update-release-date" controlId="form-update-release-date">
                        <Form.Label>Release Date</Form.Label>
                        <Form.Control type="text" name="release_date" placeholder={responseB[0].release_date}/>
                    </Form.Group>
                    <Form.Group className="update-status" controlId="form-update-status">
                        <Form.Label>Status</Form.Label>
                        <Form.Control type="text" name="status" placeholder={responseB[0].status}/>
                    </Form.Group>
                    <Form.Group className="update-yr-completed" controlId="form-update-yr-completed">
                        <Form.Label>Year Completed</Form.Label>
                        <Form.Control type="number" name="yr_completed" placeholder={responseB[0].yr_completed}/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success">Update</Button>
                <Button variant="secondary" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }

    return (
        <div className="games-list">
            <NavBar/>
            <div className="NavBar-div">
                <div style={{background: "white", opacity: "90%", padding: "12px", borderRadius: "5px", fontFamily: "quicksand"}}>
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
                                        <Form.Select aria-label="Filters" style={{width: "95%"}}
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
                                Update (Under Construction):
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
                                            show={modalShow}
                                            onHide={() => setModalShow(false)}
                                        />
                                    </Col>
                                </Row>
                            </div>
                            <div style={{height: "75vh", overflowY: "auto"}}>
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
-----------------
Component History
-----------------

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

/*
    <DropdownButton id="dropdown-basic-button" title="Filter By">
        <Dropdown.Item href="#/action-1">Title</Dropdown.Item>
        <Dropdown.Item href="#/action-2">System</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Release Date</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Status</Dropdown.Item>
        <Dropdown.Item href="#/action-5">Year Completed</Dropdown.Item>
    </DropdownButton>
*/

/*
    useEffect(() => {
        axios.get("http://localhost:4000/games")
        .then(res => {
            setResponse(res.data)
        })
        .catch(err => {
            err.status(400).json(err)
        })
    }, [])
*/

/*
const handleSelect=(e)=>{
        console.log(e);
        setFilter(e);
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
*/

/*
    <Col xs={1} md={1}>
        <DropdownButton
        variant="outline-secondary"
        title="Filter by"
        id="games-filter"
        align="end"
        >
            <Dropdown.Item eventKey="title">Title</Dropdown.Item>
            <Dropdown.Item eventKey="system">System</Dropdown.Item>
            <Dropdown.Item eventKey="release_date">Release Date</Dropdown.Item>
            <Dropdown.Item eventKey="status">Status</Dropdown.Item>
            <Dropdown.Item eventKey="yr_completed">Year Completed</Dropdown.Item>
        </DropdownButton>
    </Col>
*/

/*

function UpdateModal(props) {
        return (
          <Modal style={{fontFamily: "Quicksand"}}
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Update Menu
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="update-title" controlId="form-update-title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder= {responseB.title} />
                    </Form.Group>
                    <Form.Group className="update-system" controlId="form-update-system">
                        <Form.Label>System</Form.Label>
                        <Form.Control type="text" placeholder="system" />
                    </Form.Group>
                    <Form.Group className="update-release-date" controlId="form-update-release-date">
                        <Form.Label>Release Date</Form.Label>
                        <Form.Control type="text" placeholder="MM/DD/YYYY" />
                    </Form.Group>
                    <Form.Group className="update-status" controlId="form-update-status">
                        <Form.Label>Status</Form.Label>
                        <Form.Control type="text" placeholder="In Progress/Limbo/Planned/Upcoming/Completed" />
                    </Form.Group>
                    <Form.Group className="update-yr-completed" controlId="form-update-yr-completed">
                        <Form.Label>Year Completed</Form.Label>
                        <Form.Control type="number" placeholder="YYYY" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success">Update</Button>
                <Button variant="secondary" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }

*/