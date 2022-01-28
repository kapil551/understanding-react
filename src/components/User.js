import React from "react";

const User = (props) => {
  
    console.log(props);

    return (
        <div>
        <h1> Welcome {props.name ? props.name : "default"} a.k.a. { props.heroName ? props.heroName : "Invisible Man/Woman"} </h1>
        <> { props.children } </>
        </div>
    );
};

export default User;
