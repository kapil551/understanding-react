import React from "react";

const WithoutJSX = () => {
  
    return ( 
      
        React.createElement(
            "div",
            { id: "container", className: "root-container" },
            React.createElement(
            "h1",
            { className: "child-item" },
            "Namaste 🙏 without JSX"
            )
        )
    )
};

export default WithoutJSX;
