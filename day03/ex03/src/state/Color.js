import React, { useState } from 'react';

const Color = () => {

    const [result, setResult] = useState("");
    const [color,setColor] = useState("");

    const onChange = (e) => {
        let value = e.target.value;
        if(value === "핑크색"){
            setColor("black")
        }
        return setResult(value)
    }

    const redButton = () => {
        setColor("red")
    }
    const blueButton = () => {
        setColor("blue")
    }

    return (
        <div>
            <p style={{color}}>{result}</p>
            <input text="text"  onChange={onChange} />
            <button onClick={redButton}>빨강색 버튼</button>
            <button onClick={blueButton}>파랑색 버튼</button>
        </div>
    );
};

export default Color;