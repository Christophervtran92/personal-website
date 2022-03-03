import React from 'react';
import {Modal, Button, Image} from 'react-bootstrap';
import atc_verbose_pic from '../../../images/ATC/ATC_verbose.PNG';
import atc_setup_add_pic from '../../../images/ATC/ATC_setup_add.PNG';
import atc_highestpriority_pic from '../../../images/ATC/ATC_highestPriority.PNG';
import atc_insert_pic from '../../../images/ATC/ATC_insert.PNG';
import atc_increasePriority_pic from '../../../images/ATC/ATC_increasePriority.PNG';
import atc_increasePriorityResult_pic from '../../../images/ATC/ATC_increasePriorityResult.PNG';
import atc_controlTowerCode_pic from '../../../images/ATC/ATC_controlTowerCode.PNG';
import atc_flightGenerationCode_pic from '../../../images/ATC/ATC_flightGenerationCode.PNG';
import atc_highestPriorityCode_pic from '../../../images/ATC/ATC_highestPriorityCode.PNG';
import atc_increasePriorityCode_pic from '../../../images/ATC/ATC_increasePriorityCode.PNG';
import atc_insertCode_pic from '../../../images/ATC/ATC_insertCode.PNG';
import atc_maxPriorityQueueCode_pic from '../../../images/ATC/ATC_maxPriorityQueueCode.PNG';
import atc_simulatorCode_pic from '../../../images/ATC/ATC_simulatorCode.PNG';
import atc_heapSortCode_pic from '../../../images/ATC/ATC_heapSortCode.PNG';

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
            Air Traffic Controller
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h4 style={{textDecoration: "underline"}}>Description</h4>
          <p1>
            &emsp;This program simulates an air traffic controller program. It randomly generates fight numbers, distances, and elevations for different flights. Using
            the distance (from runway) and elevation it calculates an approach code for each flight. The flights are sorted using heapsort, which is implemented with a 
            priority queue to store based on approach code, and displayed based on their approach code in descending order. The user can also insert new flights, retrieve 
            the highest priority flight and remove it from the list, and increase the priority of a particular flight. A flight with a higher approach code has greater 
            priority than one with a lower approach code and is why the list is sorted in descending order.
          </p1>
          <h4 style={{textDecoration: "underline"}}>The ATC</h4>
          <h5 style={{fontWeight: "bold"}}>Initial Setup</h5>
          <h6 style={{fontWeight: "bold"}}>Verbose Mode</h6>
          <p1>Verbose mode displays the flights array and the max priority queue after every command.<br/></p1>
          <Image img src={atc_verbose_pic}></Image><br/><br/>
          <h6 style={{fontWeight: "bold"}}>Adding Flights to Initial List</h6>
          <p1>At the start the user can add more flights to the list in addition to the randomly generated ones.<br/></p1>
          <Image img src={atc_setup_add_pic}></Image><br/><br/>
          <h5 style={{fontWeight: "bold"}}>Retrieve Highest Priority</h5>
          <p1>The user can choose the highest priority flight which removes it from the flights list and queue.<br/></p1>
          <Image img src={atc_highestpriority_pic}></Image><br/><br/>
          <h5 style={{fontWeight: "bold"}}>Insert New Flight</h5>
          <p1>The user can also insert a new flight after the initial setup using max heap insert. The user provides
              a flight code and approach code value while distance and elevation are randomly generated.<br/>
          </p1>
          <Image img src={atc_insert_pic}></Image><br/><br/>
          <h5 style={{fontWeight: "bold"}}>Increase Priority</h5>
          <p1>The user can also insert a new flight after the initial setup using max heap insert. The user provides
              a flight code and approach code value while distance and elevation are randomly generated.<br/><br/>
          </p1>
          <p1>Before:</p1> <br/>
          <Image img src={atc_increasePriority_pic}></Image><br/><br/>
          After: <br/>
          <Image img src={atc_increasePriorityResult_pic}></Image><br/><br/>
          <h4 style={{textDecoration: "underline"}}>Code Snippets</h4>
          <h6 style={{fontWeight: "bold"}}>ControlTower Class</h6>
          <p1>The bridge between the frontend and backend. The main method calls methods from this class to perform operations on the data.</p1>
          <Image fluid='true' img src={atc_controlTowerCode_pic}></Image><br/>
          <Image fluid='true' img src={atc_flightGenerationCode_pic}></Image><br/>
          <Image fluid='true' img src={atc_highestPriorityCode_pic}></Image><br/>
          <Image fluid='true' img src={atc_increasePriorityCode_pic}></Image><br/>
          <Image fluid='true' img src={atc_insertCode_pic}></Image><br/><br/><br/>
          <h6 style={{fontWeight: "bold"}}>HeapSort Class</h6>
          <p1>The implementation of the Heap Sort algorithm used in this project.</p1>
          <Image fluid='true' img src={atc_heapSortCode_pic}></Image><br/><br/><br/>
          <h6 style={{fontWeight: "bold"}}>MaxPriorityQueue Class</h6>
          <p1>The implementation of the Max Priority Queue used in this project.</p1>
          <Image fluid='true' img src={atc_maxPriorityQueueCode_pic}></Image><br/><br/><br/>
          <h6 style={{fontWeight: "bold"}}>Simulate Class Class</h6>
          <p1>Simulates an air traffic control application, the frontend code.</p1>
          <Image fluid='true' img src={atc_simulatorCode_pic}></Image><br/>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }