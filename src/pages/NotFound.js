import React from 'react';
import {Link} from "react-router-dom";

export const NotFound = () => {
    return (
        <div className="text-center">
            <h1 className="my-5">Page not found <b>404 Error.</b></h1>
            <Link to="/">Back to Home.</Link>
        </div>
    );
};