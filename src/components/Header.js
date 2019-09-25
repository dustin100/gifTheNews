import React from 'react';

const Header = (props) => {
    return (
        <header className='headerComp'>
            <h1>{props.title}</h1>
            <h3>{props.subHeading}</h3>
        </header>
    )
}

export default Header;