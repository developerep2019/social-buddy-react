import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from '@material-ui/core'
import './pageNotFound.css'

const PageNotFound = () => {
    return (
        <div className="notFoundMain">
            <h1>404! 😢</h1>
            <h3>Oops!! The Page You Are Finding is No Longer Exist On The Server.</h3>
            <Link to="/">
            <Button variant="contained" color="primary">Go Back</Button>
            </Link>
        </div>
    );
};

export default PageNotFound;