import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import '../css/App.css';
import Navbar from '../Components/Navbar/Navbar.js'
import Footer from '../Components/Footer/Footer.js'
import Accueil from '../Components/Accueil/Accueil.js'
import Formation from '../Components/Formation/Formation.js'
import Competence from '../Components/Competences/Competences.js'
import Projets from '../Components/Projets/Projets.js'
import ProjetWT from '../Components/Projets/ProjetWT.js'
import Contact from '../Components/Contact/Contact.js'

class App extends Component {

  authenticate(){
    return new Promise(resolve => setTimeout(resolve, 1000))
  }
        
  componentDidMount(){
    this.authenticate().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if(ele){
        ele.classList.add('available')
      }
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Accueil} />
            <Route path="/competences" component={Competence} />
            <Route path="/formation" component={Formation} />
            <Route path="/projets/wetube" component={ProjetWT} />
            <Route path="/projets" component={Projets} />
            <Route path="/contact" component={Contact} />
            <Redirect exact from="*" to="/" />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
