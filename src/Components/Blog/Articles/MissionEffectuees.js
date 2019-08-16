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
                               <br/>
                               Voici les étapes :
                               <br/>
                               <br/>
                                <ul>
                                    <li>Changer le JDK pour passer à Java 10.</li>
                                    <li>Changer les dépendences selon le besoin dans le pom.xml (Fichier de dépendences de Maven).</li>
                                    <li>Impact sur le code (Il faut réécrire certaines parti du code car il ne convient plus avec Java 10).</li>
                                    <li>Faire des Test Unitaires (TU) pour atteindre au moins 85% de taux de couverture.</li>
                                </ul>
                               
                                Ce qui m'a pris beaucoup de temps, c'était l'impact sur le code. A chaque fois, que je modifiais une partie, une nouvelle erreur apparaissait à cause d'une autre parti, qui fallait donc modifier ensuite.
                                Dans ces cas là, mon plus grand secours était le site Stackoverflow :) Nombreuses de mes erreurs ont déjà été corrigé sur ce site par des développeurs  qui sont tombés sur les mêmes erreurs que moi :)
                                <br />
                                Mais j'ai eu aussi droit à l'aide de Géry Deloge (Référent Java), qui est venu m'aider quand il était disponible afin de traiter ces problèmes :)
                                <br />
                                <br />
                                Au niveau des TU, j'ai réussi à atteindre 87.6% de taux de couverture.
                                <br />
                                <br />
                                Après 3 semaines (soit après 1 mois depuis mon arrivée), ce microservice a enfin été migrer de Java 8 à Java 10 :)
                                <br />
                                Place maintenant à la migration vers Kubernetes :)
                            </p>
                        </div>

                        <div id="blog-part-5">
                            <h3>V. Migration Mésos/Marathon à Kubernetes</h3>

                            <p>
                                Me voilà donc parti pour la migration de Mésos/Marathon vers Kubernetes :)
                                Même principe que pour la migration Java 10, il faut d'abord que je me documente sur Confluence pour savoir par où commencer, sans oublier de compléter la doc que j'écris en parallèle.
                                <br />
                                <br/>
                                Voici les étapes :
                                <br/>
                                <br/>
                                <ol>
                                    <li>Créer un nouveau repository sur tfs pour la config kube de ce microservice, sous le nom : middle-search-loader-offer-config_kube</li>
                                    <li>Compléter ce repos avec des fichiers de config et de déploiement vers kube, pour chaque environement (dev, recette, préprod, prod-bordeaux, prod-paris)</li>
                                    <li>Créer un namespace kube</li>
                                    <li>Créer une pipeline de build pour déployer ce microservice dans le namespace kube</li>
                                    <li>Arrêter le microservice sur Mésos/Marathon</li>
                                    <li>Vérifier que le microservice fonctionne bien sur Kube</li>
                                </ol>
                                
                            </p>

                            <h5>1. Créer un nouveau repository sur tfs</h5>
                            <p>
                                Pour cela, il faut faire un ticket à un autre service (Software Factory). Ce sont eux qui peuvent faire des modifications sur tfs.
                            </p>
                            <h5>2. Compléter ce repos</h5>
                            <p>
                                Une fois le repo créé, il faut le compléter avec des fichiers de config et de deploiement, pour chaque environement.
                                <br />
                                Il y a un exemple sur Confluence. J'ai donc repris ça et je l'ai adapté pour ce microservice.
                            </p>
                            <h5>3. Créer un namespace kube</h5>
                            <p>
                                Il faut faire un nouveau ticket à un autre service, en précisant le nombre de CPU / RAM nécessaire, le nom du namespace, et demander d'avoir les droits. 
                                <br />
                                Pour savoir le nombre de CPU / RAM, je suis allé voir la config de ce microservice sur Mésos/Marathon.
                                <br />
                                Il fallait donc 5 CPU / 20 GbRAM.
                                
                            </p>
                            <h5>4. Créer une pipeline de build</h5>
                            <p>
                                Il faut faire un nouveau ticket à Software Factory, pour qu'il puisse créer une pipeline de build sur tfs, c'est à dire, fusionner 2 repos (le repo code et le repo de config Kube)
                                pour pouvoir build le microservice et pouvoir déployer dans les différents environements.                                
                            </p>
                            <h5>5. Arrêter le microservice sur Mésos/Marathon</h5>
                            <p>
                               Une fois que le microservice a correctement été déployé sur Kubernetes, il faut arrêter ce microservice sur Mésos/Marathon (un clic et c'est réglé :)).                               
                            </p>
                            <h5>6. Vérifier que le microservice fonctionne bien sur Kube</h5>
                            <p>
                               Il faut vérifier dans les logs sur kubes que le microservice récupere bien des données depuis les différentes files Kafka, qu'il indexe bien des produits et des offres dans le moteur Solr et dans la base de données MongoDB.                       
                            </p>
                        </div>

                        <div id="blog-conclusion">
                            <h3>VI. Conclusion</h3>

                            <p>
                                Avec cette mission, j'ai appris beaucoup de choses notamment sur le développement d'un microservice Java avec le framework Spring.
                                <br/>
                                J'ai trouvé ce sujet très intéressant, malgré les nombreux problèmes que j'ai rencontré. Au bizarre que ça puisse paraître, j'ai bien aimé
                                corriger ces erreurs. 
                                <br/>
                                <br/>
                                Pourquoi ? Parce que j'aime me faire du mal ? 
                                <br/>
                                <br/>
                                Non. Parce que ça demande beaucoup de réfléxion, qu'il faut vraiment bien analyser et comprendre chaque erreur avant de pouvoir les traiter une par une.
                                <br/>
                                J'ai dû aussi soliciter mes connaissances afin de pouvoir adapter le code et éviter certains problèmes.
                                <br/>
                                J'étais également le seul de mon service à faire du Java. Cela demandait donc plus de réflexion.
                                <br/>
                                <br/>
                                Mais ce qui me motivait le plus, c'était que ce sujet est important dans le service où je suis. Ça me motivait pour ne pas lâcher les erreurs et a tous faire pour me débloquer. 
                                <br/>
                                <br/>
                                J'ai aussi appris beaucoup de chose au sujet d'Orchestrateur avec Mésos/Marathon et Kubernetes.
                                <br/>
                                J'ai même suivi une formation de 2h30 dans les locaux de Cdiscount, sur le fonctionnement de Kubernetes. C'était très intéressant !
                                <br/>
                                <br/>
                                Au final, j'ai passé environ 1 mois et 1 semaine afin de réaliser cette mission :)
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