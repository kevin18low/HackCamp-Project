import NavBar from "../components/NavBar";
import addPeople from "../images/add.svg";
import profile from "../images/profile.svg";
import Logo from "../components/Logo";
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import recent1 from "../images/recent1.png";
import recent2 from "../images/recent2.png";
import recent3 from "../images/recent3.png";
import share1 from "../images/share1.png";
import share2 from "../images/share2.png";
import share3 from "../images/share3.png";
import share4 from "../images/share4.png";

function Home() {
    return (
        <div id="home-page">
            <div id="header">
                <img className="header-icon" src={addPeople} alt=""></img>
                <Logo />
                <img className="header-icon" src={profile} alt=""></img>
            </div>
            <h5 className='home-nav'>RECENTLY &gt;</h5>
            <Row>
                <Col xs={6} md={3}>
                <Image className="book-img" src={recent1} rounded/>
                <h6 className="caption">Silly Goofies</h6>                
                </Col>
                <Col xs={6} md={3}>
                <Image className="book-img" src={recent2} rounded />
                <h6 className="caption">Munch!!</h6>
                </Col>
                <Col xs={6} md={3}>
                <Image className="book-img" src={recent3} rounded />
                <h6 className="caption">Fam</h6>
                </Col>
                <Col xs={6} md={3}>
                <Image className="book-img" src={recent1} rounded />
                <h6 className="caption">Hello</h6>
                </Col>
            </Row>
            <h5 className='home-nav'>SHARED SCRAPBOOKS &gt;</h5>
            <Row>
                <Col xs={6} md={3}>
                <Image className="book-img" src={share1} rounded/>
                <h6 className="caption">Social!</h6>
                </Col>
                <Col xs={6} md={3}>
                <Image className="book-img" src={share2} rounded />
                <h6 className="caption">Day 1s</h6>
                </Col>
                <Col xs={6} md={3}>
                <Image className="book-img" src={share3} rounded />
                <h6 className="caption">Homelands</h6>
                </Col>
                <Col xs={6} md={3}>
                <Image className="book-img" src={share4} rounded />
                <h6 className="caption">Yes yes yes!!!</h6>
                </Col>
            </Row>
            <NavBar />
        </div>
    )
}

export default Home;