import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import './UserView.css';

function UserView() {

  let userImageUrl = 'https://picsum.photos/350';
  const [imageUrl, setImageUrl] = useState('');
  const [user, setUser] = useState({ username: "loading...", full_name: "loading...", short_description: "loading...", url: "loading...", posts_number: "loading...", followers_number: "loading...", followed_number: "loading..." });
  const mockarooUrl = 'https://my.api.mockaroo.com/parcial.json?key=92422330';

  useEffect(() => {
    fetch(userImageUrl)
      .then(response => response.url)
      .then(url => setImageUrl(url))
      .catch(error => console.error('Error fetching image:', error));
    fetch(mockarooUrl)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error fetching user info:', error));
  }, []);

  const [isEditable, setIsEditable] = useState(Math.random() < 0.5);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  return (
    <div className="user-view-page">
      <Modal show={true} id="userModal" className="userViewModal">
        <Modal.Body>
          <div className="UserView-Image" id="UserViewImage-div">
            <img src={imageUrl} alt="User" id="userView-image" />
          </div>
          <div className="UserView-Info">
            {isEditable ? (
              <>
                <Form.Group as={Row}>
                  <Form.Label column sm="2" className='userInfoLabel'>Nombre de Usuario:</Form.Label>
                  <Col sm="10">
                    <Form.Control type="text" value={user.username} className="userInfoInput" onChange={handleInputChange} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm="2" className='userInfoLabel'>Nombre Completo:</Form.Label>
                  <Col sm="10">
                    <Form.Control type="text" value={user.full_name} className="userInfoInput" onChange={handleInputChange} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm="2" className='userInfoLabel'>Descripción del perfil:</Form.Label>
                  <Col sm="10">
                    <Form.Control type="text" value={user.short_description} className="userInfoInput" onChange={handleInputChange} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm="2" className='userInfoLabel'>URL página personal:</Form.Label>
                  <Col sm="10">
                    <Form.Control type="text" value={user.url} className="userInfoInput" onChange={handleInputChange} />
                  </Col>
                </Form.Group>
              </>
            ) : (
              <>
                <Form.Group as={Row}>
                  <Form.Label column sm="2" className='userInfoLabel'>Nombre de Usuario:</Form.Label>
                  <Col sm="10">
                    <Form.Label column sm="2" className='userInfoDisplay'>{user.username}</Form.Label>
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm="2" className='userInfoLabel'>Nombre Completo:</Form.Label>
                  <Col sm="10">
                    <Form.Label column sm="2" className='userInfoDisplay'>{user.full_name}</Form.Label>
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm="2" className='userInfoLabel'>Descripción del perfil:</Form.Label>
                  <Col sm="10">
                    <Form.Label column sm="2" className='userInfoDisplay'>{user.short_description}</Form.Label>
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm="2" className='userInfoLabel'>URL página personal:</Form.Label>
                  <Col sm="10">
                    <Form.Label column sm="2" className='userInfoDisplay' >{user.url}</Form.Label>
                  </Col>
                </Form.Group>
              </>
            )}
          </div>
        </Modal.Body>
        <br></br>
        <Modal.Footer>
          <a href='/'>
            <Button variant="secondary" className="userInfoButton">Guardar Cambios</Button>
          </a>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UserView;