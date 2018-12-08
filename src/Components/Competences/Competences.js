import React, { Component } from 'react';
import '../../css/Competences.css';
import CV from '../../files/CV.pdf';
import Navbar from '../../Components/Navbar/Navbar.js'

class Competences extends Component{
    render(){
        return(
            <div id="competence">
                <meta name="theme-color" content="#7f88b3"></meta>
                <Navbar color="color3" />
                <div id="fond-competence">
                    <div className="navHidden"></div>

                    <div id="box-size2" className="container">
                        <h2 className="mt-3 text-light">Compétences</h2>

                        <div className="row mt-4">
                            <div className="col-lg-6">
                                <p className="text-light">HTML/CSS</p>
                                <div className="progress pg-height">
                                    <div id="pg-85" className="progress-bar bg-dark text-right font-weight-bold pr-3" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <p className="text-light">Bootstrap / Materialize</p>
                                <div className="progress pg-height">
                                    <div id="pg-60" className="progress-bar bg-dark text-right font-weight-bold pr-3" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
                                </div>
                            </div>

                        </div>

                        <div className="row mt-3">
                            <div className="col-lg-6">
                                <p className="text-light">Javascript (ES6 & JQuery)</p>
                                <div className="progress pg-height">
                                    <div id="pg-55" className="progress-bar bg-dark text-right font-weight-bold pr-3" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">55%</div>
                                </div>
                            </div>
                            
                            <div className="col-lg-6">
                                <p className="text-light">PHP</p>
                                <div className="progress pg-height">
                                    <div id="pg-35" className="progress-bar bg-dark text-right font-weight-bold pr-3" role="progressbar" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">35%</div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-lg-6">
                                <p className="text-light">Symfony 4</p>
                                <div className="progress pg-height">
                                    <div id="pg-20" className="progress-bar bg-dark text-right font-weight-bold pr-3" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">20%</div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <p className="text-light">React JS</p>
                                <div className="progress pg-height">
                                    <div id="pg-45" className="progress-bar bg-dark text-right font-weight-bold pr-3" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">45%</div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-lg-6">
                                <p className="text-light">Java (Eclipse & Android Studio)</p>
                                <div className="progress pg-height">
                                    <div id="pg-65" className="progress-bar bg-dark text-right font-weight-bold pr-3" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">65%</div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <p className="text-light">C# .NET</p>
                                <div className="progress pg-height">
                                    <div id="pg-40" className="progress-bar bg-dark text-right font-weight-bold pr-3" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">40%</div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-lg-6">
                                <p className="text-light">SQL</p>
                                <div className="progress pg-height">
                                    <div id="pg-60" className="progress-bar bg-dark text-right font-weight-bold pr-3" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <p className="text-light">Utilisation de git</p>
                                <div className="progress pg-height">
                                    <div id="pg-75" className="progress-bar bg-dark text-right font-weight-bold pr-3" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-lg-12 mt-4 text-center">
                                <a href={CV} alt="telecharger mon cv" className="btn btn-light" download>Télécharger mon CV</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Competences

