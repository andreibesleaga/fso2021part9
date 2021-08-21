import React from 'react';
import {CoursePartsProps} from './types';
  
// eslint-disable-next-line no-undef
const Content = ({courseParts} : {courseParts: CoursePartsProps[]}) : JSX.Element => {  
        const parts = courseParts.map(part=>{return <p key="part.name">{part.name} {part.exerciseCount} </p>;});
        return  ( <div> {parts} </div> );
};

export default Content;