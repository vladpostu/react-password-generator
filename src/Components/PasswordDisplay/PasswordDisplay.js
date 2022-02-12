import React, { Component, useState } from "react";
import { Wave } from 'react-animated-text';

import './PasswordDisplay.css';

class PasswordDisplay extends Component {

  state = {
    password: this.props.password,
    copied: this.props.copied,
  };

  render() {


    return (
        <div id='password_display' onClick={this.props.copy()}>
            <h3>Your  ✨ password ✨ is</h3>
            <div id='password'>
              {this.state.password.length > 0 ? this.state.password : <Wave text='...' effectChange={0.5} delay={.5} />}
            </div> 
            <span className="mt-2">{this.state.copied == true ? 'Copied!' : 'Copy'}</span>
        </div>
    )
  };
}

export default PasswordDisplay;
