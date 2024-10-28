import React from "react";
import "./layout.css";
import { Link } from "gatsby";
import Footer from "./footer";

export default function Layout({children}){
    return(
        <main className="layout">
            {/*Aqui vai um comentário*/}
            <div className="header">
                <h3>Estudos de Jamstack - Gatsby</h3>
                <nav className="topnav">
                    <Link to="/">Inicio</Link>
                    <Link to="/pagina2">Dados Estático</Link>
                    <Link to="/pagina3">Dados React</Link>
                </nav>
            </div>
            <div className="main">
                {children}
            </div>
            <div className="footer">
                <Footer copyrightYear="2024"/>
            </div>
        </main>
    )
}