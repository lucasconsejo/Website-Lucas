import React, { Component } from 'react';
import '../../css/Contact.css'
import Navbar from '../../Components/Navbar/Navbar.js'

class Contact extends Component{
    render(){
        return(
            <div id="contact">
                <Navbar color="color5" />
                <div id="fond-contact">
                <div id="box-size" className="container">
                    <div className="navHidden"></div>
                    <h2 className="text-light mt-3">Contact</h2>

                    <div className="row pt-4 pb-4" id="fond-color-contact">
                        <div className="col-lg-6 align-self-center">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h4 className="text-light">Vous voulez me contacter ?<br/>Vous pouvez remplir le formulaire de contact :)</h4>
                                    <p id="email" className="text-light">
                                        Email :&nbsp;
                                        <a className="text-light" href="mailto:lucas.consejo@ynov.com">
                                            lucas.consejo@ynov.com
                                        </a><br />
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div id="send-message" className="col-lg-6">
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

