import NavBar from "../components/NavBar";
import Page from "../components/Page";
import logo from "../images/shuttershare.svg";
import addPeople from "../images/add.svg";
import profile from "../images/profile.svg";

function Home() {
    return (
        <div>
            <div id="header">
                <img className="header-icon" src={addPeople} alt=""></img>
                <img id="logo" src={logo} alt=""></img>
                <img className="header-icon" src={profile} alt=""></img>
            </div>
            <Page />
            <NavBar />
        </div>
    )
}

export default Home;