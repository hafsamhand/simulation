import React, { useState } from 'react'

function FullForm() {
    const [fullname, setFullName] = useState("John Doe");
    const [isChecked, setIsChecked] = useState("checked");
    const [ville, setVille] = useState("")
    const [show, setShow] = useState(false)

    function handleChecked(event) {

        setIsChecked(event.target.checked);
    }
    const handleSubmit = (event) => {
        setShow(true)
        event.preventDefault();
    }

    return (
        <div>
            <div>
                {
                show ?
                    <div>
                        {ville}
                        <h3>fullname: {fullname} </h3>
                        <p>{isChecked ? 'Checkbox is checked!' : 'Checkbox is unchecked!'}</p>

                    </div> : <div></div>
                
            }
            </div>

            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={fullname} onChange={(e) => setFullName(e.target.value)} />
                {/* <input type="submit" value="Envoyer les données"/> */}
                <label>
                    <input type="checkbox" checked={isChecked} onChange={(e) => handleChecked(e)} />
                    Accept Terms and Conditions
                </label>

                <label>Ville</label>
                <select name="ville" onChange={(e) => setVille(e.target.value)}>
                    <option value="tanger">Tanger</option>
                    <option value="tetouan">Tetouan</option>
                </select>
                <input type="submit" value="Envoyerr" />
            </form>


        </div>
    );
}


export default FullForm






