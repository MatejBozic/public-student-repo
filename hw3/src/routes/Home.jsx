import './Home.css';
import Image from 'react-bootstrap/Image';
import ImageOfSouthAmerica from '../images/SouthAmerica.jpg';

export default function Home() {
  return (
    <>
      <div id="Welcome" className="d-flex justify-content-center m-4 py-4">
        <h1>Welcome</h1>
      </div>
      <div className="d-flex justify-content-center text-center m-3">
        <p>
          In this application, you will find the official languages, population,
          and GDP of various South American countries.
        </p>
      </div>

      <div
        className="d-flex justify-content-center"
        style={{ height: '25rem' }}
      >
        <Image src={ImageOfSouthAmerica} alt={'Map of South America'} />
      </div>
    </>
  );
}
