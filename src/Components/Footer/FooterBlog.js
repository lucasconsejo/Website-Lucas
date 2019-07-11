import React, { Component } from 'react';
import logoLn from '../../img/Footer/logo-ln.png'
import logoGit from '../../img/Footer/logo-git.png'

class FooterBlog extends Component{

    render(){
        return(
            <div id="footer-blog" className="container mb-3">
                <div className="row">
                    <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3">
                        <div className="row">
                            <div id="logo-blog-ln" className="col-md-4 col-2">
                                <a href="https://www.linkedin.com/in/lucas-consejo/" target="_blank" rel="noopener noreferrer"><img src={logoLn} alt="lien linkedin"/></a>
                            </div>

                            <div id="logo-blog-git" className="col-md-4 col-2">
                                <a href="https://github.com/lucasconsejo" target="_blank" rel="noopener noreferrer"><img src={logoGit} alt="lien git"/></a>
                            </div>
                        </div>
                    </div> 
                    
                    <div id="copyright" className="offset-md-3 col-md-7 offset-sm-1 col-sm-9 offset-0 offset-xl-3 col-8 col-xl-5 offset-lg-3 col-lg-6">
                        <p className="">Copyright © 2019 Lucas Consejo - Tous droits réservés</p>
                    </div>

                </div>
            </div>
        )
    }
}

export default FooterBlog