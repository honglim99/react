import React, { useState } from 'react';
 
function Toolbar3(props) {

    const {isLoggedIn, onClickLogin, onClickLogout} = props;
    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");
 
    //correctId = 'admin', correctPwd='1234' 예시

    const correctId = "admin";
    const correctPwd = "1234";
    const handleLogin = () => {
        if (id === correctId && pwd === correctPwd) {
            console.log('handleLogin')
            onClickLogin();
        } else {
            alert("아이디와 비밀번호가 일치하지 않습니다!!!");
            setId("");
            setPwd("");
        }
    };

    const handleLogout = () => {
        setId("");
        setPwd("");
        onClickLogout();
    };
    return (
    <div style={styles.wrapper}>

            {isLoggedIn ? (
    <div>
    <span style={styles.greeting}>{id}님 환영합니다!</span>
    <button onClick={handleLogout}>로그아웃</button>
    </div>
    ) : (
    <div>
        <input
            type = "text"
            placeholder="아이디"
            value={id}
            onChange={(e)=>setId(e.target.value)}
        />
        <input
            type = "password"
            placeholder='비밀번호'
            value={pwd}
            onChange={(e)=>setPwd(e.target.value)}
        />
        <button onClick={handleLogin}>로그인</button>
    </div>
        )}
    </div>

  );

}
 
const styles = {
    wrapper: {
        padding: 16,
        display: "flex",
        flexDirection: "row",
        borderBottom: "1px solid grey",
    },

    greeting: {
        marginRight: 8,
    },
};

export default Toolbar3;