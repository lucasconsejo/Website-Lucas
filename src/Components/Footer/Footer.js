import React, { Component } from 'react'
import logoFb from '../../img/logo/logo-fb.png'
import logoLn from '../../img/logo/logo-ln.png'
import logoGit from '../../img/logo/logo-git.png'
import '../../css/Footer.css'

class Footer extends Component{
    render(){
        return(
            <div className="container  fixed-bottom  mb-3">
                <div className="row">
                    <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3">
                        <div className="row">
                            <div id="logo-fb" className="col-md-4 col-2">
                                <a href="https://www.facebook.com/lucas.consejo" target="_blank" rel="noopener noreferrer"><img src={logoFb} alt="lien facebook"/></a>
                            </div>

                            <div id="logo-ln" className="col-md-4 col-2">
                                <a href="https://www.linkedin.com/in/lucas-consejo/" target="_blank" rel="noopener noreferrer"><img src={logoLn} alt="lien linkedin"/></a>
                            </div>

                            <div id="logo-git" className="col-md-4 col-2">
                                <a href="https://github.com/lucasconsejo" target="_blank" rel="noopener noreferrer"><img src={logoGit} alt="lien git"/></a>
                            </div>
                        </div>
                    </div> 
                    
                    <div className="offset-md-3 col-md-7 offset-sm-1 col-sm-9 offset-0 offset-xl-3 col-8 col-xl-5 offset-lg-3 col-lg-6">
                        <p>Copyright © 2018 Lucas Consejo - Tout droits réservés</p>
                    </div>

                </div>
            </div>
        )
    }
}

export default Footer