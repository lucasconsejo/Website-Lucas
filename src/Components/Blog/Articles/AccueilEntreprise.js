import React, {Component} from 'react';
import Navbar from '../../NavbarBlog/NavbarBlog'
import Footer from '../../Footer/FooterBlog'

class AccueilEntreprise extends Component{
    
    constructor(props){
        super(props);
        this.goBack = this.goBack.bind(this);
    }

    goBack(){
        this.props.history.goBack();
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
                            <p className="previous-page" onClick={this.goBack}>Retour aux Articles</p>
                            <h2>Accueil - Intégration dans l'entreprise</h2>

                            <p>Has autem provincias, quas Orontes ambiens amnis imosque pedes Cassii montis illius celsi praetermeans funditur in Parthenium mare, Gnaeus Pompeius superato Tigrane regnis Armeniorum abstractas dicioni Romanae coniunxit.
                            </p>
                        </div>

                        <div id="blog-part-1">
                            <h3>I. Les premiers jours</h3>

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

export default AccueilEntreprise