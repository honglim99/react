import { useState, useRef } from "react";
import "./TodoEditor.css";

const TodoEditor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const inputRef = useRef();

  const onChangeContent = (e) => {
     //content 상태값 갱신
  };
  const onSubmit = () => {  //추가 버튼 누르면
      // content 값을 부모 컴포넌트의 todo 리스트에 추가
      setContent("");
  };
  const onKeyDown = (e) => {  //<Enter>키 누르면
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기 ✏ </h4>
      <div className="editor_wrapper">
        <input
          ref=
          value=
          onChange=
          onKeyDown=
          placeholder="새로운 Todo..."
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
};
export default TodoEditor;
