import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import '../css/App.css';
import Accueil from '../Components/Accueil/Accueil.js'
import Formation from '../Components/Formation/Formation.js'
import Competence from '../Components/Competences/Competences.js'
import Projets from '../Components/Projets/Projets.js'
import AccueilBlog from "../Components/Blog/AccueilBlog"
import AccueilCdiscount from "../Components/Blog/AccueilCdiscount"
import AccueilEntreprise from "../Components/Blog/Articles/AccueilEntreprise"
import MissionEffectuees from "../Components/Blog/Articles/MissionEffectuees"
import ConnaissanceMobilisées from "../Components/Blog/Articles/ConnaissanceMobilisées"
import DifficultésRencontrees from "../Components/Blog/Articles/DifficultésRencontrees"
import CompetencesAcquises from "../Components/Blog/Articles/CompetencesAcquises"
import BilanStage from "../Components/Blog/Articles/BilanStage"
//import APropos from "../Components/Blog/APropos"
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
            <Route path="/blog/stage/cdiscount/article/accueil-integration-dans-l-entreprise" component={AccueilEntreprise} />
            <Route path="/blog/stage/cdiscount/article/mission-effectuees-l-aspect-technique" component={MissionEffectuees} />
            <Route path="/blog/stage/cdiscount/article/competences-acquises" component={CompetencesAcquises} />
            <Route path="/blog/stage/cdiscount/article/difficultes-rencontrees-et-les-solutions-apportees" component={DifficultésRencontrees} />
            <Route path="/blog/stage/cdiscount/article/connaissances-mobilisees" component={ConnaissanceMobilisées} />
            <Route path="/blog/stage/cdiscount/article/le-bilan-de-ce-stage" component={BilanStage} />
            <Route path="/blog/stage/cdiscount" component={AccueilCdiscount} />
            <Route path="/blog/a-propos" component={AccueilBlog} />
            <Redirect exact from="/blog/*" to="/blog" />
            <Route exact path="/" component={Accueil} />
            <Route path="/competences" component={Competence} />
            <Route path="/formation" component={Formation} />
            <Route path="/projets" component={Projets} />
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
