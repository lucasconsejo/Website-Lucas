import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../../NavbarBlog/NavbarBlog'
import Footer from '../../Footer/FooterBlog'
import SchemaImg from '../../../img/Blog/schema-troisieme-mission.PNG'
import LongtailImg from '../../../img/Blog/longtail-json.png'
import PlacementImg from '../../../img/Blog/placement-json.png'

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

                        <div className="blog-part">
                            <h3>I. Le besoin</h3>

                            <p>L'équipe <span id="color-detail">Sword</span> a besoin d'indexer des produits appelé longtail et placement, dans <span id="color-detail">Sorl</span>. Ils ont donc besoin d'un microservice qui puisse récupérer des longtails depuis une file <span id="color-detail">Kafka</span>, pour les indexer dans <span id="color-detail">Sorl</span>.<br/>
                               Ils ont aussi besoin d'un 2ème microservice qui fait la même chose mais pour les placements.
                               <br />
                               <br />
                               Je vais donc devoir développer ces 2 microservices. &#128521;    
                            </p>
                        </div>

                        <div className="blog-part">
                            <h3>II. Avant de commencer</h3>
                            <br/>
                            <ul>
                                <li>
                                    <h5>Demande auprès de différents services :</h5>
                                    <p>Avant de commencer à développer ces microservices, il y a quelques demandes à faire auprès d'autres services : </p>
                            
                                    <ul>
                                        <li>Demande de création de repos git sur <span id="color-detail">TFS</span> :
                                            <ol>
                                                <li>kafka-loader-longtail et un repo de config kube</li>
                                                <li>kafka-loader-placement et un repo de config kube</li>
                                            </ol>
                                        </li>

                                        <li>Demande de droits sur <span id="color-detail">TFS</span> pour pouvoir clone, pull , push les repos.</li>
                                        <li>Demande de droits sur Kube pour pouvoir avoir accès au dashboard et au logs des microservices dans le namespace <span id="color-detail">sponsored-words</span>.</li>
                                    </ul>
                                </li>
                                <br/>
                                <li>
                                    <h5>Documentation et Schéma :</h5>
                                    <p>Je dois préparer la documentation de ces microservices pour expliquer ce qu'ils font, décrire la stratégie de test (comment on va tester que tout fonctionne), ainsi que faire un schéma.</p>
                                    <div>
                                      <a href={SchemaImg} target="_blank" rel="noopener noreferrer"><img className="blog-img-size" src={SchemaImg} /></a>
                                    </div>
                                </li>
                                <br/>
                                <li>
                                    <h5>Réunion avec l'équipe <span id="color-detail">Sword</span> :</h5>
                                    <p>Toujours avant de commencer, mais également pendant le développement, il y a eu plusieurs réunion avec Sword pour se mettre d'accord sur ce qui va etre fait, parler de différents problèmes, etc...<br/>
                                    C'est aussi l'occasion pour moi de dire si je suis d'accord avec eux sur les types de données qu'ils vont envoyer dans kafka. Exemple: si dans kafka, ils envoient un prix de type float (c'est à dire en nombre à virgule),
                                    je dois leurs faire remarquer que notre service prefère que le prix soit en nombre entier dans solr. Ça m'évite donc de faire une convertion en plus lors de la dev.</p>
                                </li>
                                <br/>
                                <li>
                                    <h5>Création des <span id="color-detail">Sorl</span> :</h5>
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
                                Pour m'aider à faire cette tâche, j'ai repris l'essentiel du code de <span id="color-detail">middle-search-loader-offer</span> (ma première mission) car cette application lisait des données de files <span id="color-detail">kafka</span>, faisait des traitement et indexer dans <span id="color-detail">Solr</span> et dans <span id="color-detail">MongoDB</span>.
                                <br/>
                                Ça tombe bien ! C'est exactement ce que doit faire <span id="color-detail">kafka-loader-longtail</span> <i>sans le <span id="color-detail">MongoDB</span></i> ! &#128527;    
                                <br/>
                                <br/>
                                Les principaux changements que j'ai eu dû adapter, sont les model Kafka, Solr et la normalisation.
                                <br/>
                                Je m'explique :
                                <br/>
                                <br/>
                                Voici ce que contient kakfa lorsque l'équipe Sword y enverra un <span id="color-detail">longtail</span> :
                            </p>
                            <div>
                                <a href={LongtailImg} target="_blank" rel="noopener noreferrer"><img src={LongtailImg} /></a>
                            </div>
                            <p>
                                Il est donc au format <span id="color-detail">JSON</span>.
                                <br/>
                                Maintenant, dans mon microservice, il faut que je mappe (convertir) ce JSON en Object. Pour faire cela, je dois créer une classe Java, qui contient des variables qui portent les mêmes types et même noms que les champs du JSON.
                                <br/>
                                Cette classe là s'appelle un <span id="color-detail">model</span>.
                                <br/>
                                <br/>
                                Ensuite, je dois faire pareil avec le model Solr.
                                Voici ce qu'enverra mon microservice à <span id="color-detail">Solr</span> :
                                <br/>
                                <br/>
                                <span id="color-detail"><i>[A compléter...]</i></span>
                                <br/>
                                <br/>

                                Comme vous pouvez le remarquer, il y a des champs en plus (comme le lastindexdate, ou l'id) qui n'était pas dans le JSON envoyé dans Kakfa.<br/>
                                Ainsi que des types qui ont changer (comme les codesLevel qui sont devenus une seule et même array).
                                <br/>
                                <br/>
                                Ces champs ont été rajouté via la classe de normalisation. Le but est de "normaliser"/adaper les données pour les faire correspondre avec ce qu'attend Solr comme données.
                                <br/>
                                Une fois que tout est adapté... et bien c'est terminé ! <i>Si on ne compte pas les test unitaires à faire, bien sûr.</i> &#128527;    
                                <br/>
                                <span id="color-detail">Isabelle Cardoso</span> a été étonné car elle avait estimé que ce projet allait prendre 10 jours, alors que je l'ai fait en 3-4 jours.    
                                <br/>
                                <br/>
                                J'ai ensuite terminé par faire les fichiers de config et de deployments de kube pour <span id="color-detail">kafka-loader-longtail</span>. &#128524;    
                            </p>
                        </div>

                        <div className="blog-part">
                            <h3>IV. Développement kafka-loader-placement</h3>

                            <p>
                               Maintenant que j'ai fais <span id="color-detail">kafka-loader-longtail</span>, la tâche va etre encore plus simple pour <span id="color-detail">kafka-loader-placement</span>.
                               <br/>
                               <br/>
                               J'ai donc repris le code de <span id="color-detail">kafka-loader-longtail</span> et j'ai adapté les models et normalisations pour <span id="color-detail">kafka-loader-placement</span>. &#128077;    
                               <br/>
                               <br/>
                               Voici ce que contient kakfa lorsque l'équipe Sword y enverra un <span id="color-detail">placement</span> :
                            </p>
                            <div>
                               <a href={PlacementImg} target="_blank" rel="noopener noreferrer"><img src={PlacementImg}/></a>
                            </div>
                            <p>
                               Et voici ce qu'enverra mon microservice à <span id="color-detail">Solr</span> :
                               <br/>
                               <br/>
                               <span id="color-detail"><i>[A compléter...]</i></span>
                               <br/>
                               <br/>

                               Ensuite, place au test unitaire et le microservice est fini ! &#128526;     
                               <br/>
                               <br/>
                               Pour terminer j'ai ajouté les fichiers de config et de deployments de kube pour <span id="color-detail">kafka-loader-placement</span>. &#128524;    
                            </p>
                        </div>

                        <div className="blog-part">
                            <h3>V. Déployment sur Kubernetes et ajout des métrics</h3>
                            <br />
                            <ul>
                                <li>
                                    <h5>Déploiement :</h5>
                                    <p>Après avoir développer ces 2 microservices, il faut maintenant les deployer sur <span id="color-detail">Kube</span>. <br/>
                                        J'ai donc commencé par deployer dans l'environnement de dev. Avant de pouvoir le déployer en recette, il faut s'assurer qu'il fonctionne bien en dev.
                                        Pour cela, j'ai un outil qui me permet d'envoyer les longtails ou des placements dans les files Kafka. Il me suffit ensuite de vérifier dans les logs des microservices s'ils récupèrent bien les données depuis les files, et
                                        de vérifier dans Solr que les longtails ou les placements sont bien indexés.
                                        <br />
                                        <br />
                                        Maintenant que je me suis assuré que tout fonctionne, je peux les déployer en <span id="color-detail">recette</span>. &#128073;    
                                        <br />
                                        Même principe que pour la dev, il faut vérifier que tout fonctionne avant de passer à l'environnement suivant.
                                        <br/>
                                        <i>Mais en tant que développeur, je n'ai uniquement le droit de déployer en dev et recette. Pour passer en REQ, Preprod et Prod, c'est un autre service qui s'en charge.</i> &#129335;
                                    </p>   
                                </li>
                                <li>
                                    <h5>Ajout des <span id="color-detail">métrics</span> :</h5>
                                    <p>
                                        Les <span id="color-detail">métrics</span> permettent de récuperer des informations sur un microservice en temps réel. Ces données peuvent être utilisés pour faire des <span id="color-detail">graphiques</span> afin de vérifier si tout va bien ou non. &#128076;    
                                        <br/>
                                        Dans les cas de <span id="color-detail">kafka-loader-longtail</span> et <span id="color-detail">kafka-loader-placement</span>, j'ai dû ajouter des métrics pour savoir à quel moment il y a eu une insertion/suppression d'un longtail/placement dans Solr, pour chaque environnement.
                                        <br/>
                                        Mais également, un métric pour voir les lags/ralentissements des files kafka.
                                        <br/>
                                        <br/>
                                        Une fois les métrics ajoutés, il faut créer des graphiques sur <a href="https://grafana.com/" target="_blank" rel="noopener noreferrer" className="previous-page">Grafana</a>.
                                        <br/>
                                        Voici le résultat: 
                                        <br/>
                                        <br/>
                                        <span id="color-detail"><i>[A compléter...]</i></span>
                                        <br/>
                                        <br/>
                                        Sur ce dashboard, j'ai ajouté :
                                    </p>
                                    <ul>
                                        <li>La moyenne d'insertion et de suppression par heure.</li>
                                        <li>2 graphiques sur l'insertion et suppression en temps réel avec un compteur en dessous.</li>
                                        <li>1 graphique sur le lag kafka en temps réel.</li>
                                    </ul>
                                    <p>
                                        <br/>
                                        <i>Tout en haut du dashboard, j'ai aussi ajouté des variables qui permettent de changer d'environnement. Cela mettra à jour les graphiques selon l'environnement choisi.</i>
                                    </p>   
                                </li>
                            </ul>
                                      
                        </div>

                        <div className="blog-conclusion">
                            <br />
                            <h3>VI. Conclusion</h3>
                            Encore une fois, j'ai trouvé ce sujet très intéressant et j'ai pû developper 2 nouvelles applications qui seront utile et necessaire pour le projet d'un autre service.
                            <br/>J'ai aussi continué à en apprendre plus sur le framework <span id="color-detail">Spring Boot</span> mais également appris de nouvelle chose, notament sur les <span id="color-detail">métrics</span> et l'utilité de faire des <span id="color-detail">graphiques</span> pour consulter des données en temps réel.
                            <br/>                        
                            <br/>
                            <b>Au final, j'ai passé environ 3 semaines afin de réaliser cette mission</b> &#128522;                        
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        )
    }
}

export default TroisiemeMission