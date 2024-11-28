import React from 'react'
import "./TodoItem.css"

function TodoItem({id, content, isDone, createdDate, onUpdate, onDelete }) {
    const onChangeCheckbox = () => {
        //해당 체크박스 상태 변경
        onUpdate(id);
    }

    const onClickDelete = () => {
        //해당 todo 항목 삭제
        onDelete(id);
    }

    return (
        <div className="TodoItem">
            <div className="checkbox_col">
                <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
            </div>
            <div className="title_col">{content}</div>
            <div className="date_col">
                {new Date(createdDate).toLocaleDateString()}
            </div>
            <div className="btn_col">
                <button onClick={onClickDelete}>삭제</button>
            </div>
        </div>
    )
}

export default TodoItem