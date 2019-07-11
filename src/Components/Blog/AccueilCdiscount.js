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
                <Navbar />
                <div id="container-blog-cdiscount">
                    <div id="img-fond-accueil">
                        
                    </div>
                
                    <div className="container">
                        <div id="blog-intro">
                            <h2>Blog de stage - Développeur à Cdiscount</h2>

                            <p>
                                Has autem provincias, quas Orontes ambiens amnis imosque pedes Cassii montis illius celsi praetermeans funditur in Parthenium mare, Gnaeus Pompeius superato Tigrane regnis Armeniorum abstractas dicioni Romanae coniunxit.
                            </p>
                    
                            <h3>Articles</h3>
                            <ul>
                                <li>
                                    <Link to="/blog/stage/cdiscount/article/accueil-integration-dans-l-entreprise" className="lien">
                                        <div id="bloc-stage-list">
                                            <div id="blog-stage-img-list">
                                                <img src={imgWelcome} alt="img welcome" />
                                            </div>
                                            <div id="blog-stage-txt-list">
                                                <h5>Accueil - Intégration dans l'entreprise</h5>
                                                <p className="lien-p">Publié : 11 juillet 2019</p>
                                                <p className="lien-p">Dernière modification : 11 juillet 2019</p>
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
                                                <p className="lien-p">Publié : 11 juillet 2019</p>
                                                <p className="lien-p">Dernière modification : 11 juillet 2019</p>
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
                                                <p className="lien-p">Publié : 11 juillet 2019</p>
                                                <p className="lien-p">Dernière modification : 11 juillet 2019</p>
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
                                                <p className="lien-p">Publié : 11 juillet 2019</p>
                                                <p className="lien-p">Dernière modification : 11 juillet 2019</p>
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
                                                <p className="lien-p">Publié : 11 juillet 2019</p>
                                                <p className="lien-p">Dernière modification : 11 juillet 2019</p>
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
                                                <p className="lien-p">Publié : 11 juillet 2019</p>
                                                <p className="lien-p">Dernière modification : 11 juillet 2019</p>
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