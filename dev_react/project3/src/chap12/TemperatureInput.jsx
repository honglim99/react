import React from 'react'

const scaleName= {
  f: "화씨",
  c: "섭씨",
}

function TemperatureInput(props) {
    const handleChange = (e) =>{
      props.onTemperatureChange(e.target.value)
    }

    return (
        <fieldset>
            <legend>온도 입력(단위: {scaleName[props.scale]})</legend>
            <input type='text' value={props.temperature} onChange={handleChange} />
        </fieldset>
    )
}

export default TemperatureInput