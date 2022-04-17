import React from 'react';
import {Modal, Button, Image} from 'react-bootstrap';
import './works_info.css';

import tid_download_pic from '../../../images/TID/tid_download.PNG';
import tid_gui_download_pic from '../../../images/TID/tid_gui_download.PNG';

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
            Image Downloader
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{height: "75vh", overflowY: "auto"}}>
        <h4>Description</h4>
            <p1>
                &emsp;A Python application utilizing the Tweepy API to download images from a Twitter account. This application pulls the 10 most recent
                tweets and gives the user an option to download the image contained within a specified tweet. At the moment it is built to work with a
                Twitter account that is only used for image upload so every tweet in the timeline has images. The application takes in Twitter developer
                information from a tokens.json file that includes api_Key, api_Key_Secret, bearer_Token, access_Token, and access_Token_Secret attributes.
                <br/><br/>
            </p1>
            <h4 style={{textDecoration: "underline"}}>The Application</h4>
            <h5 style={{fontWeight: "bold"}}>Console-Based</h5>
            <p1>
                &emsp;The console based interface gives the user a list of the 10 most recent tweets from their timeline. Time of tweet, media ID, media URL, and
                associated hashtags are given to help identify which tweet each image comes from. When a tweet is selected from the list, a text prompt repeats 
                the info about the selected tweet. The prompt then asks the user to confirm if they would like to download the media from the selected tweet. If
                confirmed, the image is downloaded and the image name, image source, and save location and printed out for the user. The user can then press any
                key to end the program. If the user declines the download then the application will prompt the user that the operation was declined and the user
                can press any key to end the program.
                <br/>
            </p1>
            <Image fluid="true" img src={tid_download_pic} style={{border: "solid", borderColor: "black", borderWidth: "2px"}}></Image><br/><br/>
            <h5 style={{fontWeight: "bold"}}>GUI-Based</h5>
            <p1>
                &emsp;The GUI based version employs TKinter to build the GUI. Much like the console based version, the GUI version also displays the 10 most recent
                tweets from a users timeline. Each tweet is displayed in a frame that is titled with the media ID which also provides a large thumbnail, tweet
                information about the image, and a download button. Unlike the GUI version with a hardcoded save location for myself, the GUI version uses the winreg
                python module to locate the download folder on Windows and uses it as the save location for downloads.
                <br/>
            </p1>
            <Image fluid="true" img src={tid_gui_download_pic} style={{border: "solid", borderColor: "black", borderWidth: "2px"}}></Image><br/><br/>
            <h5 style={{fontWeight: "bold"}}>Limitations</h5>
            <p1>
                &emsp;At the moment the application works specifically with timelines that only have tweets with media in them, particularly images. The save location
                of the image is also hardcoded for myself (console-based version), a different user would have to change the save location within the source file themselves. 
                The application also only works to download media from the developer account identified within the tokens.json file at the moment. The application works for 
                my paricular use case but can be expanded upon to be more general in future iterations.
            </p1>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }