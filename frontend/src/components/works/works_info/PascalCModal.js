import React from 'react';
import {Modal, Button, Image} from 'react-bootstrap';
import '../Works.css'
import if_pic from '../../../images/PascalC/pascal_C_IF.PNG'
import while_pic from '../../../images/PascalC/pascal_C_WHILE.PNG'
import case_pic from '../../../images/PascalC/pascal_C_CASE.PNG'
import grammar_pic from '../../../images/PascalC/pascal_C_Grammar.PNG'
import tree_pic from '../../../images/PascalC/pascal_C_Tree.PNG'

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
            Pascal-C
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{height: "75vh", overflowY: "auto"}}>
          <h5 style={{textDecoration: "underline"}}>Description</h5>
          <p1>
            &emsp;Pascal-C is a programming language that aims to make Pascal familiar to people who learned programming through Java, C, C++, and other languages with similar syntax. 
            IF, WHILE, CASE, and assignment statments were converted to resemble the same statements in C style programming languages. Some other syntax remained the same through
            as it seemed more simple to understand such as writing to screen. As a special feature to the language, a built in random number generator was added and a swap command
            that allows a swap of two variables in a single line. This project was written in Java by Christopher Tran, Jiajian Liu, and Scott Dawson from SJSU's Fall 2020 Concepts 
            of Compiler Design class, the language was compiled with ANTLR and utilizes Top-Down Recursive Descent parsing techniques.<br/><br/>
          </p1>
          <h5 style={{textDecoration: "underline"}}>Example Statements</h5>
          <h6 style={{fontWeight: "bold"}}>IF statement</h6>
          <p1>
            IF (expression) {"{statement}"}; <br/>
            IF (expression) {"{statement}"} ELSE {"{statement}"};<br/>
          </p1>
          <Image img src={if_pic}></Image><br/><br/>
          <h6 style={{fontWeight: "bold"}}>WHILE statement</h6>
          <p1>
            WHILE (expression) {"{statement}"}; <br/>
          </p1>
          <Image img src={while_pic}></Image> <br/><br/>
          <h6 style={{fontWeight: "bold"}}>CASE statement</h6>
          <p1>
            SWITCH (integer) <br/>
            &emsp; {"{"} <br/>
            &emsp;&emsp; CASE: statement; <br/>
            &emsp;&emsp; CASE: statement; <br/>
            &emsp;&emsp;&emsp;&emsp;&emsp; statement; <br/>
            &emsp;&emsp;&emsp;&emsp;&emsp; statement; <br/>
            &emsp;&emsp;{". . ."}<br/>
          </p1>
          <Image img src={case_pic}></Image><br/><br/>
          <h5 style={{textDecoration: "underline"}}>Example Jasmin Assembly Code</h5>
          <h6 style={{fontWeight: "bold"}}>Random Number Generator</h6>
          <p1>
            Generates a random number from 0-99 and stores it into an integer variable
            i, the number generator uses the java Random class.<br/><br/>
          </p1>
          <p1 style={{fontFamily: "Fira Code"}}>
          ; <br/>
          ; 009 rng(i,100) <br/>
          ; <br/>
          &emsp;&emsp;new java/util/Random <br/>
          &emsp;&emsp;dup <br/>
          &emsp;&emsp;invokespecial java/util/Random.{"<init>"}()V <br/>
          &emsp;&emsp;astore_3 <br/>
          &emsp;&emsp;aload_3 <br/>
          &emsp;&emsp;sipush 100 <br/>
          &emsp;&emsp;invokevirtual java/util/Random.nextInt(I)I <br/>
          &emsp;&emsp;putstatic Test/i I <br/>
          </p1><br/>
          <h6 style={{fontWeight: "bold"}}>Swap Statement</h6>
          <p1>
            Pushes the value of a and then b onto the stack then puts the b value
            on the stack into a, then it puts the a value on the stack into b.<br/><br/>
          </p1>
          <p1 style={{fontFamily: "Fira Code"}}>
          ;<br/>
          ; 019 aswapb<br/>
          ;<br/>
          &emsp;&emsp;getstatic swapper/a F<br/>
          &emsp;&emsp;getstatic swapper/b F<br/>
          &emsp;&emsp;putstatic swapper/a F<br/>
          &emsp;&emsp;putstatic swapper/b F<br/>
          </p1><br/><br/>
          <h5 style={{textDecoration: "underline"}}>Grammar Snippet</h5>
          <Image img src={grammar_pic}></Image><br/><br/>
          <h5 style={{textDecoration: "underline"}}>Parse Tree Snippet</h5>
          <Image img src={tree_pic}></Image><br/><br/>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }