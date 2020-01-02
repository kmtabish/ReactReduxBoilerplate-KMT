import React from 'react';
import Main from './containers/main';
import About from './containers/about'
import { Route, Switch } from 'react-router-dom';
export default class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Switch>
              <Route exact path='/about' component={About} />
              <Route exact path='/' component={Main} /> 
              <Route render={() => <div history={ this.props.history }> Route Not Found </div>}/>
            </Switch>
        )
    }
}