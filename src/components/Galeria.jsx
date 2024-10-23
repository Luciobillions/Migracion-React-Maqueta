import React from 'react';
import PropTypes from 'prop-types'; 


const Galeria = ({ images }) => {
    return (
        <div id="marco-general">
            <div className="row">
                <aside className='aside-galeria'>
                    <h2>Galería de autos</h2>
                </aside>
                <div className="galeria">
                    {images.map((image) => (
                        // recordar dejar la key dentro de galeria-imagenes para que el css no afecta a todos de una 
                        <div id="galeria-imagenes" key={image.id}>
                            <img src={image.imagen} alt={image.nombre} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

Galeria.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            nombre: PropTypes.string.isRequired,
            imagen: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Galeria;
