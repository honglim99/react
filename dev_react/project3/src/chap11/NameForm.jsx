import React, { useState } from 'react'

function NameForm() {
    const [value, setValue] = useState('')
    const [valueTa, setValueTa] = useState('요청사항을 입력해 주세요')

    const handleChange = (e) =>{
        setValue(e.target.value.toUpperCase())
    }

    const handleSubmit = (e) =>{
        alert(`사용자이름: ${value}`)
        e.preventDefault();
    }

    const handleTaChange = (e) =>{
        setValueTa(e.target.valuea)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>이름:
                    <input type="text" value={value} onChange={handleChange} />
                </label>
                <label>요청사항:
                    <textarea value={valueTa} onChange={handleTaChange} />
                </label>
                <button type="submit">제출</button>
            </form>
        </div>
    )
}

export default NameForm