import React, { Component } from "react";
import { ThemeContext } from "./ThemeContext";

class ThemedButton extends Component {
  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <button {...props} style={{ backgroundColor: theme.background }}>
        Button
      </button>
    );
  }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;
