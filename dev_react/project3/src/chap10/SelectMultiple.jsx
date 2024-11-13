import React, { useState } from 'react'

function SelectMultiple() {
    const [values, setValues] = useState([])

    const handleChange = (e) =>{
        // 배열명.map()
        const selectedOptions = [...e.target.selectedOptions].map((option)=>(option.value))
        setValues(selectedOptions)
    }

    const handleSubmit = (e) =>{

        alert(`좋아하는 과일: ${values.join(',')}`)
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            좋아하는 과일:
            <select multiple={true} value={values} onChange={handleChange}>
                <option value="apple">사과</option>
                <option value="banana">바나나</option>
                <option value="grape">포도</option>
                <option value="watermelon">수박</option>
            </select>
            <button type="submit">제출</button>
            </form>
            <div>
                <h4>선택한 과일:</h4>
                <ul>
                    {values.map((fruit) => (<li key={fruit}>{fruit}</li>))}
                </ul>
            </div>
        </div>
    )
}

export default SelectMultiple