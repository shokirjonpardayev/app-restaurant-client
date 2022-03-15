import React from 'react';
import {Link} from "react-router-dom";

export const MealsItem = (props) => {
    const {idMeal, strMeal, strMealThumb} = props;
    return (
        <div className="col-12 col-md-6 col-lg-4 col-xl-4 mt-3">
            <div className="card">
                <img src={strMealThumb} alt={strMeal}/>
                <div className="card-body">
                    <h4 style={{height: "87px"}}>{strMeal}</h4>
                    <Link to={`/meals/${idMeal}`} className="btn btn-outline-success rounded-0">Watch Recipe</Link>
                </div>
            </div>
        </div>
    );
};