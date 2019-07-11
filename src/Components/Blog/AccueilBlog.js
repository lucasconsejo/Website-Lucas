import React, {Component} from 'react';
import '../../css/Blog.css'
import { Link } from 'react-router-dom'
import Navbar from '../NavbarBlog/NavbarBlog'
import imgCdiscount from "../../img/Blog/cdiscount-logo.jpg"
import Footer from '../Footer/FooterBlog'

class AccueilBlog extends Component{
    render(){
        return(
            <div className="accueil-blog-bloc">
                <meta name="theme-color" content="#293545"></meta>
               <Navbar /><br /><br />
                <div id="container-blog">
                    <div id="img-fond-blog-accueil">
                        <h3 className="text-light text-center">Bienvenue sur le blog de Lucas Consejo</h3>
                        <p className="text-light text-center">Vous y trouverez les différents rapports de stage</p>
                    </div>
                
                    <div className="container">
                        <div id="blog-intro">
                            <h2>Blog de stage</h2>

                            <ul>
                                <li>
                                    <Link to="/blog/stage/cdiscount" className="lien">
                                        <div id="bloc-stage-list">
                                            <div id="blog-stage-img-list">
                                                <img src={imgCdiscount} alt="img cdiscount" />
                                            </div>
                                            <div id="blog-stage-txt-list">
                                                <h5>Stage développeur à Cdiscount</h5>
                                                <p className="lien-p">Date : <span className="date">Du 1 Juillet au 13 Septembre 2019</span></p>
                                                <p className="lien-p">Durée : <span className="date">2 mois</span></p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div id="footer-mobile">
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AccueilBlog