import React from 'react'
import { Container, Row, Col, Navbar, Button, FormControl, Form, Nav, Card } from 'react-bootstrap';
import covidImg from '../Images/covid.jpg'

function LocalRecovered({local_recovered}) {
    return (
        <div>
            <Card style={{ width: '18rem', margin: '30px' }}>
                <Card.Img variant="top" src={covidImg} />
                <Card.Body>
                    <Card.Title>Total Patients Recoverd in Sri Lanka {local_recovered}</Card.Title>
                    <Card.Text>
                        Currently there are {local_recovered} patients are recovered in Sri Lanka.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default LocalRecovered
