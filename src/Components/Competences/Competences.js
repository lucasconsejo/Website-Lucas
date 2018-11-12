import React, { Component } from 'react';
import CV from '../../files/CV.pdf'

class Competences extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mt-3 text-center">
                        <a href={CV} alt="telecharger mon cv" className="btn btn-outline-secondary" download>Télécharger mon CV</a>
                    </div>
                </div>

                <div className="row text-center">
                    <div className="col-lg-6">
                        <p>Competences 1</p>
                    </div>

                    <div className="col-lg-6">
                        <p>Competences 2</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Competences

