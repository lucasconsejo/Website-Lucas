import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../../NavbarBlog/NavbarBlog'
import Footer from '../../Footer/FooterBlog'

class MissionEffectuees extends Component{

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render(){
        return(
            <div>
                <Navbar />
                <div id="container-blog-cdiscount">
                    <div id="img-fond-mission-effectuees">
                        
                    </div>
                
                    <div className="container">
                        <div id="blog-intro">
                            <p className="previous-page"><Link to="/blog" className="previous-page">Accueil</Link> > <Link to="/blog/stage/cdiscount" className="previous-page">Stage Cdiscount</Link> > <Link to="/blog/stage/cdiscount/article/la-première-mission-l-aspect-technique" className="previous-page">Article Mission effectuées - l'aspect technique</Link></p>
                            <h2>La première mission - l'aspect technique</h2>
                        </div>

                        <div id="blog-part-1">
                            <h3>I. Le besoin</h3>

                            <p>Sur le microservice middle-search-loader-offer, je vais devoir le migrer de Java 8 vers Java 10, puis de Mésos/Marathon vers Kubernetes.</p>
                        </div>

                        <div id="blog-part-2">
                            <h3>II. Contexte / Fonctionnement actuel</h3>

                            <p>
                                L'application est un microservice Java 8 utilisant le framework Spring boot. Il est actuellement placé dans un docker qui est controllé depuis Mésos/Marathon (Orchestrateur).
                                <br />Ce microservice récupère des données de différents produits et différentes offres, depuis 3 files Kafka. Il va ensuite traiter ces données (au format JSON) pour envoyer ça à
                                Solr et MongoDB.
                                <br />
                                <br />Dans mon équipe, je suis le seul à faire du Java, ils font principalement tous du .NET core (C#). Je suis donc le premier de mon service à faire une migration Java / Kubernetes.
                                <br />Pour m'orienter dans cette mission, je dispose de documentation sur Confluence, de d'autres services qui ont déjà fait une migration Java / Kubernetes. Je dois donc en parallèle, 
                                écrire une documentation pour mon service, en décrivant le déroulement de ma migration Java / Kubernetes, pour que les prochaines personnes de mon équipe à devoir faire ça, sauront par où commencer et quoi faire.
                            </p>
                        </div>

                        <div id="blog-part-3">
                            <h3>III. Avant de commencer</h3>
                            <br />
                                <ul>
                                    <li>
                                        <h5>Problème Zookeeper</h5>
                                        <p>
                                            Avant de passer à la migration Java 10, il faut d'abord vérifier que tout fonctionne en local (sur mon ordi). Et bien, comment dire...J'ai passé plus d'une semaine à résoudre beaucoup, beaucoup d'erreurs.
                                            <br /> Ces erreurs sont principalement dû à des problèmes de configuration. Mais... d'où vient le problème exactement ?
                                            <br/>
                                            <br/>
                                            Chaque microservice est "orchestré" par Mesos/Marathon, selon le perimeter où il se situe. Dans un perimeter, tous les microservices peuvent communiquer entre eux. Quand un microservice apparaît dans un perimeter (ici, la zone Search), il n'a pas de configuration. Il doit la demander aux Zookeeper.
                                            <br />
                                            Ce qui fait le lien avec l'exterieur du perimeter, c'est la gateway. Elle récupère des requêtes clients. Si la requête est valide et si elle a l'autorisation, la gateway va redirigé la requête vers un microservice qui peut la traiter.
                                            <br />
                                            <br />
                                            Dans mon cas, lorsque j'essaie d'executer le microservice, il ne peut pas récupérer la configuration au près du zookeeper, car le microservice est en dehors de Mesos/Marathon. Il est en local sur mon ordi.
                                            <br />
                                            <br />
                                            Heuresement, ce ne sera plus un problème après la migration sur Kubernetes. Il n'y aura plus de zookeeper et il y aura un repository de config pour chaque microservice.
                                            Donc à partir de la migration Java 10, je pourrais enlever tout ce qui concerne zookeeper dans les fichiers du microservice. 
                                        </p>
                                    </li>

                                    <li>
                                        <h5>Problème MongoDB</h5>
                                        <p>
                                           Parmi toutes les erreurs que j'ai résolu, il y avait une erreur MongoDB. Une erreur qui est du à la config manquante à cause du problème de Zookeeper.
                                           <br />J'ai donc montré l'erreur à plusieurs développeur Java de différentes équipes et à mon responsable technique, Antoine Noal. Après avoir reffléchi, ils en ont conclus
                                           que je pouvais enlever tout ce qui concerne MongoDB dans les fichiers car il n'est plus vraiment utilisé.
                                           <br />
                                           <br />J'ai donc enlevé MongoDB dans middle-search-loader-offer => Retenez bien ça !
                                        </p>
                                    </li>
                                </ul>
                        </div>

                        <div id="blog-part-4">
                            <h3>IV. Migration Java 8 à 10</h3>

                            <p>
                               C'est parti pour commencer la mission ! Pour cela, je dois me documenter pour savoir par où commencer. Comme dis précédemment, j'ai dû aller chercher les infos sur Confluence, sur la documentation de d'autres équipes.
                               <br />
                               Voici les étapes :
                               
                            </p>
                        </div>

                        <div id="blog-part-5">
                            <h3>V. Migration Mésos/Marathon à Kubernetes</h3>

                            <p>
                                L'application est un microservice Java 8 utilisant le framework Spring boot. Il est actuellement placé dans un docker qui est controllé depuis Mésos/Marathon (Orchestrateur).
                                <br />Ce microservice récupère des données de différents produits et différentes offres, depuis 3 files Kafka. Il va ensuite traiter ces données (au format JSON) pour envoyer ça à
                                Solr et MongoDB.
                                <br />
                                <br />Dans mon équipe, je suis le seul à faire du Java, ils font principalement tous du .NET core (C#). Je suis donc le premier de mon service à faire une migration Java / Kubernetes.
                                <br />Pour m'orienter dans cette mission, je dispose de documentation sur Confluence, de d'autres services qui ont déjà fait une migration Java / Kubernetes. Je dois donc en parallèle, 
                                écrire une documentation pour mon service, en décrivant le déroulement de ma migration Java / Kubernetes, pour que les prochaines personnes de mon équipe à devoir faire ça, sauront par où commencer et quoi faire.
                            </p>
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        )
    }
}

export default MissionEffectuees