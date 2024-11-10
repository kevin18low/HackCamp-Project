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
        <div>
            <div id="image" onClick={handleClick}>
                {image ? <img id="uploaded" src={URL.createObjectURL(image)} alt=""></img> : <img id="blank" src="" alt=""></img>}
            </div>
            
            <input type="file" ref={inputRef} name="image" onChange={handleImage} style={{ display: "none"}}/>
        </div>
    )
}

export default Upload;