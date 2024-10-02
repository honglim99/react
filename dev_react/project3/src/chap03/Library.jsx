// 리액트 컴포넌트 만드는 과정
// 1. React 컴포넌트 불러오기(import)
import React from "react";
// Book 컴포넌트를 불러와서 서용하기
import Book from "./Book";


function Library(props) {
    return (
        <div>
            <Book name="처음 만난 파이썬" numOfPage={300} />
            <Book name="처음 만난 AWS" numOfPage={400} />
            <Book name="처음 만난 리액트" numOfPage={500} />
        </div>
    )
}

export default Library