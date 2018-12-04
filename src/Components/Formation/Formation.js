import React, { Component } from 'react';
import '../../css/Formation.css';
import imgYnov from '../../img/formation/logo-ynov-blanc.png'
import imgBac from '../../img/formation/logo-diplome.png'
import Navbar from '../../Components/Navbar/Navbar.js'

class Formation extends Component{
    render(){
        return(
            <div id="formation">
                <Navbar color="color2" />
                <div id="fond-formation">
                    <div className="navHidden"></div>

                    <div id="box-size" className="container">
                        <h2 className="text-light mt-3">Formation</h2>

                        <div id="row1" className="row mt-5">
                            <div className="col-lg-2 offset-lg-1 col-md-2 offset-md-0 col-sm-2 offset-sm-4 col-2 offset-3">
                                <img id="img-ynov" src={imgYnov} alt="" />
                            </div>

                            <div className="col-lg-8 offset-lg-1 col-md-12 offset-md-0 col-sm-12 offset-sm-0">
                                <p id="date" className="font-weight-bold">Depuis Septembre 2017</p>
                                <h3 className="text-light">Master Expert Informatique et Systèmes d'Information</h3>
                                <p className="details">Ingésup / Campus Ynov Bordeaux</p>
                                <li className="details">Actuellement en 2ème année</li>
                            </div>
                        </div>

                        <div id="row2" className="row mt-5">
                            <div className="col-lg-2 offset-lg-1 col-md-2 offset-md-0 col-sm-2 offset-sm-4 col-2 offset-3">
                                <img id="img-bac" src={imgBac} alt="" />
                            </div>

                            <div className="col-lg-8 offset-lg-1 col-md-12 offset-md-0 col-sm-12 offset-sm-0">
                                <p id="date" className="font-weight-bold">Juin 2017</p>
                                <h3 className="text-light">Baccalauréat Série S</h3>
                                <p className="details">Lycée Montesquieu Bordeaux</p>
                                <li className="details">Option ISN (Informatique, Science du Numérique)</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Formation

