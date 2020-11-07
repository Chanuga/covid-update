import React from 'react'
import { Card } from 'react-bootstrap';
import covidImg from '../Images/covid.jpg'

function GlobalRecovered({global_recovered}) {
    return (
        <div>
            <Card style={{ width: '18rem', margin: '30px' }}>
                <Card.Img variant="top" src={covidImg} />
                <Card.Body>
                    <Card.Title>Total Patients Recoverd all over the World {global_recovered}</Card.Title>
                    <Card.Text>
                        Currently there are {global_recovered} patients are recovered all over the World.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default GlobalRecovered
