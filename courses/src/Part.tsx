import React from 'react';
import {CoursePart} from './types';
  
// eslint-disable-next-line no-undef
const Part = ({part} : {part: CoursePart}) : JSX.Element => {
    switch(part.type) {
        case 'normal': return ( <p key="part.name">Course part name:{part.name}, description:{part.description}, exercises:{part.exerciseCount} </p> );
        case 'submission': return ( <p key="part.name">Course part name:{part.name}, description:{part.description}, link:{part.exerciseSubmissionLink}, exercises:{part.exerciseCount} </p> );
        case 'groupProject': return ( <p key="part.name">Course part name:{part.name}, group project count:{part.groupProjectCount}, exercises:{part.exerciseCount} </p> );
        case 'special': {
            const requirements = part.requirements.join();
            return ( <p key="part.name">Course part name:{part.name}, exercises:{part.exerciseCount}, requirements:{requirements} </p> );
        }
    }
};

export default Part;