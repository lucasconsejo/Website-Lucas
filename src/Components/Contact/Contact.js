import React, { Component } from 'react';
import '../../css/Contact.css'
class Contact extends Component{
    constructor(props){
        super(props)
        this.state ={
            name : '',
            email: '',
            msg: ''
        }
    }

    render(){
        return(
            <div id="contact">
                <div id="fond-contact">
                <div className="container">
                    <div className="navHidden"></div>
                    <h2 className="text-light mt-3">Contact</h2>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h4 className="text-light mt-3">Vous voulez me contacter ?<br/>Remplissez le formulaire de contact :)</h4>
                                </div>

                                <div className="col-lg-12 mt-3">
                                    <p className="text-light">Email :&nbsp;
                                        <a className="text-light" href="mailto:lucas.consejo@ynov.com">
                                            lucas.consejo@ynov.com
                                        </a>
                                    </p>
                                </div>

                                <div className="col-lg-12">
                                    <p className="text-light">Tel :&nbsp;
                                        <a className="text-light" href="tel:lucas.consejo@ynov.com">
                                            06 05 23 18 54
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-12">
                                    <p className="font-weight-bold text-light">Nom</p>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" aria-label="Message" aria-describedby="inputGroup-sizing-default" />
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <p className="font-weight-bold text-light">Adresse mail</p>
                                    <div className="input-group">
                                        <input type="email" className="form-control" aria-describedby="email"/>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <p className="font-weight-bold text-light">Message</p>
                                    <div className="input-group mb-3">
                                        <textarea className="form-control" rows="3"></textarea>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <button className="btn btn-light" type="button">Envoyer</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                </div>
            </div>
        )
    }
}
export default Contact

