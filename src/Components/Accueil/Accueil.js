import React, { Component } from 'react';
import '../../css/Accueil.css'
import imgProfil from '../../img/profil/photo-lucas.png'
import videoBackground from '../../video/Very-Open-Space.mp4'
import Navbar from '../../Components/Navbar/Navbar.js'

class Accueil extends Component{
    render(){
        return(
            <div>
                <Navbar color="color1" />
                <video autoPlay muted loop id="video">
                    <source src={videoBackground} type="video/mp4" id="video" />
                </video>

                <div id="accueil">
                    <div id="fond-accueil">
                        <div className="navHidden"></div>
                        <div className="container-fluide">
                            <div id="box-size" className="row center-align">
                                <div id="photo-profil" className="col-md-1 col-sm-2 col-2 col-lg-2 col-xl-2    offset-md-0 offset-sm-4  offset-lg-1 offset-2">
                                    <img src={imgProfil} alt="profil Lucas Consejo"/> 
                                </div>

                                <div id="description" className="col-md-7 col-sm-12 col-12 col-lg-7 col-xl-6 offset-md-4 offset-lg-2">
                                    <h1>Lucas Consejo</h1>
                                    <h2>Développeur Web & Android</h2><br/>
                                    <p className="text-light">Je suis étudiant en 2ème année en Informatique à Ingésup, sur le campus Ynov à Bordeaux.
                                    Je suis passionné par l'informatique. Je suis curieux, motivé et je cherche constamment à approfondir mes compétences.</p>
                                </div>             
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Accueil
