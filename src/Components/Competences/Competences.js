import React, { Component } from 'react';
import '../../css/Competences.css';
import CV from '../../files/CV.pdf';

class Competences extends Component{
    render(){
        return(
            <div>
                <div className="navHidden"></div>

                <div className="container">
                    <h2 className="mt-3">Compétences</h2>

                    <div className="row mt-4">
                        <div className="col-lg-6">
                            <p>HTML/CSS</p>
                            <div className="progress pg-height">
                                <div id="pg-95" className="progress-bar bg-dark text-right font-weight-bold pr-3" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95%</div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <p>Bootstrap / Materialize</p>
                            <div className="progress pg-height">
                                <div id="pg-80" className="progress-bar bg-dark text-right font-weight-bold pr-3" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                            </div>
                        </div>

                    </div>

                    <div className="row mt-3">
                        <div className="col-lg-6">
                            <p>Javascript (ES6 & JQuery)</p>
                            <div className="progress pg-height">
                                <div id="pg-60" className="progress-bar bg-dark text-right font-weight-bold pr-3" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
                            </div>
                        </div>
                        
                        <div className="col-lg-6">
                            <p>PHP</p>
                            <div className="progress pg-height">
                                <div id="pg-20" className="progress-bar bg-dark text-right font-weight-bold pr-3" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">30%</div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-lg-6">
                            <p>Symfony 4</p>
                            <div className="progress pg-height">
                                <div id="pg-25" className="progress-bar bg-dark text-right font-weight-bold pr-3" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <p>React JS</p>
                            <div className="progress pg-height">
                                <div id="pg-45" className="progress-bar bg-dark text-right font-weight-bold pr-3" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">45%</div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-lg-6">
                            <p>SQL</p>
                            <div className="progress pg-height">
                                <div id="pg-50" className="progress-bar bg-dark text-right font-weight-bold pr-3" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <p>Utilisation de git</p>
                            <div className="progress pg-height">
                                <div id="pg-90" className="progress-bar bg-dark text-right font-weight-bold pr-3" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-lg-12 mt-4 text-center">
                            <a href={CV} alt="telecharger mon cv" className="btn btn-outline-dark" download>Télécharger mon CV</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Competences

