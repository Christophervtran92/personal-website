import axios from 'axios';
import '../home/Home.css';
import './GamesList.css';
import {Button, Modal, Form} from 'react-bootstrap';

export default function DeleteModal(props) {

    const handleDeleteSubmit=(e)=> {
        axios.delete("http://localhost:4000/games/"+props.responseB[0]._id)
        .then(res => {
            console.log("Success: " + props.responseB[0]._id);
            alert("Deleted:\nTitle: " + props.responseB[0].title);
        })
        .catch(err => {
            console.log("Bad Request: " + props.responseB[0]._id);
            err.status(400).json(err);
        })
       console.log(props.responseB[0]);
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
                    Delete Menu
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form id="add-form">
                <Form.Group className="update-title" controlId="form-update-title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name="title" placeholder={props.responseB[0].title} disabled/>
                    </Form.Group>
                    <Form.Group className="update-system" controlId="form-update-system">
                        <Form.Label>System</Form.Label>
                        <Form.Control type="text" name="system" placeholder={props.responseB[0].system} disabled/>
                    </Form.Group>
                    <Form.Group className="update-release-date" controlId="form-update-release-date">
                        <Form.Label>Release Date</Form.Label>
                        <Form.Control type="text" name="release_date" placeholder={props.responseB[0].release_date} disabled/>
                    </Form.Group>
                    <Form.Group className="update-status" controlId="form-update-status">
                        <Form.Label>Status</Form.Label>
                        <Form.Control type="text" name="status" placeholder={props.responseB[0].status} disabled/>
                    </Form.Group>
                    <Form.Group className="update-yr-completed" controlId="form-update-yr-completed">
                        <Form.Label>Year Completed</Form.Label>
                        <Form.Control type="number" name="yr_completed" placeholder={props.responseB[0].yr_completed} disabled/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={(e)=>handleDeleteSubmit()}>Confirm Delete</Button>
                <Button variant="secondary" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}