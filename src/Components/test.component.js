import React from 'react';

class Test extends React.Component {
	constructor(){
		super();
		this.state={
			test1:'',
			test2:''
		};
	}
	showState1(e){
		console.log(e);
		const text = e.target.value;
		this.setState({test1:text});
	}
	showState2(e){
		console.log(e);
		const text = e.target.value;
		this.setState({test2:text});
	}
    render(){
        console.log(this.props);
        return (
            <div>
            	<h1>Test : {this.state.test1+this.state.test2}</h1>
                <input onChange={this.showState1.bind(this)}/>
                <input onChange={this.showState2.bind(this)}/>
            </div>
        );
    }
}

export default Test;