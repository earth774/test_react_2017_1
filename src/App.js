import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Body from './Components/body.component';
import Header from './Components/header.component';
import Calculater from './Components/calculater.component';

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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <p className="App-intro">
          <Header />
          <Body title={this.state.name} test={this.state.test}/>
         
          <input  onChange={this.changetext.bind(this)}/>
          <button onClick={()=>this.changestate('asdsdsa')}>Change state</button>
          <Calculater />
        </p>
      </div>
    );
  }
}

export default App;
