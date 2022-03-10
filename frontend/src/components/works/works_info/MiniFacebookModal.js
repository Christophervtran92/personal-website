import React from 'react';
import {Modal, Button, Accordion, Image} from 'react-bootstrap';
import './works_info.css';

import MiniFB_populate01_pic from '../../../images/MiniFB/MiniFB_populate01.PNG';
import MiniFB_populate02_pic from '../../../images/MiniFB/MiniFB_populate02.PNG';
import MiniFB_populate03_pic from '../../../images/MiniFB/MiniFB_populate03.PNG';
import MiniFB_ListFriends_pic from '../../../images/MiniFB/MiniFB_ListFriends.PNG';
import MiniFB_AddFriend_pic from '../../../images/MiniFB/MiniFB_AddFriend.PNG';
import MiniFB_RemoveFriend_pic from '../../../images/MiniFB/MiniFB_RemoveFriend.PNG';
import MiniFB_SearchUser_pic from '../../../images/MiniFB/MiniFB_SearchUser.PNG';
import MiniFB_AddUser_pic from '../../../images/MiniFB/MiniFB_AddUser.PNG';
import MiniFB_DeleteUser_pic from '../../../images/MiniFB/MiniFB_DeleteUser.PNG';
import MiniFB_CheckFriends_pic from '../../../images/MiniFB/MiniFB_CheckFriends.PNG';

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
            Mini-Facebook
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{height: "75vh", overflowY: "auto"}}>
            <h4>Description</h4>
            <p1>
                &emsp;This application aims to imitate social media platforms, such as Facebook, by creating an imaginary
                social media platform with users that have each other added as friends. The user of the application is
                then able to have the users within this imaginary social media platform add and remove each other. The user
                of the application is also able to list all the different social media users, who these social media users
                have added as friends, and check if two social media users are added as friends. The user of the application
                can also perform administrative operations such as adding and deleting social media users from the application.
                <br/>&emsp;To do these operations, the program uses a binary search tree and bucket sort. The binary search tree
                is used for such operations as listing friends of a user through in-order traversal of the tree. The bucket sort 
                is used for such operations as storing the different users into a hash table and adding friends through chained 
                hash search. <br/><br/>
            </p1>
            <h4>The Mini-Facebook Application</h4>
            <h5>Populating Mini-Facebook</h5>
            <p1>
                The application takes a list of users from an input file list and sorts them into one of twelve different buckets
                based on their hash value.
            </p1>
            <Accordion style={{width: "100%"}}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Populating Mini-Facebook Screenshots</Accordion.Header>
                <Accordion.Body>
                  <h6>Initial:</h6>
                  <Image fluid="true" img src={MiniFB_populate01_pic}></Image><br/><br/>
                  <h6>Middle:</h6>
                  <Image fluid="true" img src={MiniFB_populate02_pic}></Image><br/><br/>
                  <h6>End:</h6>
                  <Image fluid="true" img src={MiniFB_populate03_pic}></Image><br/><br/>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion><br/>
            <h5>MiniFB User Related Operations</h5>
            <p1>
                The application user can perform several MiniFB user related operations such as 
                listing friends, adding friends, and removing friends.
            </p1>
            <Accordion style={{width: "100%"}}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>MiniFB User Related Operations Examples</Accordion.Header>
                <Accordion.Body>
                  <h6>List Friends</h6>
                  <p1>
                      By using a binary search tree and in-order traversal, the application is able to list
                      all the friends of a particular MiniFB user in alphabetical order.<br/>
                  </p1>
                  <Image fluid="true" img src={MiniFB_ListFriends_pic}></Image><br/><br/>
                  <h6>Add Friend</h6>
                  <p1>
                      By using chain hash search, the application searches the hash table for the MiniFB
                      user that is to be added and, if found, links them up within the friends list of
                      each MiniFB user (the two being added).<br/>
                  </p1>
                  <Image fluid="true" img src={MiniFB_AddFriend_pic}></Image><br/><br/>
                  <h6>Remove Friend</h6>
                  <p1>
                      Similar to the add operation, this one uses chain hash search to find the MiniFB
                      user (to be removed from the friends list) in the hash table and unlinks the two 
                      MiniFB users from each others' friends lists (the remover and the one being removed). 
                      <br/>
                  </p1>
                  <Image fluid="true" img src={MiniFB_RemoveFriend_pic}></Image><br/><br/>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion><br/>
            <h5>MiniFB Administrative Operations</h5>
            <p1>
                The application user can perform several MiniFB administrative operations such as searching, adding, deleting 
                MiniFB users, and checking if two MiniFB users are friends or not.<br/>
            </p1>
            <Accordion style={{width: "100%"}}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>MiniFB Administrative Operations Examples</Accordion.Header>
                <Accordion.Body>
                <h6>Check If Two MiniFB Users Are Friends</h6>
                  <p1>
                      The option to check if two miniFB users are friends uses chain hash search to look into the hash 
                      table to retrieve the two MiniFB users and check if they are friends. The application user is able to
                      picks two names to check. Afterwards, the application itself tells the application user if the two 
                      MiniFB users in question are friends or not.<br/>
                  </p1>
                  <Image fluid="true" img src={MiniFB_CheckFriends_pic}></Image><br/><br/>
                  <h6>Add User</h6>
                  <p1>
                      The application prompts the user for a name to add to MiniFB. It then uses chain hash search to 
                      see if the user exists already. If the user does not exist yet, it then uses chain hash insert
                      to add the user to the hash table.<br/>
                  </p1>
                  <Image fluid="true" img src={MiniFB_AddUser_pic}></Image><br/><br/>
                  <h6>Delete User</h6>
                  <p1>
                      The application lists all miniFB users as reference and asks the application user to input 
                      the name of the MiniFB user to be deleted. The application then uses chain hash search to 
                      see if the user is in the hash table. Lastly, it uses chain hash delete to delete the user 
                      from the table. <br/>
                  </p1>
                  <Image fluid="true" img src={MiniFB_DeleteUser_pic}></Image><br/><br/>
                  <h6>Search For MiniFB User</h6>
                  <p1>
                      The search functionality uses chained hash search to check if the MiniFB user exists and if they
                      do, it returns the user and lists their friends list. Otherwise, it returns null if the user
                      does not exist and informs the application user that said MiniFB user does not exist.<br/>
                  </p1>
                  <Image fluid="true" img src={MiniFB_SearchUser_pic}></Image><br/><br/>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion><br/>
            <h4>Code Snippets</h4>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }