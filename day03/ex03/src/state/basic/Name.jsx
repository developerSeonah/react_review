import React, { useState } from 'react';

const Name = () => {
    const [result,setResult ] = useState("초기값");
    const viewState = (e) => {
        setResult(e.target.value)
    }

    return (
        <div>
            <p>{result}</p>
            <input onChange={viewState}/>  
        </div>
    );
};

export default Name;