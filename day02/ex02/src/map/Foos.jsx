import React from 'react';

const Foos = ({foods}) => {
    const {id, name} = foods; 
    return (
       <div>
            {id}, {name}
       </div>
    );
};

export default Foos;