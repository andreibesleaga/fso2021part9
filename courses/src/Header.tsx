import React from 'react';

// eslint-disable-next-line no-undef
const Header = ({courseName} : {courseName: string}) : JSX.Element => {
     return <h1>{courseName}</h1>;
};

export default Header;