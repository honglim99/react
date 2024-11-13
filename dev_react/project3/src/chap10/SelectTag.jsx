import React, { useState } from 'react'

function SelectTag() {
    const [value, setValue] = useState('grape')

    const handleChange = (e) =>{
        setValue(e.target.value)
    }

    const handleSubmit = (e) =>{
        alert(`좋아하는 과일: ${value}`)
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            좋아하는 과일:
            <select value={value} onChange={handleChange}>
                <option value="apple">사과</option>
                <option value="banana">바나나</option>
                <option value="grape">포도</option>
                <option value="watermelon">수박</option>
            </select>
            <button type="submit">제출</button>
            </form>
        </div>
    )
}

export default SelectTag