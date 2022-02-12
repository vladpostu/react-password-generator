import React, { Component, useState } from "react";
import { Wave } from 'react-animated-text';

import './PasswordDisplay.css';

class PasswordDisplay extends Component {

  state = {
    password: this.props.password,
    copied: false,
  };

  handleCopy = (state) => {
    this.setState({
      copied: state
    })
  }

  copy = () => {
    this.handleCopy(true);
    navigator.clipboard.writeText(this.state.password);
  }

  render() {
    return (
        <div id='password_display'>
            <h3>Your  ✨ password ✨ is</h3>
            <div id='password'>
              {this.state.password.length > 0 ? this.state.password : <Wave text='...' effectChange={0.5} delay={.5} />}
            </div> 
            <button className='btn btn-secondary mt-2' onClick={this.copy}>Copy</button>
            <div className={'mt-3 fs-4 ' + (this.state.copied ? 'd-block' : 'd-none')} >✔️ Copyed with success</div>
        </div>
    )
  };
}

export default PasswordDisplay;
