import React, {useState} from "react"
import BookTitle from "./BookTitle"

function BookEdit(props) {

    const [title, setTitle] = useState("");

    return (
        <form>
          <BookTitle onTitleChange={(e) => setTitle(e.target.value)} title={title} />
        </form>
      )
  }
  

export default BookEdit





