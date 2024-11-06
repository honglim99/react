import React, { useState, useRef } from 'react'

function Toolbar2(props) {
    const { isLoggedIn, onClickLogin, onClickLogout } = props;
    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");
    const inputRef = useRef()
    
    const correctId = "admin";
    const correctPwd = "1234";

    const handleLogin = ()=> {
        if (id === correctId && pwd === correctPwd){
            onClickLogin();
        }else {
            alert("아이디와 비밀번호가 일치하지 않습니다.")
            setId("");
            setPwd("");
        }
    }

    const handleLogout = ()=> {
        setId(""); // ID 입력창 초기화
        setPwd("");
        onClickLogout()
    }

    const styles = {
        wrapper: {
            padding: 16,
            display: "flex",
            flexDirection: "row",
            borderBottom: "1px solid grey"
        },
        greeting: {
            marginRight: 8,
        },
    };
    
    return (
      <div style={styles.wrapper}>
        {isLoggedIn && <span style={styles.greeting}>환영합니다!</span>}
        {isLoggedIn ? (
            <button onClick={handleLogout}>로그아웃</button>
        ) : (
            <div>
                <input ref={inputRef} type='text' value={id} onChange = {(e)=>setId(e.target.value)}
                    placeholder="아이디"/>
                <input type='text' value={pwd} onChange = {(e)=>setPwd(e.target.value)}
                placeholder="비밀번호"/>
                <button onClick={handleLogin}>로그인</button>
            </div>
        )}
      </div>
    )
}

export default Toolbar2