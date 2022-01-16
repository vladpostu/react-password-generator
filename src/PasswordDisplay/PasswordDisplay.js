import React from "react";
import { Component } from "react/cjs/react.production.min";

class PasswordDisplay extends Component {
  state = {
    password: this.props.password,
  };

  render() {

    const displayPassword = () => {
        return this.state.password;
      };

    return (
        <div>
            {displayPassword()}
        </div>
    )
  };
}

export default PasswordDisplay;
