import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import './works_info.css';

export default function NavBar (props) {

    return (
        <Modal style={{fontFamily: "Quicksand"}}
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Template
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{height: "75vh", overflowY: "auto"}}>
        <h4>Description</h4>
            Description goes here
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }