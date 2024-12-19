import React from 'react';
import Foos from './Foos';

const FoodContainer = () => {
    
    const style = {
        listStyle: "none"
    }

    const foods = [
        {
            id :1,
            name : '샐러드'
        },
        {
            id :2,
            name : '치킨'
        },
        {
            id :3,
            name : '피자'
        },
        {
            id :4,
            name : '스테이크'
        }
    ]

    const foodList = foods.map((food, i , foods) => <Foos style={style} foods={foods} key={i} />)

    console.log(foodList);

    return (
        <div>
            {foodList}
        </div>
    );
};

export default FoodContainer;