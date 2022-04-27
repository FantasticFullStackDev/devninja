import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { makeStyles } from '@mui/styles';

const Temp = (props) => {
    //----- Global States -----
    // const leftnavDisplay = useSelector(getLeftnavDisplay);

    //----- Dispatch -----
    const dispatch = useDispatch();

    //----- Internal States -----
    const [temp, setTemp] = useState('temp');

    //----- Navigate -----
    let navigate = useNavigate();

    //----- Lifecycle Events -----
    useEffect(() => {
        // TODO
    }, [])

    const classes = useStyles();

    //----- Render -----
    return (
        <React.Fragment>
            <h1 className={classes.title}>Temp</h1>
        </React.Fragment>
    );
}

const useStyles = makeStyles((theme) => ({
    title: {
        color: 'red'
    }
}));

export default Temp;