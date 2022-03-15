import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import {getMealId} from "../tools/api";
import {Loader} from "../components/loader/Loader";

export const Recipe = () => {
    const [recipe, setRecipe] = useState([]);
    const {id} = useParams();
    const {goBack} = useHistory();

    useEffect(() => {
        getMealId(id).then(data => setRecipe(data.meals[0]))
    }, [])
    return (
        <div className="container">
            <button type="button" className="btn btn-outline-success rounded-0" onClick={goBack}>Go Back</button>
            <div className="row">
                {!recipe.idMeal ? (
                    <Loader/>
                ) : (
                    <div className="col-12 mt-3">
                        <div className="card">
                            <img src={recipe.strMealThumb} alt={recipe.strMeal}/>
                            <div className="card-body">
                                <h1>{recipe.strMeal}</h1>
                                <h3><b>Category: </b>{recipe.strCategory}</h3>
                                {recipe.strArea ? <h6><b>Area:</b> {recipe.strArea}</h6> : null}
                                <p>{recipe.strInstructions}</p>

                                <table className="table table-hover table-striped">
                                    <thead>
                                    <tr>
                                        <th>Ingredient</th>
                                        <th>Measure</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {Object.keys(recipe).map(key => {
                                        if (key.includes("Ingredient") && recipe[key]){
                                            return (
                                                <tr>
                                                    <td>{recipe[key]}</td>
                                                    <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                                                </tr>
                                            )
                                        }
                                    })}
                                    </tbody>
                                </table>
                                {recipe.strYoutube ? (
                                    <div>
                                        <h5>Video Recipe</h5>
                                        <iframe src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen></iframe>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};