import React from 'react';
import User from './User';

const Users = ({Users}) => {
    
    return (
        <div>
            {Users.map((user)=><User user={user}/>)}
        </div>
    );
};

export default Users;