import React, { useState } from "react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import Greeting from "./Greeting";

function LoginControl(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);  //false값은 로그아웃 상태를 의미

    const handleLogout = () => {
        setIsLoggedIn(false)
    }

    const handleLogin = () => {
        setIsLoggedIn(true)
    }

    // let button;

    // if(isLoggedIn){
    //     button = <LogoutButton onClick={handleLogout} />
    // }else {
    //     button = <LoginButton onClick={handleLogin} />
    // }

    return (
        <div><Greeting isLoggedIn={isLoggedIn} />{
            isLoggedIn ? <LogoutButton onClick={handleLogout} /> :
            <LoginButton onClick={handleLogin} />
        }</div>
    )
}

export default LoginControl