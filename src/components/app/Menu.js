import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

const Menu = () => {
    return (
        <div>
            <Link to="/antoha">
                <button>Antoha</button>
            </Link>
            <Link to="/leha">
                <button>Leha</button>
            </Link>
        </div>
    );
};

export default Menu;