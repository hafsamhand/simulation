import React, { useState } from 'react';

const App = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div>
            <label>
                <input type="checkbox" checked={isChecked} onChange={handleChange} />
                Accept Terms and Conditions
            </label>
            <p>{isChecked ? 'Checkbox is checked!' : 'Checkbox is unchecked!'}</p>
        </div>
    );
};

export default App;
