import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import NavBar from '../components/NavBar';
import Logo from '../components/Logo';
import { useNavigate } from "react-router-dom";
import cover1 from "../images/cover1.png";
import cover2 from "../images/cover2.png";
import cover3 from "../images/cover3.png";
import cover4 from "../images/cover4.png";

function CreateStyle() {
    const navigate = useNavigate();
    function submit() {
        navigate("/book");
    }
    function toggleHighlight(event) {
        event.target.classList.toggle("highlight");
        console.log(event.target);
        console.log("click");
    }
  return (
    <div id="book-style">
        <Logo />
        <h2 className='style-header'>Pick a Book Style</h2>
      <Row>
        <Col xs={6} md={3}>
          <Image className="book-img" src={cover1} rounded onClick={toggleHighlight}/>
        </Col>
        <Col xs={6} md={3}>
          <Image className="book-img" src={cover2} rounded />
        </Col>
        <Col xs={6} md={3}>
          <Image className="book-img" src={cover3} rounded />
        </Col>
        <Col xs={6} md={3}>
          <Image className="book-img" src={cover4} rounded />
        </Col>
      </Row>

      <button id="create-button" className="button" onClick={submit}>Create</button>
      <NavBar />
    </div>
  );
}

export default CreateStyle;