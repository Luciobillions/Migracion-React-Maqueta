import React from 'react';
import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';

function Header({ imageSrc, brandUrl, imageAlt, navLinks }) {
    return (
        <div id='marco-general'>
            <header>
                <div className="icono">
                    
                    <img src={imageSrc} alt={imageAlt} />
                  
                </div>
                <h1>Concesionaria Online</h1>
            </header>

            <nav>
                {navLinks.map((link, index) => ( 
                    <ol key={index}>
                        <Link className="nav-link" to={link.url}> 
                            {link.name}
                        </Link>
                    </ol>
                ))}
            </nav>
        </div>
    );
}

Header.propTypes = { 
    imageSrc: PropTypes.string.isRequired,
    brandUrl: PropTypes.string,
    imageAlt: PropTypes.string.isRequired,
    navLinks: PropTypes.arrayOf( 
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
    ).isRequired, 
};

export default Header;
