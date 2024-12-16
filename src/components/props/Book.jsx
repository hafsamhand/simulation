import React, { useState } from "react"
import BookEdit from "./BookEdit";

function Book() {

    const [title, setTitle] = useState("");
    return (
        <div>
            <h1>Register</h1>
            <BookEdit title={title} />
            <form action="">
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </form>
        </div>
    )
}

export default Book