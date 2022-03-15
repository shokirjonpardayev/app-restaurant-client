import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getFilterCategory} from "../tools/api";
import {Loader} from "../components/loader/Loader";
import {MealsList} from "../components/MealsList";

export const Category = () => {
    const {name} = useParams();
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        getFilterCategory(name).then(data => setMeals(data.meals));
    }, [name])

    return (
        <>
            {!meals.length ? (
                <Loader/>
            ) : (
                <MealsList meals={meals}/>
            )}
        </>
    );
};