import React from 'react'
import { Card } from 'react-bootstrap';
import covidImg from '../Images/covid.jpg'

function GlobalNewCases({global_new_cases}) {
    return (
        <div>
            <Card style={{ width: '18rem', margin: '30px' }}>
                <Card.Img variant="top" src={covidImg} />
                <Card.Body>
                    <Card.Title>New patients found globally {global_new_cases}</Card.Title>
                    <Card.Text>
                        There are {global_new_cases} new patients found globally.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default GlobalNewCases
