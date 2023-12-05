import React from "react"
import CartWidget from "./CartWidget"

const NavBar = () => {

    return (
        <header className="header">
            <h1 className= "headerTitle">Funko's</h1>
            <nav className="navbar">
                <a className="navbarElement" href="#">Inicio</a>
                <a className="navbarElement" href="#">Productos</a>
                <a className="navbarElement" href="#">Información</a>
                <CartWidget/>
            </nav>    
        </header>

    )
}

export default NavBar