import React, { Component } from "react";
import { Wave } from 'react-animated-text';

import './PasswordDisplay.css';


class PasswordDisplay extends Component {

  state = {
    password: this.props.password,
  };

  render() {
    return (
        <div id='password_display'>
            <h3>Your  ✨ password ✨ is</h3>
            <div id='password'>
              {this.state.password.length > 0 ? this.state.password : <Wave text='...' effectChange={0.5} delay={.5} />}
            </div>
        </div>
    )
  };
}

export default PasswordDisplay;
