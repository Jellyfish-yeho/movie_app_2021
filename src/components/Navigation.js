import React from "react";
import {Link} from 'react-router-dom';
import "./Navigation.css"

function Navigation(){
    //link to 를 통해 props에 데이터를 전달해 줄 수 있다.
    //로그인 정보가 있을 경우 회원정보, 로그아웃 출력
    const isLogin = false;
    if(isLogin){ //로그인했을 경우
      return (
        <div>
            <div className="nav">
                <Link to="/">Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/movies'>Movies</Link>
            </div>
            <div>
                <ul>
                    <li><Link to='/'>회원 정보</Link></li>
                    <li><Link to='/'>Log Out</Link></li>                    
                </ul>
            </div>
        </div>
    )  
    }else{ //로그인하지 않았을 경우
        return(
            <div>
                <div className="nav">
                    <Link to="/">Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/movies'>Movies</Link>
                </div>
                <div>
                    <ul>
                        <li><button><Link to='/'>Log In</Link></button></li>
                        <li><button><Link to='/'>Sign Up</Link></button></li>
                    </ul>
                </div>
            </div>
        );
    }
    
}

export default Navigation;