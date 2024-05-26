import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import List from './routes/List';
import Population from './routes/Population';
import Custom from './routes/GDP';
import axios from 'axios';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get(
      'https://cs464p564-frontend-api.vercel.app/api/countries'
    );
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className="d-block">
          <Nav fill className="justify-content-center me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link eventKey="link-1" href="/list">
              List
            </Nav.Link>
            <Nav.Link eventKey="link-2" href="/population">
              Population
            </Nav.Link>
            <Nav.Link eventKey="link-3" href="/custom">
              Custom
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List data={data} />} />
        <Route path="/population" element={<Population data={data} />} />
        <Route path="/custom" element={<Custom data={data} />} />
      </Routes>
    </>
  );
}

export default App;
