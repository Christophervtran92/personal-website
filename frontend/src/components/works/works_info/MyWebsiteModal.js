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
            This Website
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Built on the MERN stack and deployed on Vercel. I am still a long way from being a MERN expert, 
            but everyone has to start somewhere!
            Thanks to Basmah Altimimi, Bijayata Gurung, James Nguyen, and Smriti Gurung from my
            Software Engineering class for helping me understand/better understand the 
            components in the MERN stack that allowed me to build this website.
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }