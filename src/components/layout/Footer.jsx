import React from 'react';
import PropTypes from 'prop-types'; 

const Footer = ({ imagesfooter }) => {
    return (
        <footer>
            <div className="caja-text">
                <h2>Patrocinadores:</h2>
            </div>
            <div className="logos-spon">
                {imagesfooter.map((imgfoot) => (
                    <img src={imgfoot.imagen} alt={imgfoot.nombre} key={imgfoot.imagen} />
                ))}
            </div>
            <br />
            <p>Encuentra el auto de tus sueños, sin salir de casa.</p>
            <small className="copy">
                &copy; 2024 <b>Lucio Gomez</b> - Todos Los Derechos Reservados
            </small>
        </footer>
    );
}

Footer.propTypes = {
    imagesfooter: PropTypes.arrayOf(
        PropTypes.shape({
            nombre: PropTypes.string.isRequired,
            imagen: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Footer;
