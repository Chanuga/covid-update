import React from 'react'
import { Card } from 'react-bootstrap';
import covidImg from '../Images/covid.jpg'

function TotalPcrTestingCount({total_pcr_testing_count}) {
    return (
        <div>
            <Card style={{ width: '18rem', margin: '30px' }}>
                <Card.Img variant="top" src={covidImg} />
                <Card.Body>
                    <Card.Title>Total PCR tests done in Sri Lanka {total_pcr_testing_count}</Card.Title>
                    <Card.Text>
                        There are {total_pcr_testing_count} PCR tests done up to now in Sri Lanka.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default TotalPcrTestingCount
