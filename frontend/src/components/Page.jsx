import React from "react";
import Upload from "./Upload";

function Page() {
    let date = new Date().toDateString();

    return (
        <div>
            <div>
                <h1 id="date">{date}</h1>
            </div>
            <div>
                <Upload />
            </div>
        </div>
    )
}

export default Page;