import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../../NavbarBlog/NavbarBlog'
import Footer from '../../Footer/FooterBlog'
import SchemaImg from '../../../img/Blog/schema-deuxieme-mission.PNG'

class DeuxiemeMission extends Component{

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render(){
        return(
            <div>
                <Navbar />
                <div id="container-blog-cdiscount">
                    <div id="img-fond-deuxieme-mission">
                        
                    </div>
                
                    <div className="container">
                        <div id="blog-intro">
                            <p className="previous-page"><Link to="/blog" className="previous-page">Accueil</Link> > <Link to="/blog/stage/cdiscount" className="previous-page">Stage Cdiscount</Link> > <Link to="/blog/stage/cdiscount/article/deuxieme-mission-l-aspect-technique" className="previous-page">Article Deuxieme mission - l'aspect technique</Link></p>
                            <h2>Deuxième mission - l'aspect technique</h2>
                        </div>

                        <div class="blog-part">
                            <h3>I. Le besoin</h3>

                            <p>Sur les 3 microservice <span id="color-detail">export-configuration</span> / <span id="color-detail">offer-export-publication</span> / <span id="color-detail">product-export-publication</span>, je vais devoir les migrer de <span id="color-detail">Java 8</span> vers <span id="color-detail">Java 10</span>, puis de <span id="color-detail">Mésos</span>/<span id="color-detail">Marathon</span> vers <span id="color-detail">Kubernetes</span>.<br />
                            Une nouvelle migration donc. Mais ça va être plus simple puisque j'ai déjà fais ça pour la mission précédente, je sais quoi faire et par où commencer. &#128521;</p>
                        </div>

                        <div class="blog-part">
                            <h3>II. Contexte / Fonctionnement actuel</h3>

                            <p>
                                Ces application sont des microservices Java 8 utilisant le framework <span id="color-detail">Spring boot</span>. Ils sont actuellement placés dans des <span id="color-detail">docker</span> qui sont controllés depuis Mésos/Marathon (Orchestrateur).
                                <br />Le but de ces microservices, est d'exporter des produits ou des offres en fichier CSV et de l'envoyer en FTP à CEPH (c'est un server cloud).
                                <br /><br />
                               <ul>
                                   <li><span id="color-detail">Export-configuration</span>: Ce microservice récupère des données de configutation d'offre ou de produit pour les envoyer à 2 files Kafka (Soit à la file pour les offres, soit à la file des produits).</li>
                                   <br />
                                   <li><span id="color-detail">Offer-export-publication</span>: Ce microservice récupère des données de configutation d'offre depuis la file Kafka offer. Selon, la config reçu, il va récupérer des données de MongoDB et va en générer un fichier CSV. Ce fichier sera ensuite envoyé en FTP à CEPH.</li>
                                   <br />
                                   <li><span id="color-detail">Product-export-publication</span>: Ce microservice fait la même chose qu'<span id="color-detail">offer-export-publication</span> mais traite des produits à la place des offres.</li>
                               </ul>
                            </p>
                        </div>

                        <div class="blog-part">
                            <h3>III. Avant de commencer</h3>
                            <br />
                                <ul>
                                    <li>
                                        <h5>Problème de documentation</h5>
                                        <p>
                                           Comme dit pour la mission précédente, avant de passer à la migration vers Java 10, il faut d'abord se documenter. Mais... pour ces 3 microservices, leurs fonctionnements étaient un peu vague. Il n'y avait pas de documentation, ni de schéma.
                                            <br />
                                            <br />
                                            <span id="color-detail"><i>Mais comment ai-je fais pour commencer ?</i></span> &#129300;
                                            <br/>
                                            <br/>
                                            J'ai donc dû commencer par faire cette documentation manquante. Pour cela, j'ai analysé le code de chacun de ces microservices (en debug) pour comprendre ce qu'ils font étape par étape.
                                            <br />
                                            J'ai aussi analysé les fichiers de configuration afin de voir quelles services sont utilisés (ex: Solr, Kafka, MongoDB, Ceph, etc...)
                                            <br />
                                            <i>Cette analyse m'a aussi permis d'écrire le II. Contexte / Fonctionnement actuel de cette article.</i>
                                            <br />
                                            <br />
                                            Une fois ceci fait, j'ai fais un schéma pour les représenter et pour ensuite aller voir Antoine Noal afin de voir avec lui si le fonctionnement de ces microservice est correcte.
                                        </p>
                                        
                                        <div>
                                            <a href={SchemaImg} target="_blank"><img className="blog-img-size"src={SchemaImg} /></a>
                                        </div>
                                    </li>

                                    <li>
                                        <h5>Le retour du problème <span id="color-detail">MongoDB</span></h5>
                                        <p>
                                            Vous souvenez-vous que j'ai dû enlever le MongoDB lors de la mission précédente ? &#128565;
                                            <br/>
                                            <br/>
                                            Je pense que vous vous en doutez, mais après avoir analysé les 3 microservices, j'ai vu qu'offer-export-publication et product-export-publication utilisaient le même MongoDB que j'ai enlevé pour middle-search-loader-offer.
                                            <br/>
                                            J'ai donc dû rajouter de nouveau, tous les fichiers qui comporter MongoDB et j'ai dû les adapter afin de le faire fonctionner cette fois-ci.
                                            <br/>
                                            <br/>
                                            <i>Heurement que git est là ! J'ai pû récupérer tous les fichiers que j'avais retiré en retournant sur les commits précedents.</i> &#128554;
                                        </p>
                                    </li>

                                    <li>
                                        <h5>Problème <span id="color-detail">Mésos/Marathon</span></h5>
                                        <p>
                                            Voilà un problème assez embêttant. Je suis allé voir les logs sur Mésos/Marathon, de chacun de ces microservices. Et sur tout les environements (dev, recette, préprod et même les prod), ils n'y en a aucun qui fonctionnement correctement.
                                            <br />
                                            <br />
                                            J'ai alerté <span id="color-detail">Isabelle Cardoso</span> et elle m'a répondu une réponse assez cruelle. &#128546; 
                                            <br />
                                            "Essaie de corriger ce que tu peux mais sinon, malheureusement, notre mission est de juste migrer ces microservices."
                                            <br />
                                            <br />
                                            Par la suite, je n'ai pas pû faire grand chose.
                                        </p>
                                    </li>
                                </ul>
                        </div>

                        <div class="blog-part">
                            <h3>IV. Migration Java 8 à 10</h3>

                            <p>
                                Bien ! Me voilà de nouveau parti pour faire une migration Java 8 à Java 10, mais pour 3 microservices. &#128527;
                               <br />
                               <br/>
                               Pour rappel, voici les étapes :
                               <br/>
                               <br/>
                                <ul>
                                    <li>Changer le JDK pour passer à Java 10.</li>
                                    <li>Changer les dépendences selon le besoin dans le pom.xml (Fichier de dépendences de Maven).</li>
                                    <li>Impact sur le code (Il faut réécrire certaines parti du code car il ne convient plus avec Java 10).</li>
                                    <li>Faire des Test Unitaires (TU) pour atteindre au moins 80% de taux de couverture.</li>
                                </ul>
                               
                               J'ai choisi de commencer par export-configuration car c'est celui qui me semblait le plus simple à faire. J'avais tord. J'ai eu un peu de mal à adapter le code parce que je ne savais pas si
                               j'avais changé quelque chose qui ne fallait pas ou si ces erreurs étaient déjà présente avant. Mais rassurez-vous, je m'en suis bien sorti.
                               <br />  
                               <br />
                               Pour offer-export-publication et product-export-publication, il y avait un soucis lors de la génération du fichier CSV. Ce fichier est stocké en local avant d'être envoyé à CEPH. Mais imaginons que ce fichier fasse 20GB ! Il va prendre tout l'espace de stockage sur Kubernetes.
                               Après en avoir parler à un <span id="color-detail">Devops</span> et à <span id="color-detail">Isabelle</span>, ils en ont conclus que ces microservices ne seront pas migrer vers Kubernetes, mais plutôt sur une VM (Virtual Machine). 
                            </p>
                        </div>

                        <div class="blog-conclusion">
                            <h3>V. Conclusion</h3>

                            <p>
                                Une fois de plus, avec cette mission, j'ai continué à en apprendre plus sur le framework <span id="color-detail">Spring Boot</span>.
                                <br/>
                                Malgré les différents problèmes qu'avaient ces microservices, j'ai quand même apprécié travailler sur ce sujet, parce que ce n'était pas 1, mais 3 microservices à traiter en même temps.
                                <br/>
                                J'ai aussi continué à monter en compétences en Java mais aussi à mieux corriger des erreurs et à éviter celle que j'avais déjà eu lors de la mission précédente.
                                <br/>
                                <br/>
                                <b>Au final, j'ai passé environ 1 mois afin de réaliser cette mission</b> &#128522;
                            </p>
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        )
    }
}

export default DeuxiemeMission