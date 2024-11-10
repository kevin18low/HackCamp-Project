import React from "react";
import { useState, useRef } from "react";

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
        <div id="upload">
            <div id="image">
                {image ? <img id="uploaded" src={URL.createObjectURL(image)} alt=""></img> : <img id="blank" src="./images/blank.jpg" alt=""></img>}
            </div>
            <input type="file" ref={inputRef} name="image" onChange={handleImage} style={{display: "none"}}/>
            <button id="submit" onClick={handleClick}>Join the scrap!</button>
        </div>
    )
}

export default Upload;