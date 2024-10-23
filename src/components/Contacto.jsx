import React from 'react';
import Footer from './layout/Footer'; // Asegúrate de importar el Footer
const Contacto = ({footerImages}) => {
    return (
        <div id='marco-general'>
        <div className="row">
            <div className="container-form">
                <section className='section-form'>
                    <h2 className='h2-form'>Contáctanos</h2>
                    <p className='p-form'>
                        Hacer consultas dentro de este horario:
                        <br />
                        8:30 - 12:30
                        <br />
                        16:30 - 20:30
                    </p>
                    <div className="ico">
                        <img src="img/llamar.png" alt="Teléfono" /> 3385 475869
                    </div>
                    <div className="ico">
                        <img src="img/gmail.png" alt="Email" /> concesionariaonlinelb@gmail.com
                    </div>
                </section>

                <form 
                    autoComplete="off" 
                    action="https://formspree.io/f/xdknebaz" 
                    method="POST"
                >
                    <input 
                        type="text" 
                        name="nombre" 
                        placeholder="Ingresa tu nombre" 
                        className="campo" 
                        required 
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Ingresa tu correo" 
                        className="campo" 
                        required 
                    />
                    <input 
                        type="tel" 
                        name="telefono" 
                        placeholder="Ingresa tu teléfono" 
                        className="campo" 
                        required 
                    />
                    <select name="lista" id="generos" required>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                    </select>

                    <br />
                    <textarea 
                        name="mensaje" 
                        placeholder="Dejar una consulta" 
                        required 
                    ></textarea>
                    <br />
                    <label>
                        <input type="checkbox" required /> No soy un robot
                    </label>
                    <br />

                    <div className="botones">
                        <input 
                            type="submit" 
                            value="Enviar" 
                            className="btn-enviar" 
                        />
                        <input 
                            type="reset" 
                            value="Reset" 
                            className="btn-enviar" 
                        />
                    </div>
                </form>
                
            </div>
           
        </div>
        <Footer imagesfooter={footerImages} /> {/* Usando las imágenes aquí */}
        </div>
        
    );
    
}

export default Contacto;
