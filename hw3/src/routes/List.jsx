import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Country({ country }) {
  const [name] = useState(country.name);
  const [officialLanguages] = useState(country.official_languages);
  const [population] = useState(country.population);
  const [gdpInBillions] = useState(country.gdp_billions);
  const [flagPNG] = useState(country.flag_png);
  const [flagAltText, setFlagAltText] = useState(country.flag_alt);
  if (undefined === flagAltText) {
    setFlagAltText(
      'Suitable alternative text was not provided for this image.'
    );
  }

  return (
    <Col className="d-flex justify-content-center mt-5 px-3">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={flagPNG} alt={flagAltText} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <div className="mt-3">
              {officialLanguages.length < 2 ? (
                <strong>Official Language: </strong>
              ) : (
                <strong>Official Languages: </strong>
              )}
              {officialLanguages.join(', ')}
            </div>
            <div className="mt-3">
              <strong>Population: </strong>
              {population.toLocaleString()}
            </div>
            <div className="mt-3">
              <strong>GDP: </strong>
              {gdpInBillions ? `${gdpInBillions} billion` : 'n/a'}
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default function List({ data }) {
  console.log(data);
  return (
    <>
      <Container className="mb-5">
        <Row>
          {data.map((country) => (
            <Country key={country.id} country={country} />
          ))}
        </Row>
      </Container>
    </>
  );
}
