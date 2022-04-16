import axios from 'axios';
import '../home/Home.css';
import './GamesList.css';
import {Button, Modal, Form} from 'react-bootstrap';

export default function UpdateModal(props) {

    var formData = ["title", "system", "release-date", "status", "yr_completed"];

    //Takes the data inputted from the modal and converts it over to a JSON object which then is used to update the info in the DB using axios
    const handleUpdateSubmit=(e)=>{
        const updateObj = {title: formData[0], system: formData[1], release_date: formData[2], status: formData[3], yr_completed: formData[4]};

        axios.put("http://localhost:4000/games/"+props.responseB[0]._id, updateObj)
        .then(res => {
            console.log(res.data)
            alert("updated to:\ntitle: " + updateObj.title + "\nsystem: " + updateObj.system + "\nrelease date: " + updateObj.release_date + "\nstatus: " + updateObj.status + "\nyear completed: " + updateObj.yr_completed);
        })
        .catch(err => {
            console.log("Bad Request")
            err.status(400).json(err)
        })
    }

    //Load game info data from props into formData
    const loadData=(e)=>{
      formData[0] = props.responseB[0].title
      formData[1] = props.responseB[0].system
      formData[2] = props.responseB[0].release_date
      formData[3] = props.responseB[0].status
      formData[4] = props.responseB[0].yr_completed
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
            Update Menu
          </Modal.Title>
        </Modal.Header>
        <Modal.Body onLoad={loadData}>
            <Form id="update-form">
                <Form.Group className="update-title" controlId="form-update-title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="title" defaultValue={props.responseB[0].title} onChange={(e)=>formData[0] = e.target.value}/>
                </Form.Group>
                <Form.Group className="update-system" controlId="form-update-system">
                    <Form.Label>System</Form.Label>
                    <Form.Control type="text" name="system" defaultValue={props.responseB[0].system} onChange={(e)=>formData[1] = e.target.value}/>
                </Form.Group>
                <Form.Group className="update-release-date" controlId="form-update-release-date">
                    <Form.Label>Release Date</Form.Label>
                    <Form.Control type="text" name="release_date" defaultValue={props.responseB[0].release_date } onChange={(e)=>formData[2] = e.target.value}/>
                </Form.Group>
                <Form.Group className="update-status" controlId="form-update-status">
                    <Form.Label>Status</Form.Label>
                    <Form.Control type="text" name="status" defaultValue={props.responseB[0].status} onChange={(e)=>formData[3] = e.target.value}/>
                </Form.Group>
                <Form.Group className="update-yr-completed" controlId="form-update-yr-completed">
                    <Form.Label>Year Completed</Form.Label>
                    <Form.Control type="number" name="yr_completed" defaultValue={props.responseB[0].yr_completed} onChange={(e)=>formData[4] = e.target.value}/>
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="success" onClick={handleUpdateSubmit}>Update</Button>
            <Button variant="secondary" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }