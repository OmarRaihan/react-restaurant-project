
import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Restaurant.css'

const Restaurant = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);

    useEffect(() =>{

        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    }, [searchText])

    const searchFood = e => {
        setSearchText(e.target.value);
    }

    return (
        <div>
            <h2 className='text-2xl font-semibold text-slate-800'>Find the Food</h2>
            <input onChange={searchFood} className='border-2 border-rose-500 w-96 py-1' type="text" name="" id=""/>
            <br />
            <h3>Result found: {meals.length}</h3>
            <div className='grid grid-cols-4 mx-10 my-12 gap-10'>
            {
                meals.map(meal => <Meal
                key={meal.idMeal}
                meal={meal}
                ></Meal>)
            }
            </div>
        </div>
    );
};

export default Restaurant;