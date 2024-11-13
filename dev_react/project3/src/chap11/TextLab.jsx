import React from 'react'

function TextLab() {
  return (
    <div>
        <form>
            <label>이름:
                <input type="text" value={value} onChange={handleNameChange} />
            </label>
            <label>성별:
                <select value={value} onChange={handleSelectChange}>
                    <option value="m">남자</option>
                    <option value="f">여자</option>
                </select>
            </label>
        </form>
    </div>
  )
}

export default TextLab