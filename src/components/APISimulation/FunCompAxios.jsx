import { useState, useEffect } from "react";
import axios from 'axios';

function ExempleAxiosFun() {
  const [users, setUsers] = useState([])

  function getUserst() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        setUsers(res.data);
        console.log(res.data);
        
      })
   .catch((error) => {
    console.error(error);
    });
  }

  useEffect(() => {
    getUserst();
  }, []);


    return (
      <div>
        <ul>
          {users.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  
}

export default ExempleAxiosFun;
