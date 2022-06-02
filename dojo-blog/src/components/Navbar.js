import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="Navbar">
            <h1 className="heading">The Dojo Blog</h1>
            <div className="links">
                <div className="home">
                    <Link to="/home">Home</Link>
                </div>
                <div className="create">
                    <Link to="/create">New Blog</Link>
                </div>
            </div>
        </nav>
  )
}
    
export default Navbar;
