import React, { Component } from 'react';
import '../../css/Contact.css'
import Navbar from '../../Components/Navbar/Navbar.js'
import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import Db from '../../Firebase/config.js'

class Contact extends Component{
    constructor(props){
        super(props)
        this.state = {
            name :"",
            email: "",
            message: ""
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
            ref.set({
                name: this.state.name,
                email:this.state.email,
                message: this.state.message
            }).then(()=>{
                console.log("--> NEW MESSAGE")
            }).catch((error)=>{
                console.log("Err ",error )
            })
            this.setState({
                name: "",
                email: "",
                message: ""                
            })
        }
        else{
            console.log('oupps...')
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

