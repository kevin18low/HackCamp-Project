import NavBar from "../components/NavBar";
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
            <h1 className="label">Let's Scrap!</h1>
            <h2>Pick a Name For Your Scrap</h2>
            <input type="text" onChange={changeTitle}/>
            <h2>Pick a Book Length</h2>
            <Selector choice={selectedChoice} handleClick={handleSelect}/>
            <h2>Enter a Book Description</h2>
            <input type="text" onChange={changeDesc}/>
            <NavBar />
            <br />
            <button onClick={submit}>OK</button>
        </div>
    )
}

export default Create;