import React, { useState } from 'react'
import BoilingVerdict from './BoilingVerdict'
import TemperatureInput from './TemperatureInput'

function toCelsius(fahrenheit) {   //화씨를 섭씨로 변경하는 함수
    return ((fahrenheit- 32) * 5) / 9;
    }
    function toFahrenheit(celsius) {    
    //섭씨를 화씨로 변경하는 함수
    return (celsius * 9) / 5 + 32;
    }
    function tryConvert(temperature, convert) {  //온도와 변경함수 전달 받음
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
     //숫자가 아닐 경우 빈문자열의 리턴 
    return "";
    }
    const output = convert(input);   //변환함수 호출
    const rounded = Math.round(output * 1000) / 1000;   //소수점 이하 3자리까지만 표시
    return rounded.toString();
    }

function Calculator() {
    const [temperature, setTemperature] = useState('')
    const [scale, setScale] = useState('c')

    // 화씨가 입력되었는지 판단 -> 섭씨 변경함수 호출
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    // 섭씨가 입력되었는지 판단 -> 화씨 변경함수 호출
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    // 화씨 입력 컴포넌트 호출
    // 섭씨 입력 컴포넌트 호출
    const onchangeFahrenheit = (temperature)=> {
        setTemperature(temperature);
        setScale('f');
    }

    const onchangeCelsius = (temperature)=> {
        setTemperature(temperature);
        setScale('c');
    }

    return (
        <div>
            <TemperatureInput 
                scale='f'
                temperature={fahrenheit}
                onTemperatureChange={onchangeFahrenheit /* 화씨 온도 입력창을 바꾸어주는 함수 정의 */}
                />
            <TemperatureInput 
                scale='c'
                temperature={celsius}
                onTemperatureChange={onchangeCelsius /* 화씨 온도 입력창을 바꾸어주는 함수 정의 */}
                />

            <BoilingVerdict celsius={parseFloat(temperature)} />
        </div>
    )
}

export default Calculator