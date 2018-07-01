import React, { Component } from 'react';
import './HelloWorld.css';

class HelloWorld extends Component {
	constructor(props) {
  		super(props);
  		this.state = { greeting: 'Hello' };
  		this.press = this.press.bind(this);
	}


	 press() {
               HelloWorld = (this.state.class==="off")?"on":"off";
               this.setState({greeting: 'Bonjour'});
           }


  render() {
    return (
      <div className="HelloWorld">{this.state.greeting} {this.props.name}!
      <br/>
      <button onClick={this.press}>Frenchify</button>

      </div>
    );
  }
}

export default HelloWorld;