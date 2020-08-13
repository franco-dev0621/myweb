import React, { Component } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import Home from './components/Home';
import Aboutme from './components/Aboutme';
import Ecommerce from './components/homeComponents/contentComponents/ecommerce'

import MessagingApp from './components/homeComponents/contentComponents/MessagingApp'
import Join from './components/homeComponents/contentComponents/msgappComponents/Join/Join'
import Chat from './components/homeComponents/contentComponents/msgappComponents/Chat/Chat'

import ExerciseTracker from './components/homeComponents/contentComponents/ExerciseTracker'
import CreateExercise from './components/homeComponents/contentComponents/exercisetrackerComponents/CreateExercise'
import CreateUser from './components/homeComponents/contentComponents/exercisetrackerComponents/CreateUser'
import EditExercise from './components/homeComponents/contentComponents/exercisetrackerComponents/EditExercise'
import DeleteUsers from './components/homeComponents/contentComponents/exercisetrackerComponents/DeleteUsers'






class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/Aboutme" component={Aboutme}/>
                    
          <Route path="/ecommerce" component={Ecommerce}/> 

          <Route path="/MessagingApp" component={MessagingApp}/>          
          <Route path="/Join" component={Join}/>          
          <Route path="/Chat" component={Chat}/>

          <Route path="/ExerciseTracker" component={ExerciseTracker}/>
          <Route path="/create" component={CreateExercise}/>
          <Route path="/user" component={CreateUser}/>
          <Route path="/edit/:id" component={EditExercise}/>
          <Route path="/delete" component={DeleteUsers}/>
          
        </Switch>
      </div>
      </BrowserRouter>


    );
  }
}
export default App;