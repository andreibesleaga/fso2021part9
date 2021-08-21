import React from 'react';
import {CoursePartsProps} from './types';
import Header from './Header';
import Content from './Content';
import Total from './Total';

const App = () => {
  const courseName  = "Half Stack application development"; 
  const courseParts : CoursePartsProps[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14
    }
  ];

  return (
    <div>      
      <Header courseName={courseName} />
      <Content courseParts={courseParts} />
      <Total courseParts={courseParts} />
    </div>
  );
};

export default App;