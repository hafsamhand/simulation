import React from "react";
import ExempleFetch from "./classCompFetch";
import ExempleFetchFun from "./FunCompFetch";
import ExempleAxios from "./classCompAxios";
import ExempleAxiosFun from "./FunCompAxios";


function ExempleAPI() {
    return (
      <div className="container">
        <ExempleFetch />
         ------------------------
        <ExempleFetchFun />
        ******************************
        <ExempleAxios/>
        -----------------------
        <ExempleAxiosFun />
      </div>
    );
  }
  
  export default ExempleAPI;
  