import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';
import CaesarCypher from './CaesarCypher';
import CryptoAES from './CryptoAES';
import PropTypes from 'prop-types';
import CryptoJS from 'crypto-js';

// App component - represents the whole app
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {inputText: "", key: ""};

 }

 handleChange(event) {
   this.setState({inputText: event.target.value});

 }
 handleChange2(event){
    this.setState({key: event.target.value});
 }
  render() {
    return (
    <ErrorBoundary>
      <div className="container">
      <h1> Project 2 </h1>
        <h1>Cyphers</h1>
        <input type="text1" value={this.state.inputText} onChange={this.handleChange.bind(this)} />
        <div>
        <input type="text2" value={this.state.key} onChange={this.handleChange2.bind(this)} />
        </div>
        <h2> Caesar </h2>


        <CaesarCypher clearText = {this.state.inputText} offsetNum = {2} shiftLeft = {true}/>
        <h2> Crypto AES </h2>

<CryptoAES clearText = {this.state.inputText} secretKey = {this.state.key} />
</div>

      </ErrorBoundary>
    );
  }
}
//<CaesarCypher plainText = {this.props.plainText} offsetNum = {this.props.offsentNum} shiftLeft = {true}/>
