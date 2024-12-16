import { useParams } from "react-router-dom";
import useFetch from "../hooksTest/useFetch";

const OneTodo = () => {
    let { todoId } = useParams();
    let url = "https://jsonplaceholder.typicode.com/todos/"+todoId
    const [data] = useFetch(url);
    
    return (
        <>
            {data ? <div>Todo id: {data.id}  <br />Todo Title : {data.title}</div> : "Not Found"}
        </>
    );
};

export default OneTodo