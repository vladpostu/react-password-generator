import React, { Component } from "react";

class PasswordDisplay extends Component {
  state = {
    password: this.props.password,
  };

  render() {

    return (
        <div>
            {this.state.password}
        </div>
    )
  };
}

export default PasswordDisplay;
