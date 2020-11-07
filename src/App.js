import React ,{useState, useEffect} from 'react';
import LocalCases from './Components/LocalCases'
import GlobalCases from './Components/GlobalCases'
import { Container, Navbar, Card } from 'react-bootstrap';

function App() {

  const [statistics, setStatistics] = useState([]);

  useEffect( () => {
    getStats();
  }, []);

  const getStats = async () => {
    const response = await fetch(`https://hpb.health.gov.lk/api/get-current-statistical`);
    const data = await response.json();
    setStatistics(data.data);
  }

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Navbar.Brand >COVID-UPDATE</Navbar.Brand>
      </Navbar>
      <Container style={{display:'flex', justifyContent:'center', paddingTop:'30px'}}>
        <Card.Title>Updated Time {statistics.update_date_time}</Card.Title>
      </Container>
      <Container style={{display:'flex', justifyContent:'center', paddingTop:'30px'}}>
        <Card.Title>Local Cases</Card.Title>
      </Container>
      <LocalCases statistics={statistics}/>
      <Container style={{display:'flex', justifyContent:'center', paddingTop:'30px'}}>
        <Card.Title>International Cases</Card.Title>
      </Container>
      <GlobalCases statistics={statistics}/>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
        {/* <Navbar.Brand style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent:'center' }}>COVID-UPDATE</Navbar.Brand> */}
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent:'center' }}></div>
      </Navbar>

    </>
  );
}

export default App;
