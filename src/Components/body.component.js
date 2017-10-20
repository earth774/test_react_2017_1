import React from 'react';

class Body extends React.Component {
    render(){
        console.log(this.props);
        return (
            <div>
                <h1>Name : {this.props.title}</h1>
                 <h1>Test : {this.props.test}</h1>
            </div>
        );
    }
}

export default Body;