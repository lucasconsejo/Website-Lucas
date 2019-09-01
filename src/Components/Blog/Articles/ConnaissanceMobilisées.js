import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../../NavbarBlog/NavbarBlog'
import Footer from '../../Footer/FooterBlog'

class ConnaissanceMobilisées extends Component{

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render(){
        return(
            <div>
                <Navbar />
                <div id="container-blog-cdiscount">
                    <div id="img-fond-connaissance-mobilisees">
                        
                    </div>
                
                    <div className="container">
                        <div className="blog-part">
                            <p className="previous-page"><Link to="/blog" className="previous-page">Accueil</Link> > <Link to="/blog/stage/cdiscount" className="previous-page">Stage Cdiscount</Link> > <Link to="/blog/stage/cdiscount/article/connaissances-mobilisees" className="previous-page">Article Connaissances mobilisees</Link></p>
                            <h2>Connaissances mobilisées</h2>

                            <p>
                               Lors des missions que j'avais à réaliser pendant ce stage, j'ai appris beaucoup de chose , notament le développement de microservice avec <span id="color-detail">Spring boot</span> (framework Java).
                               <br/>
                               Mais pour comprendre son fonctionnement, comprendre comment les microservices qu'on m'a donné lors de mes missions fonctionnement, je me suis basé sur mes connaissances en <span id="color-detail">Programmation Orienté Object</span> (POO) avec <span id="color-detail">Java</span>. Je les ai acquise à l'école pendant mes 2 premières années, mais aussi via des petits projets personnels que j'ai fais pendant mon temps libre.
                               <br />
                               <br/>
                               Grâce à ça, j'ai pû comprendre assez rapidement, le code des microservices qui utilisent <span id="color-detail">Spring Boot</span>. C'est une autre façon d'écrire du Java, de se simplifier certaines tâches (ex: la création d'un API REST) qui m'a intéressé et m'a plû de découvrir. &#128104;&#8205;&#128187;
                               <br/>                          
                               <br/>
                               J'ai également dû mobiliser d'autres connaissances plus ou moins nécessaire comme :              
                            </p>
                            <ul>
                               <li>Savoir utiliser un outil pour pouvoir tester une API REST (ex: Postman)</li>
                               <li>Savoir se connecter à un server en SSH</li>
                               <li>Savoir utiliser un terminal linux</li>
                               <li>Transferer des fichiers via le protocol FTP</li>
                               <li>Savoir utiliser git</li>
                               <li>Savoir ce qu'est une base de données NoSQL (ex: MongoDB)</li>
                               <li>Savoir utiliser un outil pour communiquer avec l'équipe (vu en cours : Slack)</li>
                               <li>Savoir faire des Test Unitaires</li>
                               <li>Savoir faire une revue de code, comprendre le code d'un autre developpeur, savoir adapter du code pour l'ajouter correctement à son projet</li>
                            </ul>

                            <p>Enfin, la connaissance la plus importante selon moi que j'ai dû mobiliser, c'est savoir <span id="color-detail">s'adapter</span>. Sans ça, ça devient vite compliquer de progresser et de comprendre les différentes missions/sujets que l'on vous donne.
                                Il faut rester attentif à chaque petit détail, poser des questions lors qu'on ne comprend pas quelque chose et surtout, changer ses <span id="color-detail">habitudes</span>. Le travail en <span id="color-detail">équipe</span> est très différents que travailler <span id="color-detail">seul</span>.
                                <br/>
                                Il est donc important de s'avoir <span id="color-detail">s'adapter</span>. &#128524;
                            </p>
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        )
    }
}

export default ConnaissanceMobilisées