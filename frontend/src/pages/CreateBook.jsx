import NavBar from "../components/NavBar";
import Logo from "../components/Logo";
import Selector from "../components/Selector";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import friend1 from "../images/friend1.png";
import friend2 from "../images/friend2.png";
import friend3 from "../images/friend3.png";
import friend4 from "../images/friend4.png";
import friend5 from "../images/friend5.png";

function Create() {
    const [selectedChoice, setChoice] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const navigate = useNavigate();

    const handleSelect = (value) => {
        setChoice(value);
    }

    function changeTitle(event) {
        setTitle(event.target.value);
    }

    function changeDesc(event) {
        setDesc(event.target.value);
    }

    function submit() {
        console.log(selectedChoice);
        console.log(title);
        console.log(desc);
        navigate("/createstyle");
    }

    function handleClick(event) {
        console.log(event.target.name);
    }

    return (
        <div id="book-style">
            <Logo />
            <h1 className="label">Let's Scrap!</h1>
            <div id="details">
                <h6>Pick a Name For Your Scrap</h6>
                <input type="text" onChange={changeTitle}/>
                <h6>Pick a Book Type</h6>
                <Selector choice={selectedChoice} handleClick={handleSelect}/>
                <h6>Enter a Book Description</h6>
                <input type="text" onChange={changeDesc}/>
                <h6>Invite Friends</h6>
                <div id="friends">
                    <div>
                        <img name="Jane" className="friend-img" src={friend1} alt="" onClick={handleClick}></img>
                        <h6>Jane</h6>
                    </div>
                    <div>
                        <img name="Kevin" className="friend-img" src={friend2} alt="" onClick={handleClick}></img>
                        <h6>Kevin</h6>
                    </div>
                    <div>
                        <img name="Avril" className="friend-img" src={friend3} alt="" onClick={handleClick}></img>
                        <h6>Avril</h6>
                    </div>
                    <div>
                        <img name="Sam" className="friend-img" src={friend4} alt="" onClick={handleClick}></img>
                        <h6>Sam</h6>
                    </div>
                    <div>
                        <img name="John" className="friend-img" src={friend5} alt="" onClick={handleClick}></img>
                        <h6>John</h6>
                    </div>
                </div>
                <NavBar />
                <br />
                <button className="button" onClick={submit}>OK</button>
            </div>
        </div>
    )
}

export default Create;