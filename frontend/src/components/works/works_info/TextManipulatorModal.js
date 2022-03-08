import React from 'react';
import {Modal, Button, Image} from 'react-bootstrap';

import textManipulator_interface_pic from '../../../images/TextManipulator/TextManipulator_Interface.PNG';
import textManipulator_upperFirstLetter_pic from '../../../images/TextManipulator/TextManipulator_UpperFirstLetter.PNG';
import textManipulator_upperAll_pic from '../../../images/TextManipulator/TextManipulator_UpperAll.PNG';
import textManipulator_upperFirstAll_pic from '../../../images/TextManipulator/TextManipulator_UpperFirstAll.PNG';
import textManipulator_lowerFirstLetter_pic from '../../../images/TextManipulator/TextManipulator_LowerFirstLetter.PNG';
import textManipulator_lowerAll_pic from '../../../images/TextManipulator/TextManipulator_LowerAll.PNG';

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
            Text Manipulator
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{height: "75vh", overflowY: "auto"}}>
            <h4 style={{textDecoration: "underline"}}>Description</h4>
            <p1>
                &emsp;A GUI based java application that takes a string into a text box and outputs manipulated text into another text box. The program can uppercase the first letter in each sentence, 
                uppercase all the letters in the string, uppercase the first letter in every word, lowercase the first letter in each sentence, and lowercase all the letters of the string.<br/><br/>
            </p1> 
            <h4 style={{textDecoration: "underline"}}>The Application</h4>
            <h5 style={{fontWeight: "bold"}}>Interface</h5>
            <p1>
                The interface consists of a green and red outlined input box, a dropdown to select the type of manipulation, and a 'format' button to perform the selected manipulation. <br/>
            </p1>
            <Image fluid="true" img src={textManipulator_interface_pic} style={{border: "solid", borderColor: "black", borderWidth: "2px"}}></Image><br/><br/>
            <h5 style={{fontWeight: "bold"}}>Upper 1st Letter</h5>
            <p1>
                Upper 1st Letter makes the first letter of every sentence uppercase. <br/>
            </p1>
            <Image fluid="true" img src={textManipulator_upperFirstLetter_pic} style={{border: "solid", borderColor: "black", borderWidth: "2px"}}></Image><br/><br/>
            <h5 style={{fontWeight: "bold"}}>Upper All</h5>
            <p1>
                Upper All makes all the letters of the string uppercase. <br/>
            </p1>
            <Image fluid="true" img src={textManipulator_upperAll_pic} style={{border: "solid", borderColor: "black", borderWidth: "2px"}}></Image><br/><br/>
            <h5 style={{fontWeight: "bold"}}>Upper 1st All</h5>
            <p1>
                Upper 1st All makes the first letter of every word uppercase. <br/>
            </p1>
            <Image fluid="true" img src={textManipulator_upperFirstAll_pic} style={{border: "solid", borderColor: "black", borderWidth: "2px"}}></Image><br/><br/>
            <h5 style={{fontWeight: "bold"}}>Lower 1st Letter</h5>
            <p1>
                Lower 1st All makes the first letter of every sentence lowercase. <br/>
            </p1>
            <Image fluid="true" img src={textManipulator_lowerFirstLetter_pic} style={{border: "solid", borderColor: "black", borderWidth: "2px"}}></Image><br/><br/>
            <h5 style={{fontWeight: "bold"}}>Lower All</h5>
            <p1>
                Lower All makes all the letters of the string lowercase. <br/>
            </p1>
            <Image fluid="true" img src={textManipulator_lowerAll_pic} style={{border: "solid", borderColor: "black", borderWidth: "2px"}}></Image><br/><br/>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }