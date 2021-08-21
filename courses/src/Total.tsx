import React from 'react';
import {CoursePart} from './types';

// eslint-disable-next-line no-undef
const Total = ({courseParts} : {courseParts: CoursePart[]}) : JSX.Element => {
    const exercises = courseParts.map(part=>{return part.exerciseCount;});
    const total = exercises.reduce((sum, current)=>sum+current);                
    return  ( <p><b>Number of exercises {total} </b></p> );
};

export default Total;