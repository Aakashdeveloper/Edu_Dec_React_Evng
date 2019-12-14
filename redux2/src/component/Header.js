import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <header>
            <div>
                <Link to="/">ReduX News APP</Link>
            </div>
        </header>
    )
}

export default Header;