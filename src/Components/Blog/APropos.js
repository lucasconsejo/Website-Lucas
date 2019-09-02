/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import '../../css/Blog.css'
import { Link } from 'react-router-dom'
import Navbar from '../NavbarBlog/NavbarBlog'
import ProfilImg from "../../img/profil/photo-lucas.png"
//import Footer from '../Footer/FooterBlog'

class APropos extends Component{

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render(){
        return(
            <div className="accueil-blog-bloc">
                <meta name="theme-color" content="#293545"></meta>
                <Navbar /><br /><br />
                <div id="container-blog">
                    <div id="img-fond-blog-accueil">
                        <div id="propos-profil-img">
                            <img src={ProfilImg} alt="photo profile"/>
                        </div>
                        <div id="propos-title">
                            <h3 className="text-light text-center">Lucas Consejo</h3>
                            <p className="text-light text-center">Étudiant à Ingésup Ynov Bordeaux</p>
                        </div>
                    </div>

                    <div className="container">
                        <div className="blog-part">
                            <h3>A propos</h3>
                            <p>Je suis Lucas Consejo, étudiant en école d'ingénieur informatique, à Ingésup sur le Campus Ynov à Bordeaux.
                                <br />
                                Je prépare un Master (BAC+5) pour passer le diplôme d'<span id="color-detail">Expert informatique et systèmes d'informations - Titre RNCP de niveau I</span>.
                                <br />
                                Je rentre cette année (2019-2020) en 3ème année (BAC+3) avec la spécialisation <span id="color-detail">Technologie Web</span>.
                                <br />
                                <br />
                                Je suis passionné par l'informatique. Je suis curieux, motivé et je cherche constamment à approfondir mes compétences.
                            </p>
                            <h4>Mes stages</h4>
                            <ul>
                                <li>
                                    Durant l'été 2019, j'ai été <span id="color-detail">stagiaire développeur</span> au siège de <a href="https://www.cdiscount.com/" target="_blank"  rel="noopener noreferrer" id="lien-cdiscount">Cdiscount</a> à Bordeaux, pour une durée de <span id="color-detail">2 mois</span>.
                                    <br/>
                                    Les différents articles de ce <Link to="/blog/stage/cdiscount" className="previous-page">blog</Link>, retracent les principales missions que j'ai du faire, les compétences acquises/mobilisées ainsi que les difficultés que j'ai rencontré.
                                </li>
                            </ul>
                            <h4>Me contacter</h4>
                            <p>Email : <a href="mailto:lucas.consejo@ynov.com" rel="noopener noreferrer" id="lien-cdiscount">lucas.consejo@ynov.com</a><br/>
                               Tél : <a href="tel:0605231854" rel="noopener noreferrer" id="lien-cdiscount">06 05 23 18 54</a><br/>
                               Formulaire de contact : <a href="http://lucasconsejo.fr/contact" target="_blank" rel="noopener noreferrer" id="lien-cdiscount">http://lucasconsejo.fr/contact</a>
                            </p>  
                            <div className="row">
                                <div className="col-lg-12 mb-5 text-center">
                                    <a href="https://lucasconsejo.fr" alt="cv" className="btn btn-cv" download>Consulter mon CV</a>
                                </div>
                            </div>                 
                        </div>
                    </div>
                </div>
                    
            </div>
        )
    }
}

export default APropos