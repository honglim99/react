import React from "react";
import Menu from "./Menu";

function App2(props){
    return(
        <div className="App2">
            <Menu name="아메리카노" price={3000}></Menu>
            <Menu name="카페라떼" price={3500}></Menu>
        </div>
    )
}

export default App2;