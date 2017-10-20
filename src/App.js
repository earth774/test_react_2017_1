import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Body from './Components/body.component';
// import Header from './Components/header.component';
// import Calculater from './Components/calculater.component';
// import Test from './Components/test.component';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import routes from './routing-config';
import { NoMatch,Calculater } from './Components';

class App extends Component {
  constructor(){
    super();
    this.age=21;
    this.name="sutthipong";
    this.state = {name:"sutthipong",
                 age:20,
                 test:''};
  }
  changestate(name){
    const sh_name = name;
    this.setState({name:sh_name});
  }
  changetext(e){
    const text = e.target.value;
    this.setState({test:text});
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <ul>
              
              <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
              <li><NavLink to="/Calculater" activeClassName="active">Calculater</NavLink></li>
            </ul>
          </div>
          <div className="App-intro">
            <Switch>
              {/*
                        <Route path="/" component={Home} exact={true} />
                        <Route path="/BasicRouting" component={BasicRouting} />
                        <Route path="/Blocking" component={Blocking} />
                        <Route path="/Miss" component={Miss} />
                        <Route path="/QueryParams" component={QueryParams} />
                        <Route path="/Recursive" component={Recursive} />
                        <Route path="/login" component={Login} />
                        <Route path="/Protected" component={
                          () => (fakeAuth.isAuthenticated ?
                            (<ProtectedPage />) :
                            (<Redirect to={{pathname: "/login", state: {from: "/Protected"}}}/> ))} />
              */}
                {routes.map((route,index) => (<Route key={index} path={route.path} component={route.component} exact={route.exact} />))}
                <Route component={NoMatch} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
