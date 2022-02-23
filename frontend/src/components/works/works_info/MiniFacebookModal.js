import React from 'react';
import {Modal, Button} from 'react-bootstrap';

export default function NavBar (props) {

    return (
        <Modal style={{fontFamily: "Quicksand"}}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Mini-Facebook
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Mini-Facebook description to be added
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }