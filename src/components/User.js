import React from "react";

    // destructuring props 
const User = ({ name, heroName, children }) => {
  
    console.log(name, heroName);

    return (
        <div>
        <h1> Welcome {name ? name : "default"} a.k.a. { heroName ? heroName : "Invisible Man/Woman"} </h1>
        <> { children } </>
        </div>
    );
};

export default User;
