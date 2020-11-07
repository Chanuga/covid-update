import React from 'react'
import { Card } from 'react-bootstrap';
import covidImg from '../Images/covid.jpg'

function GlobalDeaths({global_deaths}) {
    return (
        <div>
            <Card style={{ width: '18rem', margin: '30px' }}>
                <Card.Img variant="top" src={covidImg} />
                <Card.Body>
                    <Card.Title>Total Deaths all over the World {global_deaths}</Card.Title>
                    <Card.Text>
                        There are {global_deaths} people died due to the Covid-19 all over the World.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default GlobalDeaths
