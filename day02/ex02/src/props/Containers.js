import React from 'react';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';

const Containers = () => {

    //const name= "박선아"; 
    //const age =20;
    //const style = {
    //   color: "red"
    //}
    const users = {
        name: "박선아",
        age : 20,
        phone : "010-6564-0568",
        address : "서울시 성북구 서경로"
    }
    return (
            <>
                {/* <Component1 name={name} age={age} /> */}
                {/*<Component2 style={style}/> */}
                <Component3 users = {users}/>
            </>
    );
};

export default Containers;