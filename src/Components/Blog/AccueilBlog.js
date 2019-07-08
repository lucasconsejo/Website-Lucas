import React, {Component} from 'react';
import '../../css/Blog.css'
import { Link } from 'react-router-dom'
import Navbar from '../NavbarBlog/NavbarBlog'
import logoLn from '../../img/Footer/logo-ln.png'
import logoGit from '../../img/Footer/logo-git.png'
import imgCdiscount from "../../img/Blog/cdiscount-logo.jpg"

class AccueilBlog extends Component{
    render(){
        return(
            <div className="accueil-blog-bloc">
                <Navbar />
                <div id="container-blog">
                    <div id="img-fond-blog">
                    
                    </div>
                
                    <div className="container">
                        <div id="blog-intro">
                            <h2>Blog de stage</h2>

                            <ul>
                                <li>
                                    <Link to="/blog/stages/cdiscount" className="lien">
                                        <div id="bloc-stage-list">
                                            <div id="blog-stage-img-list">
                                                <img src={imgCdiscount} alt="img cdiscount" />
                                            </div>
                                            <div id="blog-stage-txt-list">
                                                <h5>Stage développeur à Cdiscount</h5>
                                                <p className="lien-p">Date : Du 1 Juillet au 13 Septembre 2019</p>
                                                <p className="lien-p">Durée : 2 mois</p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div id="copyright-accueil" className="row">
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
                            
                            <div id="accueil-copyright" className="offset-md-3 col-md-7 offset-sm-1 col-sm-9 offset-0 offset-xl-3 col-8 col-xl-5 offset-lg-3 col-lg-6">
                                <p className="">Copyright © 2018 Lucas Consejo - Tout droits réservés</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AccueilBlog