import React, {useState} from 'react'

function BookFun()
{
   const [name, setName] = useState("Imane");
   const [filiere, setFiliere] = useState("FS");
   return (
   <div>
      <h1>Name of the Author: {name} -- filière {filiere} </h1>
      <button onClick={() => setName('Salma')}>update</button>
      <button onClick={() => setFiliere('Mobile')}>update Filière</button>
   </div>
   );
}

export default BookFun