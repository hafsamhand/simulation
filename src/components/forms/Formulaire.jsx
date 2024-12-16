import React, { useState } from 'react'

function RegisterForm() {
    const [fullname, setFullName] = useState("John Doe");
    const [isChecked, setIsChecked] = useState("checked");
    const [ville, setVille] = useState("")

    function handleChecked(event) {
      
        setIsChecked(event.target.checked);
    }
    return (
        <div>
            {ville}
            <h1>Register</h1>
            <h3>fullname: {fullname} </h3>
            <form action="">
                <input type="text" value={fullname} onChange={(e) => setFullName(e.target.value)} />
                {/* <input type="submit" value="Envoyer les données"/> */}
                <label>
                    <input type="checkbox" checked={isChecked} onChange={(e) => handleChecked(e)} />
                    Accept Terms and Conditions
                </label>
                <p>{isChecked ? 'Checkbox is checked!' : 'Checkbox is unchecked!'}</p>

                <label>Ville</label>
                <select name="ville" onChange={(e) => setVille(e.target.value)}>
                    <option value="tanger">Tanger</option>
                    <option value="tetouan">Tetouan</option></select>
                <input type="submit" value="Envoyer" />
            </form>

            
        </div>
    );
}


export default RegisterForm



  
  

