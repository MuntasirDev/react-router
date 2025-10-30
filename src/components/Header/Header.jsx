import React from 'react';
import { Link } from "react-router";
import './Header.css';

const Header = () => {
    return (
        <div>
            <h3>This is Header</h3>
            <nav className=''>
                <Link to="/src/components/Home">Home</Link>
                <Link to="/src/components/Laptops">Laptops</Link>
                <Link to="/src/components/Mobiles">Mobiles</Link>
               
                
 
            </nav>
        </div>
    );
};

export default Header;