import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../../NavbarBlog/NavbarBlog'
import Footer from '../../Footer/FooterBlog'

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
                            <p className="previous-page"><Link to="/blog" className="previous-page">Accueil</Link> > <Link to="/blog/stage/cdiscount" className="previous-page">Stage Cdiscount</Link> > <Link to="/blog/stage/cdiscount/article/la-première-mission-l-aspect-technique" className="previous-page">Article Mission effectuées - l'aspect technique</Link></p>
                            <h2>Troisième et dernière mission - l'aspect technique</h2>
                        </div>

                        <div class="blog-part">
                            <h3>I. Le besoin</h3>

                            <p>Sur le microservice <span id="color-detail">middle-search-loader-offer</span>, je vais devoir le migrer de <span id="color-detail">Java 8</span> vers <span id="color-detail">Java 10</span>, puis de <span id="color-detail">Mésos</span>/<span id="color-detail">Marathon</span> vers <span id="color-detail">Kubernetes</span>.</p>
                        </div>

                        <div class="blog-part">
                            <h3>II. Contexte / Fonctionnement actuel</h3>

                            <p>
                                L'application est un microservice <span id="color-detail">Java 8</span> utilisant le framework <span id="color-detail">Spring boot</span>. Il est actuellement placé dans un <span id="color-detail">docker</span> qui est controllé depuis <span id="color-detail">Mésos</span>/<span id="color-detail">Marathon</span> (Orchestrateur).
                                <br />Ce microservice récupère des données de différents produits et différentes offres, depuis 3 files <span id="color-detail">Kafka</span>. Il va ensuite traiter ces données (au format <span id="color-detail">JSON</span>) pour envoyer ça à <span id="color-detail">Solr</span> et <span id="color-detail">MongoDB</span>. &#x1F44D;
                                <br />
                                <br />Dans mon équipe, je suis le seul à faire du <span id="color-detail">Java</span> &#128550;, ils font principalement tous du <span id="color-detail">.NET core</span> (<span id="color-detail">C#</span>). Je suis donc le premier de mon service à faire une migration <span id="color-detail">Java</span> / <span id="color-detail">Kubernetes</span>.
                                <br />Pour m'orienter dans cette mission, je dispose de documentation sur <a href="https://www.atlassian.com/fr/software/confluence" target="_blank" className="previous-page">Confluence</a>, de d'autres services qui ont déjà fait une migration <span id="color-detail">Java</span> / <span id="color-detail">Kubernetes</span>. Je dois donc en parallèle, 
                                écrire une documentation pour mon service, en décrivant le déroulement de ma migration <span id="color-detail">Java</span> / <span id="color-detail">Kubernetes</span>, pour que les prochaines personnes de mon équipe à devoir faire ça, sauront par où commencer et quoi faire. &#128523;
                            </p>
                        </div>

                        <div class="blog-part">
                            <h3>III. Avant de commencer</h3>
                            <br />
                                <ul>
                                    <li>
                                        <h5>Problème <span id="color-detail">Zookeeper</span></h5>
                                        <p>
                                            Avant de passer à la migration <span id="color-detail">Java 10</span>, il faut d'abord vérifier que tout fonctionne en local (sur mon ordi). Et bien, comment dire...J'ai passé plus d'une semaine à résoudre beaucoup, beaucoup d'erreurs.
                                            <br /> Ces erreurs sont principalement dû à des problèmes de configuration. 
                                            <br />
                                            <br />
                                            <span id="color-detail"><i>Mais... d'où vient le problème exactement ?</i></span> &#129300;
                                            <br/>
                                            <br/>
                                            Chaque microservice est "orchestré" par <span id="color-detail">Mésos</span>/<span id="color-detail">Marathon</span>, selon le perimeter où il se situe. Dans un perimeter, tous les microservices peuvent communiquer entre eux. Quand un microservice apparaît dans un perimeter (ici, la zone <span id="color-detail">Search</span>), il n'a pas de configuration. Il doit la demander aux <span id="color-detail">Zookeeper</span>.
                                            <br />
                                            Ce qui fait le lien avec l'exterieur du perimeter, c'est la <span id="color-detail">gateway</span>. Elle récupère des requêtes clients. Si la requête est valide et si elle a l'autorisation, la <span id="color-detail">gateway</span> va redirigé la requête vers un microservice qui peut la traiter.
                                            <br />
                                            <br />
                                            Dans mon cas, lorsque j'essaie d'executer le microservice, il ne peut pas récupérer la configuration au près du <span id="color-detail">Zookeeper</span>, car le microservice est en dehors de <span id="color-detail">Mésos</span>/<span id="color-detail">Marathon</span>. Il est en local sur mon ordi.
                                            <br />
                                            <br />
                                            Heuresement, ce ne sera plus un problème après la migration sur <span id="color-detail">Kubernetes</span>. Il n'y aura plus de <span id="color-detail">Zookeeper</span> et il y aura un repository de config pour chaque microservice.
                                            Donc à partir de la migration <span id="color-detail">Java 10</span>, je pourrais enlever tout ce qui concerne <span id="color-detail">Zookeeper</span> dans les fichiers du microservice. 
                                        </p>
                                    </li>

                                    <li>
                                        <h5>Problème <span id="color-detail">MongoDB</span></h5>
                                        <p>
                                           Parmi toutes les erreurs que j'ai résolu, il y avait une erreur <span id="color-detail">MongoDB</span>. Une erreur qui est du à la config manquante à cause du problème de <span id="color-detail">Zookeeper</span>.
                                           <br />J'ai donc montré l'erreur à plusieurs développeur <span id="color-detail">Java</span> de différentes équipes et à mon responsable technique, <span id="color-detail">Antoine Noal</span>. Après avoir reffléchi, ils en ont conclus
                                           que je pouvais enlever tout ce qui concerne <span id="color-detail">MongoDB</span> dans les fichiers car il n'est plus vraiment utilisé.
                                           <br />
                                           <br />J'ai donc enlevé <span id="color-detail">MongoDB</span> dans <span id="color-detail">middle-search-loader-offer</span> => <span id="color-detail"><b><i>Retenez bien ça !</i></b></span> &#128565;
                                        </p>
                                    </li>
                                </ul>
                        </div>

                        <div class="blog-part">
                            <h3>IV. Migration Java 8 à 10</h3>

                            <p>
                               C'est parti pour commencer la mission ! Pour cela, je dois me documenter pour savoir par où commencer. Comme dis précédemment, j'ai dû aller chercher les infos sur <a href="https://www.atlassian.com/fr/software/confluence" target="_blank" className="previous-page">Confluence</a>, sur la documentation de d'autres équipes.
                               <br />
                               <br/>
                               Voici les étapes :
                               <br/>
                               <br/>
                                <ul>
                                    <li>Changer le JDK pour passer à Java 10.</li>
                                    <li>Changer les dépendences selon le besoin dans le pom.xml (Fichier de dépendences de Maven).</li>
                                    <li>Impact sur le code (Il faut réécrire certaines parti du code car il ne convient plus avec Java 10).</li>
                                    <li>Faire des Test Unitaires (TU) pour atteindre au moins 80% de taux de couverture.</li>
                                </ul>
                               
                                Ce qui m'a pris beaucoup de temps, c'était l'impact sur le code. A chaque fois, que je modifiais une partie, une nouvelle erreur apparaissait à cause d'une autre parti, qui fallait donc modifier ensuite.
                                Dans ces cas là, mon plus grand secours était le site <a href="https://stackoverflow.com/" target="_blank" className="previous-page">Stackoverflow</a> &#128524; Nombreuses de mes erreurs ont déjà été corrigé sur ce site par des développeurs  qui sont tombés sur les mêmes erreurs que moi.
                                <br />
                                Mais j'ai eu aussi droit à l'aide de <span id="color-detail">Géry Deloge</span> (Référent <span id="color-detail">Java</span>), qui est venu m'aider quand il était disponible afin de traiter ces problèmes &#128522;
                                <br />
                                <br />
                                Au niveau des TU, j'ai réussi à atteindre <span id="color-detail">87.6%</span> de taux de couverture.
                                <br />
                                <br />
                                Après 3 semaines (soit après 1 mois depuis mon arrivée), ce microservice a enfin été migrer de <span id="color-detail">Java 8</span> à <span id="color-detail">Java 10</span>.
                                <br />
                                Place maintenant à la migration vers <span id="color-detail">Kubernetes</span> &#128526;
                            </p>
                        </div>

                        <div class="blog-part">
                            <h3>V. Migration Mésos/Marathon à Kubernetes</h3>

                            <p>
                                Me voilà donc parti pour la migration de <span id="color-detail">Mésos</span>/<span id="color-detail">Marathon</span> vers <span id="color-detail">Kubernetes</span> &#128526;
                                Même principe que pour la migration <span id="color-detail">Java 10</span>, il faut d'abord que je me documente sur <a href="https://www.atlassian.com/fr/software/confluence" target="_blank" className="previous-page">Confluence</a> pour savoir par où commencer, sans oublier de compléter la doc que j'écris en parallèle.
                                <br />
                                <br/>
                                Voici les étapes :
                                <br/>
                                <br/>
                                <ol>
                                    <li>Créer un nouveau repository sur <a href="https://visualstudio.microsoft.com/fr/tfs/" target="_blank" className="previous-page">TFS</a> pour la config kube de ce microservice, sous le nom : middle-search-loader-offer-config_kube</li>
                                    <li>Compléter ce repos avec des fichiers de config et de déploiement vers kube, pour chaque environement (dev, recette, préprod, prod-bordeaux, prod-paris)</li>
                                    <li>Créer un namespace kube</li>
                                    <li>Créer une pipeline de build pour déployer ce microservice dans le namespace kube</li>
                                    <li>Arrêter le microservice sur Mésos/Marathon</li>
                                    <li>Vérifier que le microservice fonctionne bien sur Kubernetes</li>
                                </ol>
                                
                            </p>

                            <h4>1. Créer un nouveau repository sur TFS</h4>
                            <p>
                                Pour cela, il faut faire un ticket à un autre service (<span id="color-detail">Software Factory</span>). Ce sont eux qui peuvent faire des modifications sur <a href="https://visualstudio.microsoft.com/fr/tfs/" target="_blank" className="previous-page">TFS</a>.
                            </p>
                            <h4>2. Compléter ce repos</h4>
                            <p>
                                Une fois le repo créé, il faut le compléter avec des fichiers de config et de deploiement, pour <span id="color-detail">chaque environement</span>.
                                <br />
                                Il y a un exemple sur <a href="https://www.atlassian.com/fr/software/confluence" target="_blank" className="previous-page">Confluence</a>. J'ai donc repris ça et je l'ai adapté pour ce microservice.
                            </p>
                            <h4>3. Créer un namespace kube</h4>
                            <p>
                                Il faut faire un nouveau ticket à un autre service, en précisant le nombre de CPU / RAM nécessaire, le nom du namespace, et demander d'avoir les droits. 
                                <br />
                                Pour savoir le nombre de CPU / RAM, je suis allé voir la config de ce microservice sur Mésos/Marathon.
                                <br />
                                Il fallait donc <span id="color-detail">5 CPU</span> / <span id="color-detail">20 GbRAM</span>. &#x1F44D;
                                
                            </p>
                            <h4>4. Créer une pipeline de build</h4>
                            <p>
                                Il faut faire un nouveau ticket à <span id="color-detail">Software Factory</span>, pour qu'il puisse créer une pipeline de build sur <a href="https://visualstudio.microsoft.com/fr/tfs/" target="_blank" className="previous-page">TFS</a>, c'est à dire, fusionner 2 repos (le repo code et le repo de config Kube)
                                pour pouvoir build le microservice et pouvoir déployer dans les différents environements.                                
                            </p>
                            <h4>5. Arrêter le microservice sur Mésos/Marathon</h4>
                            <p>
                               Une fois que le microservice a correctement été déployé sur <span id="color-detail">Kubernetes</span>, il faut arrêter ce microservice sur <span id="color-detail">Mésos</span>/<span id="color-detail">Marathon</span> (un clic et c'est réglé &#128523;).                               
                            </p>
                            <h4>6. Vérifier que le microservice fonctionne bien sur Kubernetes</h4>
                            <p>
                               Il faut vérifier dans les logs sur <span id="color-detail">Kubernetes</span> que le microservice récupere bien des données depuis les différentes files <span id="color-detail">Kafka</span>, qu'il indexe bien des produits et des offres dans le moteur <span id="color-detail">Solr</span> et dans la base de données <span id="color-detail">MongoDB</span>.                       
                            </p>
                        </div>

                        <div class="blog-conclusion">
                            <h3>VI. Conclusion</h3>

                            <p>
                                Avec cette mission, j'ai appris beaucoup de choses notamment sur le développement d'un microservice <span id="color-detail">Java</span> avec le framework <span id="color-detail">Spring Boot</span>.
                                <br/>
                                J'ai trouvé ce sujet très intéressant, malgré les nombreux problèmes que j'ai rencontré. Au bizarre que ça puisse paraître, j'ai bien aimé
                                corriger ces erreurs. 
                                <br/>
                                <br/>
                                <span id="color-detail"><i>Pourquoi ? Parce que j'aime me faire du mal ?</i></span> &#128561;
                                <br/>
                                <br/>
                                <span id="color-detail">Non</span>. Parce que ça demande beaucoup de réfléxion, qu'il faut vraiment bien analyser et comprendre chaque erreur avant de pouvoir les traiter une par une.
                                <br/>
                                J'ai dû aussi soliciter mes connaissances afin de pouvoir adapter le code et éviter certains problèmes.
                                <br/>
                                J'étais également le seul de mon service à faire du <span id="color-detail">Java</span>. Cela demandait donc plus de réflexion.
                                <br/>
                                <br/>
                                Mais ce qui me motivait le plus, c'était que ce sujet est important dans le service où je suis. Ça me motivait pour ne pas lâcher les erreurs et a tous faire pour me débloquer. 
                                <br/>
                                <br/>
                                J'ai aussi appris beaucoup de chose au sujet d'Orchestrateur avec <span id="color-detail">Mésos</span>/<span id="color-detail">Marathon</span> et <span id="color-detail">Kubernetes</span>.
                                <br/>
                                J'ai même suivi une formation de 2h30 dans les locaux de Cdiscount, sur le fonctionnement de <span id="color-detail">Kubernetes</span>. C'était très intéressant !
                                <br/>
                                <br/>
                                <b>Au final, j'ai passé environ 1 mois et 1 semaine afin de réaliser cette mission</b> &#128526;
                            </p>
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        )
    }
}

export default TroisiemeMission