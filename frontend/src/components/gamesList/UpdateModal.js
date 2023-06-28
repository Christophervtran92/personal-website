import axios from 'axios';
import '../home/Home.css';
import './GamesList.css';
import {Button, Modal, Form} from 'react-bootstrap';

export default function UpdateModal(props) {

    var formdata = ["title", "system", "release-date", "status", "yr_completed"];

    //Takes the data inputted from the modal and converts it over to a JSON object which then is used to update the info in the DB using axios
    const handleUpdateSubmit=(e)=>{
        const updateObj = {title: formdata[0], system: formdata[1], release_date: formdata[2], status: formdata[3], yr_completed: formdata[4]};

        axios.put("http://localhost:4000/games/"+props.responseb[0]._id, updateObj)
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
      formdata[0] = props.responseb[0].title
      formdata[1] = props.responseb[0].system
      formdata[2] = props.responseb[0].release_date
      formdata[3] = props.responseb[0].status
      formdata[4] = props.responseb[0].yr_completed
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
        <Modal.Body onLoad={loadData()}>
            <Form id="update-form">
                <Form.Group className="update-title" controlId="form-update-title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="title" defaultValue={props.responseb[0].title} onChange={(e)=>formdata[0] = e.target.value}/>
                </Form.Group>
                <Form.Group className="update-system" controlId="form-update-system">
                    <Form.Label>System</Form.Label>
                    <Form.Control type="text" name="system" defaultValue={props.responseb[0].system} onChange={(e)=>formdata[1] = e.target.value}/>
                </Form.Group>
                <Form.Group className="update-release-date" controlId="form-update-release-date">
                    <Form.Label>Release Date</Form.Label>
                    <Form.Control type="text" name="release_date" defaultValue={props.responseb[0].release_date } onChange={(e)=>formdata[2] = e.target.value}/>
                </Form.Group>
                <Form.Group className="update-status" controlId="form-update-status">
                    <Form.Label>Status</Form.Label>
                    
                    <Form.Select type="text" name="status" defaultValue={props.responseb[0].status} onChange={(e)=>formdata[3] = e.target.value}>
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
                    <Form.Control type="number" name="yr_completed" defaultValue={props.responseb[0].yr_completed} onChange={(e)=>formdata[4] = e.target.value}/>
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
  //<Form.Control type="text" name="status" defaultValue={props.responseb[0].status} onChange={(e)=>formdata[3] = e.target.value}/>