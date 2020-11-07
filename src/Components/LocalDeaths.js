import React from 'react'
import { Card } from 'react-bootstrap';
import covidImg from '../Images/covid.jpg'

function LocalDeaths({local_deaths}) {
    return (
        <div>
            <Card style={{ width: '18rem', margin: '30px' }}>
                <Card.Img variant="top" src={covidImg} />
                <Card.Body>
                    <Card.Title>Total Deaths in Sri Lanka {local_deaths}</Card.Title>
                    <Card.Text>
                        There are {local_deaths} People dead due to the Covid-19 virous in Sri Lanka.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default LocalDeaths
