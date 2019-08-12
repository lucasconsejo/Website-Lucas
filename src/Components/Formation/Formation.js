import React, { Component } from 'react';
import '../../css/Formation.css';
import Footer from '../Footer/Footer.js'
import imgYnov from '../../img/formation/logo-ynov-blanc.png'
import imgBac from '../../img/formation/logo-diplome.png'
import imgCdiscount from '../../img/formation/logo-cdiscount.png'
import Navbar from '../../Components/Navbar/Navbar.js'

class Formation extends Component{
    render(){
        return(
            <div id="formation">
                <meta name="theme-color" content="#4b6182"></meta>
                <Navbar color="color2" />
                <div id="fond-formation">
                    <div className="navHidden"></div>

                    <div id="box-size2" className="container">
                        <h2 className="text-light mt-3">Formation</h2>

                        <div id="row1" className="row mt-5">
                            <div className="col-12  col-sm-12  col-md-12  col-lg-2  offset-sm-0  offset-md-0  offset-lg-1  text-center">
                                <img id="img-ynov" src={imgCdiscount} alt="logo ynov" />
                            </div>

                            <div className="col-12  col-sm-12  col-md-12  col-lg-8  offset-lg-1  offset-md-0  offset-sm-0">
                                <p id="date" className="font-weight-bold">Depuis Juillet 2017</p>
                                <h3 className="text-light">Stagiaire Ingénieur d'étude</h3>
                                <p className="details">Cdiscount</p>
                                <li className="details">Pendant 2 mois</li>
                            </div>
                        </div>

                        <div id="row1" className="row mt-5">
                            <div className="col-12  col-sm-12  col-md-12  col-lg-2  offset-sm-0  offset-md-0  offset-lg-1  text-center">
                                <img id="img-ynov" src={imgYnov} alt="logo ynov" />
                            </div>

                            <div className="col-12  col-sm-12  col-md-12  col-lg-8  offset-lg-1  offset-md-0  offset-sm-0">
                                <p id="date" className="font-weight-bold">Depuis Septembre 2017</p>
                                <h3 className="text-light">Master Expert Informatique et Systèmes d'Information</h3>
                                <p className="details">Ingésup / Campus Ynov Bordeaux</p>
                                <li className="details">Entre en 3ème année en Septembre 2019</li>
                            </div>
                        </div>

                        <div id="row2" className="row mt-5">
                            <div className="col-12  col-sm-12  col-md-12  col-lg-2  offset-sm-0  offset-md-0  offset-lg-1 text-center">
                                <img id="img-bac" src={imgBac} alt="logo bac" />
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
                <Footer />
            </div>
        )
    }
}

export default Formation

