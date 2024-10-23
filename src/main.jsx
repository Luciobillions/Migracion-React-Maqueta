import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import Cards from './components/cards'; 
import Galeria from './components/Galeria';
import Footer from './components/layout/Footer';
import '/public/css/styles.css';
import '/public/css/styles-cards.css';
import '/public/css/styles-galeria.css';
import '/public/css/styles-contacto.css';
import Contacto from './components/Contacto';
// Importante poner los datos 
const productos = [
  {
      id: 1,
      nombre: "MINI Cooper 1.6 Coupe",
      imagen: "img/Porche.png",
      precio: "$US 19.900",
      stock: 2,
      link: "https://auto.mercadolibre.com.ar/MLA-1857455294-mini-cooper-16-coupe-122cv-_JM#polycard_client=search-nordic&position=3&search_layout=grid&type=item&tracking_id=6aee95b0-6b08-4cca-8577-6dc0f0c0d3f8"
  },
  {
      id: 2,
      nombre: "Volkswagen Up!",
      imagen: "img/Volkswagen Up.png",
      precio: "$14.200.000",
      stock: 3,
      link: "https://auto.mercadolibre.com.ar/MLA-1857451440-vw-up-high-manual-2018-ugarcia-_JM#polycard_client=search-nordic&position=13&search_layout=grid&type=item&tracking_id=6aee95b0-6b08-4cca-8577-6dc0f0c0d3f8"
  },
  {
      id: 3,
      nombre: "Fiat Toro 1.8 Freedom",
      imagen: "img/Fiat toro.png",
      precio: "$US 9.000",
      stock: 4,
      link: "https://auto.mercadolibre.com.ar/MLA-1439042125-fiat-toro-freedom-4x2-at6-2024-0km-tomo-autos-usados-plan-l-_JM#polycard_client=search-nordic&position=18&search_layout=grid&type=item&tracking_id=6aee95b0-6b08-4cca-8577-6dc0f0c0d3f8"
  },
  {
      id: 4,
      nombre: "Renault Logan 1.6 16v Life",
      imagen: "img/Renault logan.png",
      precio: "U$S 11.600",
      stock: 1,
      link: "https://auto.mercadolibre.com.ar/MLA-1439046975-renault-logan-ph2-life-16-2021-liv-motors-_JM#polycard_client=search-nordic&position=39&search_layout=grid&type=item&tracking_id=32015e20-f04e-4b52-9185-5a9347fb8b4e"
  }
];

//Importante acordarse el nombre del const si no se reconoce 
const galeriaImagenes = [
  {
    id: 1,
    nombre: "Volkswagen Virtus",
    imagen: "img/1664805307_VW-estrena-nuevo-Virt.png"
  },
  {
    id: 2,
    nombre: "Nissan",
    imagen: "img/el-nissan-x-trail-e-power-mejor.png"
  },
  {
    id: 3,
    nombre: "idk",
    imagen: "img/VaujiUyy2_2000x1500__1.png" 
  },
  {
    id: 4,
    nombre: "generation great",
    imagen: "img/pl103909237-3rd_generation_great.jpg" 
  },
  {
    id: 5,
    nombre: "Fiat-Cronos",
    imagen: "img/Fiat-Cronos-2023-delantera-1.jpg" 
  },
  {
    id: 6,
    nombre: "MINI Cooper",
    imagen: "img/galery 2.png"
  },
  {
    id: 7,
    nombre: "10modelos",
    imagen: "img/estos-son-los-10-modelos-por-pla.png" 
  },
  {
    id: 8,
    nombre: "Galery",
    imagen: "img/galery 1.png" 
  },
  {
    id: 9,
    nombre: "galery2",
    imagen: "img/galery 3 3.png" 
  },
  {
    
    id: 10,
    nombre: "Galery3",
    imagen: "img/galery 4.png" 
  },
 
 
 
 
];
const Footerimagenes=[
  
    { nombre: "Toyota", imagen: "img/logo-toyota--.png" },
    { nombre: "Mercedes", imagen: "img/logo-mercedes.png" },
    { nombre: "Lamborghini", imagen: "img/lambo.png" },
    { nombre: "Chevrolet", imagen: "img/chevrolet.png" },
  
];



const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: 
        // forma de añadir informacion que me intereso
        <div id='marco-general'>
          <div className='row'>
          <section>
                <h2>Nos dedicamos 🏎️:</h2>
                <p>En Concesionaria online, transformamos la manera en que encuentras tu próximo vehículo. Nuestro
                    objetivo es ofrecerte una experiencia sin igual, donde la comodidad y la confianza se combinan para
                    brindarte lo mejor del mercado automotriz, directamente desde la comodidad de tu hogar.</p>
                <hr />
                <h2>Nuestro Compromiso 🚘:</h2>
                <p>
                    En Concesionaria, creemos que comprar o vender un auto debería ser una experiencia emocionante y sin
                    estrés. Por eso, nos comprometemos a:

                    Proceso Seguro y Sencillo: Garantizamos transacciones seguras y protegidas, con opciones de
                    financiamiento adaptadas a tus necesidades.
                    Entrega a Domicilio: Disfruta de la comodidad de recibir tu nuevo auto directamente en tu puerta,
                    con todas las medidas de seguridad y precaución necesarias.
                    Soporte Continuo: Estamos aquí para ti antes, durante y después de tu compra, ofreciendo soporte y
                    mantenimiento para que siempre estés en las mejores manos.
                    Explora Nuestro Inventario
                    Te invitamos a navegar por nuestra extensa colección de vehículos. Encuentra el auto de tus sueños,
                    sin salir de casa. ¡Comienza tu viaje hoy mismo con Concesionaria online!</p>
              <img src="public/img/Desktop.png" alt="Imagen de presentación" />
              <Footer imagesfooter={Footerimagenes} />
            </section>
          </div>
        </div>,
      },
      {
        path: "/cards",
        element: <Cards productos={productos} />, 
      },
      {
        path: "/galeria",
        element: <Galeria  images={galeriaImagenes} 
         /> , 
      },
      {
        path:"/contacto",
        element: <Contacto footerImages={Footerimagenes} />,
        //el <> para ponerlo todo dentro del element
 
      }

    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
