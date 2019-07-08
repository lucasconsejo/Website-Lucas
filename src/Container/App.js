import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import '../css/App.css';
import Accueil from '../Components/Accueil/Accueil.js'
import Formation from '../Components/Formation/Formation.js'
import Competence from '../Components/Competences/Competences.js'
import Projets from '../Components/Projets/Projets.js'
import AccueilBlog from "../Components/Blog/AccueilBlog"
import BlogCdiscount from "../Components/Blog/BlogCdiscount"
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
          <Switch>
            <Route exact path="/" component={Accueil} />
            <Route path="/competences" component={Competence} />
            <Route path="/formation" component={Formation} />
            <Route path="/projets" component={Projets} />
            <Route path="/blog/stages/cdiscount" component={BlogCdiscount} />
            <Route path="/blog" component={AccueilBlog} />
            <Route path="/contact" component={Contact} />
            <Redirect exact from="*" to="/" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
