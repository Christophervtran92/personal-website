import React from 'react';
import {Modal, Button, Image, Accordion} from 'react-bootstrap';

import filter_title_pic from '../../../images/MyWebsite/website_filter_title.PNG';
import filter_default_pic from '../../../images/MyWebsite/website_filter_default.PNG';
import filter_system_pic from '../../../images/MyWebsite/website_filter_system.PNG';
import filter_release_pic from '../../../images/MyWebsite/website_filter_release.PNG';
import filter_status_pic from '../../../images/MyWebsite/website_filter_status.PNG';
import filter_yrcompleted_pic from '../../../images/MyWebsite/website_filter_yrcompleted.PNG';
import update_modal_pic from '../../../images/MyWebsite/website_update_modal.PNG';
import update_invalid_pic from '../../../images/MyWebsite/website_update_invalid.PNG';
import add_input_pic from '../../../images/MyWebsite/website_add_input.PNG'
import add_modal_pic from '../../../images/MyWebsite/website_add_modal.PNG'
import add_finished_pic from '../../../images/MyWebsite/website_add_finished.PNG'
import delete_modal_pic from '../../../images/MyWebsite/website_delete_modal.PNG'
import delete_finished_pic from '../../../images/MyWebsite/website_delete_finished.PNG'

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
            This Website
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{height: "75vh", overflowY: "auto"}}>
          <h4 style={{textDecoration: "underline"}}>Description</h4>
          <p1>
            &emsp;Built on the MERN stack and deployed on Vercel. Since my focus on my Software Engineering
            project was the backend I thought building a website would be a good way to learn more of the frontend
            as well. By working on this website several days a week I hope to learn and improve my skills
            on both the frontend and backend. I am still a long way from being a MERN expert, but everyone has to 
            start somewhere! <br/>
            &emsp;Thanks to Basmah Altimimi, Bijayata Gurung, James Nguyen, and Smriti Gurung from my
            Software Engineering class for helping me understand/better understand the 
            components in the MERN stack which allowed me to start building this website.<br/><br/>
            I have also containerized the application using Docker but I am still
            learning how Docker works so it may not be the best implementation. Nonetheless, the website can successfully
            be ran through Docker using the docker-compose file in the root directory of the project.<br/><br/>
            Below are descriptions of the features that do not function on the Vercel deployment of 
            the website.<br/><br/>
          </p1>
          <h4 style={{textDecoration: "underline"}}>The Games List (Backend Required)</h4>
          <h5 style={{fontWeight: "bold"}}>Games Progress</h5>
          <p1>
            &emsp;For more than a half decade I have been tracking my progress with games I have been playing on
            Google Docs. By adding the list to my website, it provides me with a great way to learn more
            about building backends using ExpressJS and MongoDB. While the game list is not fully functional yet, 
            below is some descriptions on the parts that are working but are unable to be showcased on Vercel since 
            it requires a connection to the backend.<br/><br/>
          </p1>
          <h5 style={{textDecoration: "underline"}}>Filtering Functionality</h5>
          <p1>
            &emsp;The current implementation of the games list allows for filtering by title, system, release date, status,
            or year completed. Some filters such as title and system can filter by substrings while others such as
            release date must be matched exactly. By hitting submit without any search value, you can return the 
            default list that shows all entries.<br/><br/>
          </p1>
          <Accordion style={{width: "100%"}}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Filtering Examples</Accordion.Header>
              <Accordion.Body>
                <h6 style={{textDecoration: "underline"}}>Default (No Filter)</h6>
                <Image fluid='true' img src={filter_default_pic} style={{border: "solid", borderColor: "black", borderWidth: "2px"}}></Image><br/><br/>
                <h6 style={{textDecoration: "underline"}}>Filter by Title</h6>
                <Image fluid='true' img src={filter_title_pic} style={{border: "solid", borderColor: "black", borderWidth: "2px"}}></Image><br/><br/>
                <h6 style={{textDecoration: "underline"}}>Filter by System</h6>
                <Image fluid='true' img src={filter_system_pic} style={{border: "solid", borderColor: "black", borderWidth: "2px"}}></Image><br/><br/>
                <h6 style={{textDecoration: "underline"}}>Filter by Release Date</h6>
                <Image fluid='true' img src={filter_release_pic} style={{border: "solid", borderColor: "black", borderWidth: "2px"}}></Image><br/><br/>
                <h6 style={{textDecoration: "underline"}}>Filter by Status</h6>
                <Image fluid='true' img src={filter_status_pic} style={{border: "solid", borderColor: "black", borderWidth: "2px"}}></Image><br/><br/>
                <h6 style={{textDecoration: "underline"}}>Filter by Year Completed</h6>
                <Image fluid='true' img src={filter_yrcompleted_pic} style={{border: "solid", borderColor: "black", borderWidth: "2px"}}></Image><br/><br/>
                </Accordion.Body>
              </Accordion.Item>
          </Accordion>
          <br/>
          <h5 style={{textDecoration: "underline"}}>Update Functionality</h5>
          <h6 style={{fontWeight: "bold"}}>Add</h6>
          <p1>
            &emsp;The add function allows the user to input a new title to be added to the database of games. Much like the update feature a modal will pop up allowing the user
            to input detailed information about the game to be added. <br/><br/>
          </p1>
          <Accordion style={{width: "100%"}}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Add Examples</Accordion.Header>
              <Accordion.Body>
                <h6 style={{textDecoration: "underline"}}>Add Input</h6>
                <Image fluid='true' img src={add_input_pic} style={{border: "solid", borderColor: "black", borderWidth: "2px"}}></Image><br/><br/>
                <h6 style={{textDecoration: "underline"}}>Add Modal</h6>
                <Image fluid='true' img src={add_modal_pic} style={{border: "solid", borderColor: "black", borderWidth: "2px"}}></Image><br/><br/>
                <h6 style={{textDecoration: "underline"}}>Add Finished</h6>
                <Image fluid='true' img src={add_finished_pic} style={{border: "solid", borderColor: "black", borderWidth: "2px"}}></Image><br/><br/>
                </Accordion.Body>
              </Accordion.Item>
          </Accordion>
          <br/>
          <h6 style={{fontWeight: "bold"}}>Update</h6>
          <p1>
            &emsp;The update function will allow for updating a current entry within the games list. Entries are searched by title and so long as the substring
            returns a single entry, a substring can be used to find a specific entry within the games list. By searching for an entry, a modal will pop-up with
            a form that shows info about the current searched entry and allows for that entry to be updated. Currently, the functionality works up to popping up
            the form with the entry info.<br/><br/>
          </p1>
          <Accordion style={{width: "100%"}}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Update Examples</Accordion.Header>
              <Accordion.Body>
                <h6 style={{textDecoration: "underline"}}>Update Form</h6>
                <Image fluid='true' img src={update_modal_pic} style={{border: "solid", borderColor: "black", borderWidth: "2px"}}></Image><br/><br/>
                <h6 style={{textDecoration: "underline"}}>Multiple Entries</h6>
                <Image fluid='true' img src={update_invalid_pic} style={{border: "solid", borderColor: "black", borderWidth: "2px"}}></Image><br/><br/>
                </Accordion.Body>
              </Accordion.Item>
          </Accordion>
          <br/>
          <h6 style={{fontWeight: "bold"}}>Delete</h6>
          <p1>
            &emsp;The delete function allows the user to remove an entry from the database. The user is able to search for entries to be removed with either the full title or a substring. If it is
            a substring that only has one matching title then it will select that particular title, otherwise it will not find any titles. Much like the update and add features, delete will also
            bring up a modal with information on what is to be deleted but the data can not be edited.<br/><br/>
          </p1>
          <Accordion style={{width: "100%"}}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Delete Examples</Accordion.Header>
              <Accordion.Body>
                <h6 style={{textDecoration: "underline"}}>Delete Modal</h6>
                <Image fluid='true' img src={delete_modal_pic} style={{border: "solid", borderColor: "black", borderWidth: "2px"}}></Image><br/><br/>
                <h6 style={{textDecoration: "underline"}}>Delete Finished</h6>
                <Image fluid='true' img src={delete_finished_pic} style={{border: "solid", borderColor: "black", borderWidth: "2px"}}></Image><br/><br/>
                </Accordion.Body>
              </Accordion.Item>
          </Accordion>
          <br/>
          <h6 style={{fontSize: "14px"}}>Backend source code can be found <a href="https://github.com/Christophervtran92/personal-website/tree/main/backend" target="_blank" rel="noreferrer">here</a> </h6>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }