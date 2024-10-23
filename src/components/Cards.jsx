import React from 'react';
import PropTypes from 'prop-types';
const Cards = ({ productos  }) => {
    return (
        <div id="marco-general">
            <div className="row">
                <aside className='aside-card'>
                    <h2 className='h2-card'>Productos en Stock</h2>
                    <p>Aprovecha hasta que se terminen!⏰</p>
                    <section id="productos">
                        {productos.map((producto) => (
                            <div className="card" key={producto.id}>
                                <img src={producto.imagen} alt={`Imagen de ${producto.nombre}`} />
                                <h3 className='h3-card'>{producto.nombre}</h3>
                                <p className='p-card'><strong>Precio:</strong> {producto.precio}</p>
                                <p><strong>Stock:</strong> {producto.stock} unidades</p>
                                <a href={producto.link}>
                                    <button>Comprar Ahora</button>
                                </a>
                            </div>
                        ))}
                    </section>
                </aside>
            </div>
        </div>

        
    );

    
};


Cards.propTypes = {
    productos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            nombre: PropTypes.string.isRequired,
            imagen: PropTypes.string.isRequired,
            precio: PropTypes.string.isRequired,
            stock: PropTypes.number.isRequired,
            link: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Cards;
