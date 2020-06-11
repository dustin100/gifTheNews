import React from 'react';

const Header = ({title, subHeading}) => {
    return (
        <header className='headerComp'>
            <h1>{title}</h1>
            <h3>{subHeading}</h3>
        </header>
    )
}

export default Header;