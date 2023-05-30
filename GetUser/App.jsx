import React from 'react';
import {Switch,Route, Redirect} from 'react-router-dom';
import Get_User from './Component/Get_user/Get_User';
import Navbar from './Component/Get_user/Navbar';

const App = () => {
  return (
    <>
    <Navbar/>
      <Switch>
        <Route exact path="/getuser" component={Get_User}/>
      </Switch> 

     
    </>
  )
}

export default App



