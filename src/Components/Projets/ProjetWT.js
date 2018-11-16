import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../../css/Projets.css'
import ImgWetube from '../../img/projets-img/wetube.png'
                    
class ProjetWT extends Component{
    render(){
        return(
            <div>
                <div className="navHidden"></div>
                <div className="container">
                    <Link to="/projets" id="btn-retour" className="btn btn-outline-dark mt-3">  
                        Retour
                    </Link>

                    <div className="row mt-1">
                        <div id="wetube" className="col-lg-12">
                            <h2>WeTube</h2>
                            <img src={ImgWetube} alt="wetube" />
                            <p>Description du projet : </p>
                            <p>Constituendi autem sunt qui sint in amicitia fines et quasi termini diligendi. De quibus tres video sententias ferri, quarum nullam probo, unam, ut eodem modo erga amicum adfecti simus, quo erga</p>
                        </div>                
                    </div>

                    <a href="https://github.com/lucasconsejo/Projects-React-js/tree/master/Movies%20Trailer" target="_blank" alt="github wetube" rel="noopener noreferrer">Git du projet</a>
                </div>
            </div>
        )
    }
}

export default ProjetWT

