import React, { Component } from 'react';
import '../../css/Competences.css';
import CV from '../../files/CV.pdf';
import Navbar from '../../Components/Navbar/Navbar.js'

class Competences extends Component{
    render(){
        return(
            <div id="competence">
                <Navbar color="color3" />
                <div id="fond-competence">
                    <div className="navHidden"></div>

                    <div id="box-size" className="container">
                        <h2 className="mt-3 text-light">Compétences</h2>

                        <div className="row mt-4">
                            <div className="col-lg-6">
                                <p className="text-light">HTML/CSS</p>
                                <div className="progress pg-height">
                                    <div id="pg-95" className="progress-bar bg-dark text-right font-weight-bold pr-3" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95%</div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <p className="text-light">Bootstrap / Materialize</p>
                                <div className="progress pg-height">
                                    <div id="pg-80" className="progress-bar bg-dark text-right font-weight-bold pr-3" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                                </div>
                            </div>

                        </div>

                        <div className="row mt-3">
                            <div className="col-lg-6">
                                <p className="text-light">Javascript (ES6 & JQuery)</p>
                                <div className="progress pg-height">
                                    <div id="pg-60" className="progress-bar bg-dark text-right font-weight-bold pr-3" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
                                </div>
                            </div>
                            
                            <div className="col-lg-6">
                                <p className="text-light">PHP</p>
                                <div className="progress pg-height">
                                    <div id="pg-20" className="progress-bar bg-dark text-right font-weight-bold pr-3" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">30%</div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-lg-6">
                                <p className="text-light">Symfony 4</p>
                                <div className="progress pg-height">
                                    <div id="pg-25" className="progress-bar bg-dark text-right font-weight-bold pr-3" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
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
                                <p className="text-light">SQL</p>
                                <div className="progress pg-height">
                                    <div id="pg-50" className="progress-bar bg-dark text-right font-weight-bold pr-3" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <p className="text-light">Utilisation de git</p>
                                <div className="progress pg-height">
                                    <div id="pg-90" className="progress-bar bg-dark text-right font-weight-bold pr-3" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
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

