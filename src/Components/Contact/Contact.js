import React, { Component } from 'react';
import '../../css/Contact.css'
import Navbar from '../../Components/Navbar/Navbar.js'
import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import SweetAlert from 'sweetalert2-react'
import Db from '../../Firebase/config.js'
import regex from 'email-regex'

class Contact extends Component{
    constructor(props){
        super(props)
        this.state = {
            name :"",
            email: "",
            message: "",
            show : false,
            show2 : false,
            show3 : false,
            show4 : false
        }
        try {
            firebase.initializeApp(Db)
            }
        catch (err) {
            if (!/already exists/.test(err.message)) {
                console.error('Firebase initialization error', err.stack)
            }
        }
    }

    sendMessage(){
        if(this.state.name.length > 0 && this.state.email.length > 0 && this.state.message.length > 0){
            var ref = firebase.database().ref('msgbox/'+this.state.name)
            if(regex().test(this.state.email)){
                ref.set({
                    name: this.state.name,
                    email:this.state.email,
                    message: this.state.message
                }).then(()=>{
                    this.setState({ show: true })
                }).catch((error)=>{
                    this.setState({ show2: true })
                })
                this.setState({
                    name: "",
                    email: "",
                    message: ""                
                })
            }
            else{
                this.setState({ show3: true })
            }
        }
        else{
            this.setState({ show4: true })
        }
    }


    getName(event){
        this.setState({
            name:event.target.value
        })
    }

    getEmail(event){
        this.setState({
            email:event.target.value
        })
    }

    getMessage(event){
        this.setState({
            message:event.target.value
        })
    }

    render(){
        return(
            <div id="contact">
                <Navbar color="color5" />
                <SweetAlert
                    show={this.state.show}
                    type="success"
                    title="Envoyé !"
                    text="Le message a bien été envoyé."
                    confirmButtonColor= "#3a3848"
                    onConfirm={() => this.setState({ show: false })}
                />
                <SweetAlert
                    show={this.state.show2}
                    type="error"
                    title="Envoi impossible"
                    text="Une erreur s'est produite lors de l'envoi du message. Réessayez plus tard."
                    confirmButtonColor= "#3a3848"
                    onConfirm={() => this.setState({ show2: false })}
                />
                <SweetAlert
                    show={this.state.show3}
                    type= "warning"
                    title="Email invalide"
                    text="Veuillez saisir un email valide"
                    confirmButtonColor= "#3a3848"
                    onConfirm={() => this.setState({ show3: false })}
                />
                <SweetAlert
                    show={this.state.show4}
                    type="error"
                    title="Champs manquants"
                    text="Veuillez remplir tous les champs avant d'envoyer."
                    confirmButtonColor= "#3a3848"
                    onConfirm={() => this.setState({ show4: false })}
                />
                <div id="fond-contact">
                <div id="box-size2" className="container">
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
                                        <input type="text" value={this.state.name} onChange={this.getName.bind(this)} className="form-control" aria-label="Message" aria-describedby="inputGroup-sizing-default" />
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <p className="font-weight-bold text-light">Adresse mail</p>
                                    <div className="input-group">
                                        <input type="email" value={this.state.email} onChange={this.getEmail.bind(this)} className="form-control" aria-describedby="email"/>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <p className="font-weight-bold text-light">Message</p>
                                    <div className="input-group mb-3">
                                        <textarea className="form-control" value={this.state.message} onChange={this.getMessage.bind(this)} rows="3"></textarea>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <button className="btn btn-light" type="button" onClick={this.sendMessage.bind(this)}>Envoyer</button>
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

