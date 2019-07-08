import React, { Component } from 'react';
import LogoWetube from '../../img/projets-img/react-logo.png'
import '../../css/Projets.css'
import Footer from '../Footer/Footer.js'
import Navbar from '../../Components/Navbar/Navbar.js'
                    
class Projets extends Component{
    render(){
        return(
            <div id="projets">
                <meta name="theme-color" content="#434e63"></meta>
                <Navbar color="color4" />
                <div id="fond-projets">
                    <div className="navHidden"></div>
                    <div id="box-size2" className="container">
                        <h2 className="mt-3 text-light">Projets récents</h2>
                        <div id="list-project" className="row mt-3 mx-auto mt-4">
                        <a href="https://github.com/lucasconsejo/Website-Lucas" id="img-wetube" className="col-lg-4  col-12  text-center  text-dark  box" target="_blank" rel="noopener noreferrer">
                                <div className="projet p-3">
                                    <h5>Lucas Consejo - Développeur Web & Android</h5>
                                    <img src={LogoWetube} className="img-rotation" alt="appli WeTube"/>
                                    <p>J'ai développé mon site web avec React JS. J'ai utilisé Express (Framework Node JS) pour le serveur web, ainsi que Firebase (Realtime Database) pour le formulaire de contact. J'ai ensuite configuré mon Raspebrry pi 3 afin d'héberger mon site. </p>
                                    <p>React js & Bootstrap</p>
                                    <button className="btn btn-dark">  
                                        Git du projet
                                    </button >
                                </div>
                            </a>

                            <a href="https://github.com/lucasconsejo/Projects-React-js/tree/master/Movies%20Trailer" id="img-wetube" className="col-lg-4  col-12  text-center  text-dark  box" target="_blank" rel="noopener noreferrer">
                                <div className="projet p-3">
                                    <h3>WeTube</h3>
                                    <img src={LogoWetube} className="img-rotation" alt="appli WeTube"/>
                                    <p>WeTube est une application web qui permet de rechercher des bande d'annonce de films. L'appli utilise une API afin de recupérer les données des films.</p>
                                    <p>React js & Bootstrap</p>
                                    <button className="btn btn-dark">  
                                        Git du projet
                                    </button >
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Projets

