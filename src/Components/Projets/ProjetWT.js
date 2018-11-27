import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../../css/Projets.css'
import ImgWetube from '../../img/projets-img/wetube.png'
import BtnBack from '../../img/projets-img/btn-back.png'
                    
class ProjetWT extends Component{
    render(){
        return(
            <div id="projets">
                <div id="fond-projets">
                    <div className="navHidden"></div>
                    <div className="container">
                        <div className="row mt-3">
                            <div className="col-lg-1">
                                <Link to="/projets" id="btn-retour">  
                                    <img src={BtnBack} id="btn-back" alt="button back"/>
                                </Link>
                            </div>
                            <div className="col-lg-1">
                                <h2 className="text-light">WeTube</h2>
                            </div>      
                        </div>

                        <div id="wetube" className="row mt-4">
                            <div id="wetubeLeft" className="col-lg-8">
                                <a href="http://localhost:3000/static/media/wetube.8c0d4827.png" target="_blank" rel="noopener noreferrer">
                                    <img src={ImgWetube} id="imgWetube" alt="wetube" />
                                </a>
                            </div>  

                            <div className="col-lg-4 text-center align-self-center">
                                <h4 id="description" className="font-weight-bold text-center">Description du projet</h4><br />
                                <p>WeTube est une application web qui permet de rechercher des bande d'annonce de films. L'appli utilise une API afin de recupérer les données des films.</p>
                                <a  className="btn btn-dark " href="https://github.com/lucasconsejo/Projects-React-js/tree/master/Movies%20Trailer" target="_blank" alt="github wetube" rel="noopener noreferrer">Git du projet</a>  
                            </div>      
                        </div>
                    </div>
                </div>
            </div>         
        )
    }
}

export default ProjetWT

