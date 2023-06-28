import axios from 'axios';
import '../home/Home.css';
import './GamesList.css';
import {Button, Modal, Form} from 'react-bootstrap';

export default function AddModal(props) {
    var formData = {title: "", system: "", release_date: "", status: "status", yr_completed: ""};

    const handleAddEntry=(e)=> {
        axios.post("http://localhost:4000/games/", e)
        .then(res => {
            console.log(res.data);
            alert("Added:\ntitle: " + res.data.title);
        })
        .catch(err => {
            console.log("Bad Request");
            console.log(e);
            err.status(400).json(err);
        })
    }
    
    return (
        <Modal style={{fontFamily: "Quicksand"}}
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Menu
                </Modal.Title>
            </Modal.Header>
            <Modal.Body onLoad={formData.title = props.userinput}>
                <Form id="add-form">
                <Form.Group className="update-title" controlId="form-update-title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name="title" defaultValue={props.userinput} onChange={(e)=>formData.title = e.target.value}/>
                    </Form.Group>
                    <Form.Group className="update-system" controlId="form-update-system">
                        <Form.Label>System</Form.Label>
                        <Form.Control type="text" name="system" placeholder={"system"} onChange={(e)=>formData.system = e.target.value}/>
                    </Form.Group>
                    <Form.Group className="update-release-date" controlId="form-update-release-date">
                        <Form.Label>Release Date</Form.Label>
                        <Form.Control type="text" name="release_date" placeholder={"MM/DD/YYYY"} onChange={(e)=>formData.release_date = e.target.value}/>
                    </Form.Group>
                    <Form.Group className="update-status" controlId="form-update-status">
                        <Form.Label>Status</Form.Label>
                        <Form.Select type="text" name="status" onChange={(e)=>formData.status = e.target.value}>
                            <option>Upcoming</option>
                            <option>Interested</option>
                            <option>Planned</option>
                            <option>In Progress</option>
                            <option>Limbo</option>
                            <option>Completed</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="update-yr-completed" controlId="form-update-yr-completed">
                        <Form.Label>Year Completed</Form.Label>
                        <Form.Control type="number" name="yr_completed" onChange={(e)=>formData.yr_completed = e.target.value}/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={(e) => handleAddEntry(formData)}>Add</Button>
                <Button variant="secondary" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

// Line 50: <Form.Control type="text" name="status" placeholder={"status"} onChange={(e)=>formData.status = e.target.value}/>