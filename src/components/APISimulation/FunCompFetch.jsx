import { useState, useEffect } from "react";

function ExempleFetchFun() {
  const [users, setUsers] = useState([])

  function getUserst() {
    const getData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        return users;
    };
    getData().then((users) => setUsers(users));
  }

  useEffect(() => {
    getUserst();
  }, []);


    return (
      <div>
        <ul>
          {users.map((item) => (
            <li key={item.id}>{item.username}</li>
          ))}
        </ul>
      </div>
    );
  
}

export default ExempleFetchFun;
