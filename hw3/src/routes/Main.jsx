import './Home.css';
import Image from 'react-bootstrap/Image';
import ImageOfSouthAmerica from '../images/SouthAmerica.jpg';

export default function Home() {
  return (
    <>
      <div id="Welcome" className="d-flex justify-content-center m-4 py-4">
        <h1>Welcome</h1>
      </div>
      <div
        className="d-flex justify-content-center"
        style={{ height: '25rem' }}
      >
        <Image src={ImageOfSouthAmerica} />
      </div>
    </>
  );
}
