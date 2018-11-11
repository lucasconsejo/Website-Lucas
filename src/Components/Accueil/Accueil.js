import React, { Component } from 'react';
import '../../css/Accueil.css'
import imgProfil from '../../img/profil/photo-lucas.png'

class Accueil extends Component{
    render(){
        return(
            <div className="container-fluide">
                <div className="row center-align">
                    <div id="photo-profil" className="col-md-2 col-sm-2 col-2 offset-md-1 offset-sm-4  offset-2">
                        <img src={imgProfil} alt="profil Lucas Consejo"/> 
                    </div>

                    <div id="description" className="col-md-6 col-sm-12 col-12 offset-md-2 ">
                        <h1>Lucas Consejo</h1>
                        <h2>Développeur Web & Android</h2><br/>
                        <p>Je suis étudiant en 2ème année en Informatique à Ingésup, sur le campus Ynov à Bordeaux.
                        Je suis passionné par l'informatique. Je suis curieux, motivé et je cherche constamment à approfondir mes compétences.</p>
                    </div>             
                </div>
            </div>
        )
    }
}

export default Accueil
