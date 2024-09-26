import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import './UserLogin.css';
import { useNavigate } from "react-router-dom";

function UserView() {

  let navigate = useNavigate(); 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function goToImages(){
    console.log(email);
    console.log(password);
    console.log(email);
    console.log(password);
    if(email=="usertest@gmailcom"){
      if(password=="banana"){
        let path = '/images'; 
        navigate(path);
      }
    }  

  }

  const handleEmail = (event) => {

    setEmail(event.target.value);

  };

  const handlePassword = (event) => {

    setPassword(event.target.value);

  };

  return (
    <div className="user-view-page">
      <Modal show={true} id="userModal" className="userLoginModal">
        <Modal.Header>
          <p><b>Log in</b></p>
        </Modal.Header>
        <Modal.Body>
          <div className="UserView-Info">
              <>
                <Form.Group as={Row}>
                  <Form.Label column sm="2" className='userInfoLabel'>Email:</Form.Label>
                  <Col sm="10">
                    <Form.Control type="text" value={email} onChange={handleEmail} className="userInfoInput"/>
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm="2"   className='userInfoLabel'>Password:</Form.Label>
                  <Col sm="10">
                    <Form.Control type="password" value={password} onChange={handlePassword} className="userInfoInput"/>
                  </Col>
                </Form.Group>
              </>
          </div>
        </Modal.Body>
        <br></br>
        <Modal.Footer className="user-footer">            
          <Button className="userInfoButton" onClick={goToImages}>Guardar Cambios</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UserView;