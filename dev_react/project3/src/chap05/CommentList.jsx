import React from "react";
import Comment from "./Comment";

function CommentList(props) {
    return (
        <div>
            <Comment name={"홍길동"} comment={"안녕하세요, 첫 프롭스 코드입니다"} />
            <Comment name={"황진이"} comment={"리액트 재미있어요."} />
            <Comment name={"윤홍림"} comment={"컴포넌트 구조 만들기!"} />
        </div>
    );
}
export default CommentList;
