import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../../NavbarBlog/NavbarBlog'
import Footer from '../../Footer/FooterBlog'

class AccueilEntreprise extends Component{
    
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render(){
        return(
            <div>
                <Navbar />
                <div id="container-blog-cdiscount">
                    <div id="img-fond-accueil-entreprise">
                        
                    </div>
                
                    <div className="container">
                        <div id="blog-intro">
                            <p className="previous-page"><Link to="/blog" className="previous-page">Accueil</Link> > <Link to="/blog/stage/cdiscount" className="previous-page">Stage Cdiscount</Link> > <Link to="/blog/stage/cdiscount/article/accueil-integration-dans-l-entreprise" className="previous-page">Article Accueil - Intégration dans l'entreprise</Link></p>
                            <h2>Accueil - Intégration dans l'entreprise</h2>

                            <p>Has autem provincias, quas Orontes ambiens amnis imosque pedes Cassii montis illius celsi praetermeans funditur in Parthenium mare, Gnaeus Pompeius superato Tigrane regnis Armeniorum abstractas dicioni Romanae coniunxit.
                            </p>
                        </div>

                        <div className="blog-part">
                            <h3>I. Le premier jour</h3>

                            <p>
                                Je suis arrivé le lundi 1er juillet 2019 à 9h30 et la première étape était d'aller me présenter à l'accueil. J'étais loin d'être le seul arrivant au sein de Cdiscount. J'ai donc attendu ~15min dans la file d'attente.
                                Une fois l'attente terminée, on m'a remis mon badge d'entrée, un cahier de notes, et...<span id="color-detail">une boîte de bienvenue</span> dans l'entreprise avec plein de petits cadeaux. &#128522;
                                <br />
                                <br />
                                Ensuite, j'ai été accueilli par <span id="color-detail">Isabelle Cardoso</span> (<span id="color-detail">Chef de projet</span>) et elle m'a accompagné à mon nouveau bureau des 2 prochains mois. Direction donc un grand open-space nommé "Le cloud", où j'ai rencontré ma nouvelle équipe. &#128578;
                                <br />
                                <span id="color-detail">Stéphane Giauque</span> était aussi présent (j'ai eu mon entretien avec lui et c'est le <span id="color-detail">Directeur métiers IT</span>). Il m'a fourni mon ordinateur portable. J'ai ensuite dû installer le matériel à mon bureau, à savoir : 
                            </p>
                            <ul>
                                <li>Connecter mon ordi portable à un dock</li>
                                <li>Brancher les 2 écrans supplémentaires</li>
                                <li>Brancher le clavier / la souris / le casque audio.</li>
                            </ul>
                            <p>
                                Bien, mon poste est installé ! Me voilà donc avec 3 écrans ! Place maintenant à l'installation des logiciels dont j'aurais besoin pour mes futures missions ainsi que récupérer mes identifiants pour les mails et les différents sites/plateformes de Cdiscount en interne.
                                <br />
                                <br />
                                Parmi tous ces outils, les plus importants sont :
                            </p>
                            <ul>
                                <li><a href="https://products.office.com/fr-fr/microsoft-teams/group-chat-software" target="_blank" rel="noopener noreferrer" className="previous-page">Teams</a> / <a href="https://www.skype.com/fr/" target="_blank" rel="noopener noreferrer"className="previous-page">Skype</a> pour communiquer entre chaque personne de l'équipe mais aussi avec d'autres personnes de d'autres services.</li>
                                <li><a href="https://outlook.live.com/owa/" target="_blank" rel="noopener noreferrer" className="previous-page">Outlook</a> pour les mails</li>
                                <li><a href="https://www.jetbrains.com/idea/" target="_blank" rel="noopener noreferrer" className="previous-page">IntelliJ</a> (dans mon cas) qui est un IDE pour pouvoir programmer en Java.</li>
                                <li><a href="https://visualstudio.microsoft.com/fr/tfs/" target="_blank" rel="noopener noreferrer" className="previous-page">TFS</a> qui fait office de server git au sein de Cdiscount.</li>
                                <li><a href="https://www.atlassian.com/fr/software/confluence" target="_blank" rel="noopener noreferrer" className="previous-page">Confluence</a> (pas important mais très utile) pour trouver differentes documentations pour aider sur différents projets.</li>
                            </ul>
                            <p>
                                Parfait ! Je suis prêt pour commencer ma première mission. &#128526;
                            </p>
                        </div>

                        <div className="blog-part">
                            <h3>II. Présentation de ma première mission</h3>

                            <p>
                                <span id="color-detail">Isabelle</span> m'a donc présenté ma première mission de ce mois-ci. Mais je ne vais pas trop m'attarder dessus, ici, un article y sera dédié.
                                <br />
                                Durant ce mois, je vais devoir migrer un <span id="color-detail">microservice</span> qui est sur Mésos/Marathon, vers <span id="color-detail">Kubernetes</span>. Le microservice (son petit nom est "<span id="color-detail">middle-search-loader-offer</span>") est sous Java 8. Avant de passer à la migration vers Kubernetes, il faut d'abord passer de Java 8 à Java 10.
                                <br />
                                <br />
                                Vous n'avez pas tout compris ? <i>Pas de panique !</i> &#128516; Je vous invite à aller voir l'article dédié à ce sujet. <Link to="/blog/stage/cdiscount/article/la-première-mission-l-aspect-technique" className="previous-page">La première mission - l'aspect technique</Link>
                            </p>
                        </div>

                        <div className="blog-part">
                            <h3>III. Présentation du service / de l'équipe</h3>

                            <span id="color-detail"><i>[A compléter...]</i></span>
                        </div>

                        <div className="blog-part">
                            <h3>IV. Intégration dans l'équipe</h3>
                            <br />
                            <ul>
                                <li>
                                    <h5>L'aspect travail</h5>
                                    <p>
                                        Avant de se lancer complétement dans la mission, il faut prendre connaissance du contexte, du pourquoi on fait ça, où se situe le microservice par rapport aux autres, quelle base de données est appelée, etc...
                                        <br />
                                        Pour ça, il y a <span id="color-detail">Confluence</span> ! Il y a de la documentation écrite par les internes de Cdiscoun, pour presque tout. J'ai donc passé un peu de temps à lire tout ça, en savoir plus sur le contexte global chez Cdiscount,
                                        comment sont reliées les différentes bases de données, etc...
                                        <br />
                                        Mais le gros plus, et pas uniquement pour la doc, mais aussi pour la mission et autres => Si vous êtes bloqués ou perdu, il y aura toujours quelqu'un pour vous aider !
                                    </p>
                                </li>
                                <li>
                                    <h5>L'aspect social</h5>
                                    <p>
                                        Toutes les personnes avec qui j'ai eu l'occasion de parler, sont très souriante, gentille. Il y a une bonne ambiance et tout le monde s'entend bien avec tout le monde. &#128522;
                                        <br/>
                                        Le midi, il y a plusieurs foodtruck qui viennent se placer autour du bâtiment, mais pas loin de Cdiscount, il y a <i><span id="color-detail">Les Halles</span></i>. Là-bas, on peut y manger de tout. C'est un peu Le lieu où manger le midi entre collègue.
                                        Vous y croiserez toujours quelqu'un que vous connaissez de votre équipe et de d'autres équipes, donc c'est très peu probable que vous vous retrouviez seul le midi. &#128523;
                                        <br />
                                        Un soir, <span id="color-detail">Isabelle</span> a proposé à l'équipe IT4IT, une soirée entre collègues <i><span id="color-detail">aux Halles</span></i>, pour souhaiter la bienvenue à tous les nouveaux. C'était très sympa et il y a comme toujours une bonne ambiance. &#128522;
                                    </p>
                                </li>
                                <li>
                                    <h5>L'aspect entreprise</h5>
                                    <p>
                                        Cdiscount est une grande entreprise. Il y a plusieurs outils à prendre en main, différents bâtiments, etc... Pour m'y retrouver, on m'a inscrit à une <span id="color-detail">formation</span> durant une après-midi pour la gestion des outils du SI. J'en ai donc appris plus sur le fonctionnement de Cdiscount en interne.
                                        <br />
                                        J'ai aussi rencontré <i>mon parrain au sein de Cdiscount</i> <span id="color-detail">Fabien Rouget</span> qui m'a fait une visite des locaux pour mieux m'y retrouver.
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <div className="blog-conclusion">
                            <h3><i>Bonus : Unboxing de la boîte de bienvenue</i></h3>

                            Si vous lisez ici, c'est que vous êtes curieux et avez grandement envie de savoir ce que contient cette fameuse boîte de bienvenue... &#128527;
                            <br />
                            <br />
                            <span id="color-detail"><i>[A compléter...]</i></span>
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        )
    }
}

export default AccueilEntreprise