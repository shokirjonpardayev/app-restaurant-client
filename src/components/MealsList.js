import React from 'react';
import {MealsItem} from "./MealsItem";

export const MealsList = ({meals}) => {
    return (
        <div className="container">
            <div className="row">
                {meals.map(meal => (
                    <MealsItem key={meal.idMeal} {...meal} />
                ))}
            </div>
        </div>
    );
};