import React from 'react';
import Part from './Part';
import {CoursePart} from './types';

// eslint-disable-next-line no-undef
const Content = ({courseParts} : {courseParts: CoursePart[]}) : JSX.Element => {  
        const parts = courseParts.map(part=>{ return (<Part key="part.name" part={part} /> ); });
        return  ( <div> {parts} </div> );
};

export default Content;