import React from 'react'
import { Card } from 'react-bootstrap';
import covidImg from '../Images/covid.jpg'


function TotalLocalCases({local_total_cases}) {
    return (
        <div>
            <Card style={{ width: '18rem', margin: '30px' }}>
                <Card.Img variant="top" src={covidImg} />
                <Card.Body>
                    <Card.Title>Total Patients Found From Sri Lanka {local_total_cases}</Card.Title>
                    <Card.Text>
                        Currently there are {local_total_cases} patients found from Sri Lanka.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default TotalLocalCases
