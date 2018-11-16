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
                            <p className="text-light">Vous pouvez me contacter via le formulaire ci-contre si vous avez une question à propos de mon travail, un projet que vous aimeriez réaliser ou autres n'hésitez pas. Je vous répondrai le plus vite possible.</p>
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

