import React from 'react';

const Component3 = ({props}) => {
    //const {users} = props;
    const {name,age, address,phone} = users;
    return (
        <div>
            <p>이름: {name}</p>
            <p>나이: {age}</p>
            <p>전화번호: {phone}</p>
            <p>주소: {address}</p>
        </div>
    );
};

export default Component3;