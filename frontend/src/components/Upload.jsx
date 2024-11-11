import React from "react";
import { useState, useRef } from "react";
import placeholder from "../images/blank.svg";

function Upload() {
    const inputRef = useRef(null);
    const [image, setImage] = useState("");
    
    const handleImage = (img) => {
        setImage(img.target.files[0]);
    }

    const handleClick = () => {
        inputRef.current.click();
    }

    return (
        <div id="upload" className="label">
            <div id="image">
                {image ? <img id="uploaded" src={URL.createObjectURL(image)} alt=""></img> : <img id="blank" src={placeholder} alt=""></img>}
            </div>
            <input type="file" ref={inputRef} name="image" onChange={handleImage} style={{display: "none"}}/>
            <button id="submit" className="button" onClick={handleClick}>Join the scrap!</button>
        </div>
    )
}

export default Upload;