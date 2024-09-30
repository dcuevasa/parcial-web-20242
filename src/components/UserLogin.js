import React, { useState } from 'react';
import { Modal, Button, Form, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import './UserLogin.css';

function UserView() {

  let navigate = useNavigate();

  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function goToImages() {
    if (validarCorreo(email) && password.length === 8) {
      let path = '/home';
      navigate(path);
    }
    else {
      if (!validarCorreo(email)) alert("Correo no valido");
      if (password.length !== 8) alert("Contraseña no valida");
    }
  }

  function validarCorreo(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
  }

  const handleEmail = (event) => {

    setEmail(event.target.value);

  };

  const handlePassword = (event) => {

    setPassword(event.target.value);

  };

  return (
    <div className="UserLogin">
      <Modal show={true} className="UserLoginModal" centered>
        <Modal.Header className="border-0 UserLoginModalHeader">
          <p><b>{t('LogIn')}</b></p>
        </Modal.Header>
        <Modal.Body className='rounded-0 UserLoginModalBody'>
          <div>
            <>
              <Form.Group>
                <Form.Label column sm="2">{t('Email')}</Form.Label>
                <Col sm="10" className="w-100">
                  <Form.Control type="text" value={email} onChange={handleEmail} />
                </Col>
              </Form.Group>
              <Form.Group>
                <Form.Label column sm="2">{t('Password')}</Form.Label>
                <Col sm="10" className="w-100">
                  <Form.Control type="password" value={password} onChange={handlePassword} />
                </Col>
              </Form.Group>
            </>
          </div>
        </Modal.Body>
        <br></br>
        <Modal.Footer className='justify-content-start border-0 UserLoginModalFooter'>
          <Button variant="primary" onClick={goToImages} className='rounded-1'>{t('SaveChanges')}</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UserView;