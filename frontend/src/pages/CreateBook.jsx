import NavBar from "../components/NavBar";
import Logo from "../components/Logo";
import Selector from "../components/Selector";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
                <NavBar />
                <br />
                <button className="button" onClick={submit}>OK</button>
            </div>
        </div>
    )
}

export default Create;