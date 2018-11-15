import React, { Component } from 'react';

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
            <div className="container">
                <h2 className="mt-3">Contact</h2>

                <div className="row">
                    <div className="col-lg-6">
                        <p>Vous pouvez me contacter via le formulaire ci-contre si vous avez une question à propos de mon travail, un projet que vous aimeriez réaliser ou autres n'hésitez pas. Je vous répondrai le plus vite possible.</p>
                    </div>

                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-12">
                                <p className="font-weight-bold">Nom</p>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" aria-label="Message" aria-describedby="inputGroup-sizing-default" />
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <p className="font-weight-bold">Adresse mail</p>
                                <div className="input-group">
                                    <input type="email" className="form-control" aria-describedby="email"/>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <p className="font-weight-bold">Message</p>
                                <div className="input-group mb-3">
                                    <textarea className="form-control" rows="3"></textarea>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <button className="btn btn-outline-secondary" type="button">Envoyer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Contact

