import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../../NavbarBlog/NavbarBlog'
import Footer from '../../Footer/FooterBlog'
import SchemaImg from '../../../img/Blog/schema-deuxieme-mission.PNG'

class TroisiemeMission extends Component{

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render(){
        return(
            <div>
                <Navbar />
                <div id="container-blog-cdiscount">
                    <div id="img-fond-troisieme-mission">
                        
                    </div>
                
                    <div className="container">
                        <div id="blog-intro">
                            <p className="previous-page"><Link to="/blog" className="previous-page">Accueil</Link> > <Link to="/blog/stage/cdiscount" className="previous-page">Stage Cdiscount</Link> > <Link to="/blog/stage/cdiscount/article/troisieme-mission-l-aspect-technique" className="previous-page">Article Troisieme mission - l'aspect technique</Link></p>
                            <h2>Troisième mission - l'aspect technique</h2>
                        </div>

                        <div class="blog-part">
                            <h3>I. Le besoin</h3>

                            <p>L'équipe Sword a besoin d'indexer des produits appelé longtail et placement, dans Sorl. Ils ont donc besoin d'un microservice qui puisse récupérer des longtails depuis une file Kafka, pour les indexer dans Sorl.<br/>
                               Ils ont aussi besoin d'un 2ème microservice qui fait la même chose mais pour les placements.
                               <br />
                               <br />
                               Je vais donc devoir développer ces 2 microservices.
                            </p>
                        </div>

                        <div class="blog-part">
                            <h3>II. Avant de commencer</h3>
                            <br/>
                            <ul>
                                <li>
                                    <h5>Demande auprès de différents service :</h5>
                                    <p>Avant de commencer à développer ces microservices, il y a quelque demande à faire au près d'autres services : </p>
                            
                                    <ul>
                                        <li>Demande de création de repos git sur TFS :
                                            <ol>
                                                <li>kafka-loader-longtail et un repo de config kube</li>
                                                <li>kafka-loader-placement et un repo de config kube</li>
                                            </ol>
                                        </li>

                                        <li>Demande de droits sur TFS pour pouvoir clone, pull , push les repos</li>
                                        <li>Demande de droits sur Kube pour pouvoir avoir accès au dashboard et au logs des microservices dans le namespace sponsored-words</li>
                                    </ul>
                                </li>
                                <br/>
                                <li>
                                    <h5>Documentation et Schéma :</h5>
                                    <p>Je dois préparer la documentation de ces microservices pour expliquer ce qu'ils font, décrire la stratégie de test (comment on va tester que tout fonctionne), ainsi que faire un schéma.</p>
                                    <div>
                                        <a href={SchemaImg} target="_blank"><img className="blog-img-size"src={SchemaImg} /></a>
                                    </div>
                                </li>
                                <br/>
                                <li>
                                    <h5>Réunion avec l'équipe Sword :</h5>
                                    <p>Toujours avant de commencer, mais également pendant le développement, il y a eu plusieurs réunion avec Sword pour se mettre d'accord sur ce qui va etre fait, parler de différents problèmes, etc...<br/>
                                    C'est aussi l'occasion pour moi de dire si je suis d'accord avec eux sur les types de données qu'ils vont envoyer dans kafka. Exemple: si dans kafka, ils envoient un prix de type float (c'est à dire en nombre à virgule),
                                    je dois leurs faire remarquer que notre service prefère que le prix soit en nombre entier dans solr. Ça m'évite donc de faire une convertion en plus lors de la dev.</p>
                                </li>
                                <br/>
                                <li>
                                    <h5>Création des Sorl :</h5>
                                    <p>Avec l'aide d'un dévops, je me suis occupé de créer les collections dans Sorl. Je devais me connecter au server Sorl de chaque environnement (dev, recette, preprod, prod-BDX, prod-PAR) et rajouter les schémas sorl et les 
                                        fichiers de config, pour pouvoir ensuite créer les collections.
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <div className="blog-part">
                            <h3>III. Développement kafka-loader-longtail</h3>
                            <p>
                                Me voilà parti pour développer le premier microservice.
                                <br/> 
                                <br/>
                                Pour m'aider à faire cette tâche, j'ai repris l'essentiel du code de middle-search-loader-offer (ma première mission) car cette application lisait des données de files kafka, faisait des traitement et indexer dans solr et dans MongoDB.
                                <br/>
                                Ça tombe bien ! C'est exactement ce que doit faire kafka-loader-longtail <i>sans le MongoDB</i> !
                                <br/>
                                <br/>
                                Les principaux changements que j'ai eu dû adapter, sont les model Kafka, Solr et la normalisation.
                                <br/>
                                Je m'explique :
                                <br/>
                                <br/>
                                Voici ce que contient kakfa lorsque l'équipe Sword y enverra un longtail :

                                Il est donc au format JSON.
                                <br/>
                                Maintenant, dans mon microservice, il faut que je mappe (convertir) ce JSON en Object. Pour faire cela, je dois créer une classe Java, qui contient des variables qui portent les mêmes types et même noms que les champs du JSON.
                                <br/>
                                Cette classe là s'appelle un model.
                                <br/>
                                <br/>
                                Ensuite, je dois faire pareil avec le model Solr.
                                Voici ce qu'enverra mon microservice à Solr :

                                Comme vous pouvez le remarquer, il y a des champs en plus (comme le lastindexdate, ou l'id) qui n'était pas dans le JSON envoyé dans Kakfa.<br/>
                                Ainsi que des types qui ont changer (comme les codesLevel qui sont devenus une seule et même array).
                                <br/>
                                <br/>
                                Ces champs ont été rajouté via la classe de normalisation. Le but est de "normaliser"/adaper les données pour les faire correspondre avec ce qu'attend Solr comme données.

                                Une fois que tout est adapté... et bien c'est terminé ! <i>Si on ne compte pas les test unitaires à faire, bien sûr.</i>
                                <br/>
                                Isabelle a été étonné car elle avait estimé que ce projet allait prendre 10 jours, alors que je l'ai fait en 3-4 jours.
                                <br/>
                                <br/>
                                J'ai ensuite terminé par faire les fichiers de config et de deployments de kube pour kafka-loader-longtail.
                            </p>
                        </div>

                        <div class="blog-part">
                            <h3>IV. Développement kafka-loader-placement</h3>

                            <p>
                               Maintenant que j'ai fais kafka-loader-longtail, la tâche va etre encore plus simple pour kafka-loader-placement.
                               <br/>
                               <br/>
                               J'ai donc repris le code de kafka-loader-longtail et j'ai adapté les models et normalisations pour kafka-loader-placement.
                               <br/>
                               <br/>
                               Voici ce que contient kakfa lorsque l'équipe Sword y enverra un placement :

                               Et voici ce qu'enverra mon microservice à Solr :

                               Ensuite, place au test unitaire et le microservice est fini ! 
                               <br/>
                               <br/>
                               Pour terminer j'ai ajouté les fichiers de config et de deployments de kube pour kafka-loader-placement.
                            </p>
                        </div>

                        <div class="blog-part">
                            <h3>V. Déployment sur Kubernetes et ajout des métrics</h3>                       
                        </div>

                        <div class="blog-conclusion">
                            <h3>VI. Conclusion</h3>
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        )
    }
}

export default TroisiemeMission