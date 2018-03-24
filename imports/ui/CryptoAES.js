import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CryptoJS from 'crypto-js';


export default class CryptoAES extends Component {
  constructor(props){
    super(props)
this.state = {encryptedText: "", decryptedText: ""};
}
//var CryptoJS = require("crypto-js");

// Encrypt

componentWillReceiveProps = (nextProps) =>  {

var ciphertext = CryptoJS.AES.encrypt(nextProps.clearText, nextProps.secretKey);
var cipherString = ciphertext.toString();
this.setState({encryptedText: cipherString});
// Decrypt
var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), nextProps.secretKey);
var plaintext = bytes.toString(CryptoJS.enc.Utf8);
this.setState({decryptedText: plaintext})

console.log(plaintext);
}

  render() {
    return (
      <div className="cypherText">
        <span> cyphertext:{this.state.encryptedText} </span>
        <div>
        <span> plaintext:{this.state.decryptedText} </span>
        </div>
      </div>
    );
  }
}
CryptoAES.defaultProps = {
  clearText:'',
  secretKey: '',

};

CryptoAES.propTypes = {
  clearText: PropTypes.string.isRequired,
  secretKey: PropTypes.string.isRequired,
};
