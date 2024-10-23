import { Outlet } from 'react-router-dom';
import Header from './components/layout/Header';

import logo from '/public/img/sticky.png';

function App() {
    const navLinks = [
        { name: "Home", url: "/" },
        { name: "Cards", url: "/cards" },
        { name: "Galería", url: "/galeria" },
        { name: "Contacto", url: "/contacto" }
    ];
   
    

    return (
        <>
            <Header imageSrc={logo} brandUrl="#" imageAlt='Perfil' navLinks={navLinks} />
            <Outlet />
        </>
    );
}

export default App;
