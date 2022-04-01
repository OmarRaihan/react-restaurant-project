
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MealDetail = () => {
    const {details} = useParams();
    const [detail, setDetail] = useState([]);

    useEffect(() =>{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${details}`;
        console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => setDetail(data.meals));
    }, []);

    return (
        <div>
            {/* <h2>Meal Details: {details}</h2> */}
            {/* <p>Name: {detail.strMeal}</p> */}
            {/* <p>Instructions: {detail.strInstructions}</p> */}
            {/* <p>{strInstructions.slice(0, 80)}</p>  */}
        </div>
    );
};

export default MealDetail;