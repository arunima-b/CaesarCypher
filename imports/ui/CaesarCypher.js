import React, { Component } from 'react';
import PropTypes from 'prop-types';

const charMax = 90;
const charMin = 65
const numMax = 57;
const numMin = 48;
const rangeMin = 0;
const rangeMax = 9;


let encrypt = (clearText, shift, shiftLeft) => {
    let encryptedText = "";
    clearText = clearText.toUpperCase();
    let charDiff = charMax - charMin + 1;
    let numDiff = numMax - numMin + 1;
    for (let i = 0; i < clearText.length; i++) {
        let asciiCode = clearText.charCodeAt(i);
        if (asciiCode >= numMin && asciiCode <= numMax) {
            
            if (shiftLeft) {
                
                encryptedText += String.fromCharCode(asciiCode - shift + numDiff <= numMax ? asciiCode - shift + numDiff : asciiCode - shift);
            } else {
                
                encryptedText += String.fromCharCode(asciiCode + shift - numDiff > numMax ? asciiCode - shift + numDiff : asciiCode + shift);
            }
        } else if (asciiCode >= charMin && asciiCode <= charMax) {
            
            if (shiftLeft) {
                
                encryptedText += String.fromCharCode(asciiCode - shift + charDiff <= charMax ? asciiCode - shift + charDiff : asciiCode - shift);
            } else {
                
                encryptedText += String.fromCharCode(asciiCode + shift - charDiff > charMax ? asciiCode - shift + charDiff : asciiCode + shift);
            }
        } else {
            encryptedText += clearText.charAt(i);
        }
    }
    return encryptedText;
}
let decyprt = () => {

}

export default class CaesarCypher extends Component {
    
    constructor (props) {
        super(props);
        this.state = {
            offsetNum: props.offsetNum,
            shiftLeft: props.shiftLeft,
        };
    }
    caesarChange = () => {
        let encryptedText = encrypt(this.props.clearText, this.state.offsetNum, this.state.shiftLeft);
        return (
            <span>
                {encryptedText}
            </span>
        );
    }
    numChange = (changeEvent) => {
        let offset = parseInt(changeEvent.target.value);
        offset = offset <= 0 ? 0 : offset > 9 ? 9 : offset;
        this.setState({offsetNum: offset});
    }
    shiftCheck = (changeEvent) => {
        this.setState({shiftLeft: !this.state.shiftLeft});
    }
    render = () => {
        return (
            <div>
                <span className="labels">Ciphertext:</span> {this.caesarChange()}<br />
                <input type="input" value={this.state.offsetNum} onChange={this.numChange.bind(this)} />&nbsp;&nbsp;
                <input type="range" min={rangeMin} max={rangeMax} value={this.state.offsetNum} onChange={this.numChange.bind(this)} />&nbsp;&nbsp;
                <span className="labels">Shift Left:</span> <input type="checkbox" checked={this.state.shiftLeft} onChange={this.shiftCheck.bind(this)} />
            </div>
        );
    }
}
CaesarCypher.defaultProps = {
    offsetNum: 2,
    shiftLeft: true,
};
CaesarCypher.propTypes = {
    clearText: PropTypes.string.isRequired,
    offsetNum: PropTypes.number,
    shiftLeft: PropTypes.bool,
};