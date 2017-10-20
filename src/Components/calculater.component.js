import React from 'react';

class Calculater extends React.Component {
	constructor(){
    super();
    this.age=21;
    this.name="sutthipong";
    this.state = {test1:'',
					test2:''};
  }

  changetext1(e){
    const text = e.target.value;
    this.setState({test1:text});
  }
  changetext2(e){
    const text = e.target.value;
    this.setState({test2:text});
  }
    render(){
        console.log(this.props);
        return (
            <div>
            	<h1>Test1 : {this.state.test1}</h1>
            	<h1>Test2 : {this.state.test2}</h1>
            	<h1>Sum : {this.state.test1+this.state.test2}</h1>
            	Sum1 : <input onChange={this.changetext1.bind(this)} /><br />
            	Sum2 : <input onChange={this.changetext2.bind(this)} />
            </div>

        );
    }
}

export default Calculater;