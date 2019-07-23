import React, {Component} from 'react';
import '../../css/Blog.css'
import { Link } from 'react-router-dom'
import Navbar from '../NavbarBlog/NavbarBlog'
import imgWelcome from "../../img/Blog/welcome.jpg"
import imgMission from "../../img/Blog/mission.jpg"
import imgCompetence from "../../img/Blog/competence.jpg"
import imgConnaissance from "../../img/Blog/connaissance.jpg"
import imgDifficulte from "../../img/Blog/difficulte.jpg"
import imgBilan from "../../img/Blog/bilan.jpg"
import Footer from '../Footer/FooterBlog'

class AccueilCdiscount extends Component{

    render(){
        return(
            <div className="accueil-blog-bloc">
                <meta name="theme-color" content="#293545"></meta>
                <Navbar /><br /><br />
                <div id="container-blog-cdiscount">
                    <div id="img-fond-accueil">
                        
                    </div>
                
                    <div className="container">
                        <div id="blog-intro">
                            <p className="previous-page"><Link to="/blog" className="previous-page">Accueil</Link> > <Link to="/blog/stage/cdiscount" className="previous-page">Stage Cdiscount</Link></p>
                            <h2>Blog de stage - Développeur à Cdiscount</h2><br/>

                            <h4>Présentation de l'entreprise</h4>
                            <p>
                                <a href="https://www.cdiscount.com/" target="_blank"  rel="noopener noreferrer" id="lien-cdiscount">Cdiscount</a> est une enseigne de e-commerce créée en 1998 avant de devenir deux ans plus tard une filiale du Groupe Casino. A l’origine simple vendeur de CD d’occasion son offre s’est peu à peu diversifiée pour aujourd’hui proposer plus de 30 millions de produits à la vente réparties en 15 univers (jeux vidéo, informatique, literie, Auto Moto…). Une diversification que l’on retrouve au niveau des services proposés avec entre autres : forfaits mobile, services financiers, fournisseur d’électricité, voyage, service de déménagement ainsi qu'un nouveau service santé.
                                <br/>
                                <br/>L'entreprise, présidée par <span id="color-detail">Emmanuel Grenier</span>, est depuis 2000 une filiale du groupe Casino qui en détient aujourd'hui la quasi-totalité du capital.
                                <br />
                                <br />
                                Avec un chiffre d'affaires de <span id="color-detail">2 137 millions €</span> en 2017, Cdiscount est la plus grosse entreprise <span id="color-detail">d'Aquitaine</span>.
                                <br/><i><a href="https://www.verif.com/Hit-parade/01-CA/02-Par-region/E-Aquitaine" target="_blank"  rel="noopener noreferrer" id="lien-cdiscount">Voir le classement</a></i> 
                                <br/>
                                <br/>Au 3ème trimestre 2018, Cdiscount était le <span id="color-detail">2ème site e-commerce le plus visité en France</span> après Amazon, avec 18 946 000 visiteurs uniques moyens par mois.
                                <br/><i><a href="https://img-0.journaldunet.com/MpmY1Yo_8_XqJicmV-NWOD8GOo0=/1080x/smart/f177154130d34a15be7ea998380dc22a/ccmcms-jdn/10980278.jpg" target="_blank"  rel="noopener noreferrer" id="lien-cdiscount">Voir le classement</a></i> 
                                <br/>
                                <br/>Le siège social est situé à Bordeaux et est proche de l'entrepôt principal, à Cestas.
                                <br/><i>Siege social</i> : <a href="https://www.google.fr/maps/place/120+Quai+de+Bacalan,+33300+Bordeaux/@44.8607345,-0.554989,638m/data=!3m2!1e3!4b1!4m5!3m4!1s0xd5528904bae78a7:0xafde0f2c76a2fcea!8m2!3d44.8607345!4d-0.5528003" target="_blank"  rel="noopener noreferrer" id="lien-cdiscount">120-126 quai de Bacalan, 33000 Bordeaux</a>&nbsp;&nbsp;&nbsp;&nbsp;<i>Tél</i> : <a href="tel:0770631681" id="lien-cdiscount">07 70 63 16 81</a>
                                <br/><i>Entrepôt principal</i> : <a href="https://www.google.fr/maps/place/Chemin+du+Pot+au+Pin,+33610+Cestas/@44.7126109,-0.7593654,1169m/data=!3m1!1e3!4m5!3m4!1s0xd54c2b6ca2028b3:0xbc29a4b049d46a03!8m2!3d44.7120951!4d-0.7595002" target="_blank"  rel="noopener noreferrer" id="lien-cdiscount">Chemin du Pot au Pin, 33610 Cestas</a>&nbsp;&nbsp;&nbsp;&nbsp;<i>Tél</i> : <a href="tel:0970809050" id="lien-cdiscount">09 70 80 90 50</a>
                                <br/>
                                <br/><b>Mon stage a donc lieu au siège social de Cdiscount à Bordeaux, où j'y suis développeur Java, du 1er Juillet au 13 Septembre 2019.</b>
                                <br/>
                                <br/>
                            </p>
                    
                            <h3>Articles <span id="writter">écrit par Lucas Consejo</span></h3>
                            <ul>
                                <li>
                                    <Link to="/blog/stage/cdiscount/article/accueil-integration-dans-l-entreprise" className="lien">
                                        <div id="bloc-stage-list">
                                            <div id="blog-stage-img-list">
                                                <img src={imgWelcome} alt="img welcome" />
                                            </div>
                                            <div id="blog-stage-txt-list">
                                                <h5>Accueil - Intégration dans l'entreprise</h5>
                                                <p className="lien-p">Publié : <span className="date">12 juillet 2019</span></p>
                                                <p className="lien-p lien-p-last">Dernière modification : <span className="date">23 juillet 2019</span></p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/blog/stage/cdiscount/article/mission-effectuees-l-aspect-technique" className="lien">
                                        <div id="bloc-stage-list">
                                            <div id="blog-stage-img-list">
                                                <img src={imgMission} alt="img mission" />
                                            </div>
                                            <div id="blog-stage-txt-list">
                                                <h5>Mission effectuées - l'aspect technique</h5>
                                                <p className="lien-p">Publié : <span className="date">12 juillet 2019</span></p>
                                                <p className="lien-p lien-p-last">Dernière modification : <span className="date">12 juillet 2019</span></p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/blog/stage/cdiscount/article/connaissances-mobilisees" className="lien">
                                        <div id="bloc-stage-list">
                                            <div id="blog-stage-img-list">
                                                <img src={imgConnaissance} alt="img connaissance" />
                                            </div>
                                            <div id="blog-stage-txt-list">
                                                <h5>Connaissances mobilisées</h5>
                                                <p className="lien-p">Publié : <span className="date">12 juillet 2019</span></p>
                                                <p className="lien-p lien-p-last">Dernière modification : <span className="date">12 juillet 2019</span></p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/blog/stage/cdiscount/article/difficultes-rencontrees-et-les-solutions-apportees" className="lien">
                                        <div id="bloc-stage-list">
                                            <div id="blog-stage-img-list">
                                                <img src={imgDifficulte} alt="img connaissance" />
                                            </div>
                                            <div id="blog-stage-txt-list">
                                                <h5>Difficultés rencontrées et les solutions apportées</h5>
                                                <p className="lien-p">Publié : <span className="date">12 juillet 2019</span></p>
                                                <p className="lien-p lien-p-last">Dernière modification : <span className="date">12 juillet 2019</span></p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/blog/stage/cdiscount/article/competences-acquises" className="lien">
                                        <div id="bloc-stage-list">
                                            <div id="blog-stage-img-list">
                                                <img src={imgCompetence} alt="img competence" />
                                            </div>
                                            <div id="blog-stage-txt-list">
                                                <h5>Compétences acquises</h5>
                                                <p className="lien-p">Publié : <span className="date">12 juillet 2019</span></p>
                                                <p className="lien-p lien-p-last">Dernière modification : <span className="date">12 juillet 2019</span></p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/blog/stage/cdiscount/article/Le-bilan-de-ce-stage" className="lien">
                                        <div id="bloc-stage-list">
                                            <div id="blog-stage-img-list">
                                                <img src={imgBilan} alt="img bilan" />
                                            </div>
                                            <div id="blog-stage-txt-list">
                                                <h5>Le bilan de ce stage</h5>
                                                <p className="lien-p">Publié : <span className="date">12 juillet 2019</span></p>
                                                <p className="lien-p lien-p-last">Dernière modification : <span className="date">12 juillet 2019</span></p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                            <br />
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}

export default AccueilCdiscount