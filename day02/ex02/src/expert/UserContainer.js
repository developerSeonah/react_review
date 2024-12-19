import React from 'react';
import Users from './Users';

const UserContainer = () => {
    
    const Users = [
        {
            id:1,
            name : '박선아',
            email : 'salj3895@gmail.com'
        },
        {
            id:2,
            name : '짱구',
            email : 'zzangu@gmail.com'
        },
        {
            id:3,
            name : '짱아',
            email : 'zzangah@gmail.com'
        },
        {
            id:4,
            name : '장보고',
            email : 'jbg4567@gmail.com'
        }
    ]

    //화면쪽에 컨테이너로만 유저의 이름과 이메일 출력
    const userList = <Users Users={Users}/>
    return (
        <div>
            {userList}
        </div>
    );
};

export default UserContainer;