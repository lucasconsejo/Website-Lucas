import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../../NavbarBlog/NavbarBlog'
import Footer from '../../Footer/FooterBlog'

class DifficultésRencontrees extends Component{

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render(){
        return(
            <div>
                <Navbar />
                <div id="container-blog-cdiscount">
                    <div id="img-fond-difficultes-rencontrees">
                        
                    </div>
                
                    <div className="container">
                        <div id="blog-intro">
                            <p className="previous-page"><Link to="/blog" className="previous-page">Accueil</Link> > <Link to="/blog/stage/cdiscount" className="previous-page">Stage Cdiscount</Link> > <Link to="/blog/stage/cdiscount/article/difficultes-rencontrees-et-les-solutions-apportees" className="previous-page">Article Difficultés rencontrées et les solutions apportées</Link></p>
                            <h2>Difficultés rencontrées et les solutions apportées</h2>

                            <p>Has autem provincias, quas Orontes ambiens amnis imosque pedes Cassii montis illius celsi praetermeans funditur in Parthenium mare, Gnaeus Pompeius superato Tigrane regnis Armeniorum abstractas dicioni Romanae coniunxit.
                            </p>
                        </div>

                        <div id="blog-part-1">
                            <h3>I. Talia venditare</h3>

                            <p>Has autem provincias, quas Orontes ambiens amnis imosque pedes Cassii montis illius celsi praetermeans funditur in Parthenium mare, Gnaeus Pompeius superato Tigrane regnis Armeniorum abstractas dicioni Romanae coniunxit.
                                Homines enim eruditos et sobrios ut infaustos et inutiles vitant, eo quoque accedente quod et nomenclatores adsueti haec et talia venditare, mercede accepta lucris quosdam et prandiis inserunt subditicios ignobiles et obscuros.
                                <br />Nunc vero inanes flatus quorundam vile esse quicquid extra urbis pomerium nascitur aestimant praeter orbos et caelibes, nec credi potest qua obsequiorum diversitate coluntur homines sine liberis Romae.
                            </p>
                        </div>

                        <div id="blog-part-2">
                           
                        </div>

                        <div id="blog-part-3">
                            
                        </div>

                        <div id="blog-part-4">
                            
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        )
    }
}

export default DifficultésRencontrees