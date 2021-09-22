import React from "react";
import {Link} from 'react-router-dom';
import "./Navigation.css"

function Navigation(){
    //link to 를 통해 props에 데이터를 전달해 줄 수 있다.
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to='/about'>About</Link>
        </div>
    )
}

export default Navigation;