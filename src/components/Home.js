import { Card, Container, Row, Col, Image, Modal, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Home.css';

function Home() {

    const { t } = useTranslation();
    const [user, setUser] = useState({ full_name: "loading...", best_run_time: "loading...", best_swim_time: "loading...", best_cycling_time: "loading...", user_image: "loading..." });
    const [showModal, setShowModal] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const mockarooUrl = 'https://my.api.mockaroo.com/parcial.json?key=92422330';

    useEffect(() => {
        fetch(mockarooUrl)
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(error => console.error('Error fetching user info:', error));
    }, []);

    const handleCardClick = (card) => {
        setSelectedCard(card);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedCard(null);
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    const generateRandomDistance = () => {
        return (Math.random() * (50 - 5) + 5).toFixed(2);
    };

    const generateRandomDuration = () => {
        const hours = Math.floor(Math.random() * 5);
        const minutes = Math.floor(Math.random() * 60);
        return `${hours}h ${minutes < 10 ? '0' : ''}${minutes}m`;
    };

    const cardTypes = [
        { type: t('Cycling'), title: t('CyclingSession'), description: t('Cartagena'), image: 'https://assets.telegraphindia.com/telegraph/2021/Aug/1629635220_cycling.jpg' },
        { type: t('Running'), title: t('RunningSession'), description: t('Cartagena'), image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6d8IT4MJfKp7hTGhDEJhOC7fC2_RDVALhApimR0pk7I6cEskw' },
        { type: t('Swimming'), title: t('SwimmingSession'), description: t('Cartagena'), image: 'https://images.unsplash.com/photo-1534289692684-c02577d5560d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
    ];

    return (
        <div className="Home">
            <div className='HomeBody'>
                <Container>
                    <Row>
                        {cardTypes.map((cardType, index) => (
                            <Col key={index} md={4}>
                                <h1 className="text-center">{cardType.type}</h1>
                                <Container>
                                    <Row>
                                        {[...Array(5)].map((_, rowIndex) => (
                                            <React.Fragment key={rowIndex}>
                                                <Col md={6}>
                                                    <Card className="text-white mb-4" style={{ height: '25vh', width: '100%' }} onClick={() => handleCardClick({
                                                        ...cardType,
                                                        distance: generateRandomDistance(),
                                                        duration: generateRandomDuration()
                                                    })}>
                                                        <Card.Img src={cardType.image} alt="Card image" style={{ height: '100%', objectFit: 'cover' }} />
                                                        <Card.ImgOverlay>
                                                            <Card.Title style={{ fontSize: "0.6em" }}>{cardType.title}</Card.Title>
                                                            <Card.Text style={{ fontSize: "0.6em" }}>{cardType.description}</Card.Text>
                                                            <Card.Text style={{ fontSize: "0.6em" }}>{t('Distance')}: {generateRandomDistance()} km</Card.Text>
                                                            <Card.Text style={{ fontSize: "0.6em" }}>{t('Duration')}: {generateRandomDuration()}</Card.Text>
                                                        </Card.ImgOverlay>
                                                    </Card>
                                                </Col>
                                                <Col md={6}>
                                                    <Card className="text-white mb-4" style={{ height: '25vh', width: '100%' }} onClick={() => handleCardClick({
                                                        ...cardType,
                                                        distance: generateRandomDistance(),
                                                        duration: generateRandomDuration()
                                                    })}>
                                                        <Card.Img src={cardType.image} alt="Card image" style={{ height: '100%', objectFit: 'cover' }} />
                                                        <Card.ImgOverlay>
                                                            <Card.Title style={{ fontSize: "0.6em" }}>{cardType.title}</Card.Title>
                                                            <Card.Text style={{ fontSize: "0.6em" }}>{cardType.description}</Card.Text>
                                                            <Card.Text style={{ fontSize: "0.6em" }}>{t('Distance')}: {generateRandomDistance()} km</Card.Text>
                                                            <Card.Text style={{ fontSize: "0.6em" }}>{t('Duration')}: {generateRandomDuration()}</Card.Text>
                                                        </Card.ImgOverlay>
                                                    </Card>
                                                </Col>
                                            </React.Fragment>
                                        ))}
                                    </Row>
                                </Container>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
            {selectedCard && (
                <Modal show={showModal} onHide={handleCloseModal}  className='rounded-0'>
                    <Modal.Body  className='rounded-0'>
                        <Card className="text-white mb-4" style={{ height: '25vh', width: '100%' }}>
                            <Card.Img src={selectedCard.image} alt="Card image" style={{ height: '100%', objectFit: 'cover' }} />
                            <Card.ImgOverlay>
                                <Card.Title style={{ fontSize: "1em" }}>{selectedCard.title}</Card.Title>
                                <Card.Text style={{ fontSize: "1em" }}>{selectedCard.description}</Card.Text>
                                <Card.Text style={{ fontSize: "1em" }}>{t('Distance')}: {generateRandomDistance()} km</Card.Text>
                                <Card.Text style={{ fontSize: "1em" }}>{t('Duration')}: {generateRandomDuration()}</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Modal.Body>
                    <Modal.Footer className="border-0">
                        <Button variant="primary" onClick={handleCloseModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
            <div className='HomeFooter'>
                <Container style={{ backgroundColor: '#01616b', width: '100%' }} className='HomeFooterContainer' >
                    <Row className="justify-content-center align-items-center UserFooterRow">
                        <Col className="justify-content-center align-items-center UserImageDiv" style={{ flex: '0 0 15%', maxWidth: '15%' }}>
                            <Image
                                src={user.user_image}
                                alt="Imagen Usuario"
                                className='UserImage' />
                        </Col>
                        <Col style={{ flex: '0 0 20%', width: '20%' }} className='no-padding-margin'>
                            <h1 className="UserName">{user.full_name}</h1>
                        </Col>
                        <Col style={{ flex: '0 0 50%', width: '50%' }}>
                            <Container>
                                <Row>
                                    <Col className="icon-text-pair">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="40" height="40">
                                            <path fill="white" d="M320 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM125.7 175.5c9.9-9.9 23.4-15.5 37.5-15.5c1.9 0 3.8 .1 5.6 .3L137.6 254c-9.3 28 1.7 58.8 26.8 74.5l86.2 53.9-25.4 88.8c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l28.7-100.4c5.9-20.6-2.6-42.6-20.7-53.9L238 299l30.9-82.4 5.1 12.3C289 264.7 323.9 288 362.7 288l21.3 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-21.3 0c-12.9 0-24.6-7.8-29.5-19.7l-6.3-15c-14.6-35.1-44.1-61.9-80.5-73.1l-48.7-15c-11.1-3.4-22.7-5.2-34.4-5.2c-31 0-60.8 12.3-82.7 34.3L57.4 153.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l23.1-23.1zM91.2 352L32 352c-17.7 0-32 14.3-32 32s14.3 32 32 32l69.6 0c19 0 36.2-11.2 43.9-28.5L157 361.6l-9.5-6c-17.5-10.9-30.5-26.8-37.9-44.9L91.2 352z" />
                                        </svg>
                                        <h1 className="time">{formatTime(user.best_run_time)}</h1>
                                    </Col>
                                    <Col className="icon-text-pair">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="40" height="40">
                                            <path fill="white" d="M309.5 178.4L447.9 297.1c-1.6 .9-3.2 2-4.8 3c-18 12.4-40.1 20.3-59.2 20.3c-19.6 0-40.8-7.7-59.2-20.3c-22.1-15.5-51.6-15.5-73.7 0c-17.1 11.8-38 20.3-59.2 20.3c-10.1 0-21.1-2.2-31.9-6.2C163.1 193.2 262.2 96 384 96l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-26.9 0-52.3 6.6-74.5 18.4zM160 160A64 64 0 1 1 32 160a64 64 0 1 1 128 0zM306.5 325.9C329 341.4 356.5 352 384 352c26.9 0 55.4-10.8 77.4-26.1c0 0 0 0 0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 405.7 417 416 384 416c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7c0 0 0 0 0 0C136.7 341.2 165.1 352 192 352c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z" />
                                        </svg>
                                        <h1 className="time">{formatTime(user.best_swim_time)}</h1>
                                    </Col>
                                    <Col className="icon-text-pair">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="40" height="40">
                                            <path fill="white" d="M312 32c-13.3 0-24 10.7-24 24s10.7 24 24 24l25.7 0 34.6 64-149.4 0-27.4-38C191 99.7 183.7 96 176 96l-56 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l43.7 0 22.1 30.7-26.6 53.1c-10-2.5-20.5-3.8-31.2-3.8C57.3 224 0 281.3 0 352s57.3 128 128 128c65.3 0 119.1-48.9 127-112l49 0c8.5 0 16.3-4.5 20.7-11.8l84.8-143.5 21.7 40.1C402.4 276.3 384 312 384 352c0 70.7 57.3 128 128 128s128-57.3 128-128s-57.3-128-128-128c-13.5 0-26.5 2.1-38.7 6L375.4 48.8C369.8 38.4 359 32 347.2 32L312 32zM458.6 303.7l32.3 59.7c6.3 11.7 20.9 16 32.5 9.7s16-20.9 9.7-32.5l-32.3-59.7c3.6-.6 7.4-.9 11.2-.9c39.8 0 72 32.2 72 72s-32.2 72-72 72s-72-32.2-72-72c0-18.6 7-35.5 18.6-48.3zM133.2 368l65 0c-7.3 32.1-36 56-70.2 56c-39.8 0-72-32.2-72-72s32.2-72 72-72c1.7 0 3.4 .1 5.1 .2l-24.2 48.5c-9 18.1 4.1 39.4 24.3 39.4zm33.7-48l50.7-101.3 72.9 101.2-.1 .1-123.5 0zm90.6-128l108.5 0L317 274.8 257.4 192z" />
                                        </svg>
                                        <h1 className="time">{formatTime(user.best_cycling_time)}</h1>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Home;