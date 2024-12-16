import React from "react";
import { useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router";

export function MyAppNav() {
  let navigate = useNavigate();
  const goHome = () => {
    console.log('navigate');
    
    navigate("/");
  };
  const goOne = () => {
    navigate("/todos/3");
  };
  
  return (
    <>
      Hello
      <ul>
        <li>
          <button onClick={goHome}>Accueil </button>
        </li>
        <li>
          <button onClick={goOne}>One todo </button>
        </li>
        <li>
          <Link to="/api">Exemples API </Link>
        </li>
        <li>
          <Link to="/hooks">Exemples hooks </Link>
        </li>
        <li>
          <Link to="/formulaire">Exemples Formulaire </Link>
        </li>
      </ul>
    </>
  );
}

export default MyAppNav;