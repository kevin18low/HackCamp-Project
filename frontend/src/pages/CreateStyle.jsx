import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import NavBar from '../components/NavBar';
import { useNavigate } from "react-router-dom";

function CreateStyle() {
    const navigate = useNavigate();
    function submit() {
        navigate("/home");
    }
  return (
    <div id="book-style">
        <h2>Pick a Book Style</h2>
      <Row>
        <Col xs={6} md={4}>
          <Image className="book-img" src="holder.js/171x180" rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image className="book-img" src="holder.js/171x180" rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image className="book-img" src="holder.js/171x180" rounded />
        </Col>
      </Row>

      <h2>Pick a Page Style</h2>
      <Row>
        <Col xs={6} md={4}>
          <Image className="book-img" src="holder.js/171x180" rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image className="book-img" src="holder.js/171x180" rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image className="book-img" src="holder.js/171x180" rounded />
        </Col>
      </Row>

      <button onClick={submit}>Create</button>
      <NavBar />
    </div>
  );
}

export default CreateStyle;