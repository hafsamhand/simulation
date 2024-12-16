import React from 'react';

const List = () => {
    // Exemple de données
    const users = [
        { id: 1, name: 'Ali' },
        { id: 2, name: 'Amina' },
        { id: 3, name: 'Karim' },
        { id: 4, name: 'Aya' },
        { id: 5, name: 'Nisrin' },
    ];

    const shout = (a) => {
        alert("Bonjour " + a.user.name);
    }

    return (
        <div>
            <h1>Liste des utilisateurs</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}
                    <button onClick={() => shout({user})}>Clique ici !!</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;
