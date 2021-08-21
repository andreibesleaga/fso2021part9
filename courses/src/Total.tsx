import React from 'react';
import {CoursePartsProps} from './types';

// eslint-disable-next-line no-undef
const Total = ({courseParts} : {courseParts: CoursePartsProps[]}) : JSX.Element => {
    const exercises = courseParts.map(part=>{return part.exerciseCount;});
    const total = exercises.reduce((sum, current)=>sum+current);                
    return  ( <p><b>Number of exercises {total} </b></p> );
};

export default Total;