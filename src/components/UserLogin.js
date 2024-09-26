import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import './UserLogin.css';

function UserView() {

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
                    <Form.Control type="text" className="userInfoInput"/>
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm="2" className='userInfoLabel'>Password:</Form.Label>
                  <Col sm="10">
                    <Form.Control type="password" className="userInfoInput"/>
                  </Col>
                </Form.Group>
              </>
          </div>
        </Modal.Body>
        <br></br>
        <Modal.Footer className="user-footer">
          <a href='/images'>
            <Button className="userInfoButton">Guardar Cambios</Button>
          </a>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UserView;