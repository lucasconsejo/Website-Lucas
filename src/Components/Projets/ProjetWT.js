import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../../css/Projets.css'
                    
class ProjetWT extends Component{
    render(){
        return(
            <div className="container">
                <Link to="/projets">
                    Retour
                </Link>
            </div>
        )
    }
}

export default ProjetWT

