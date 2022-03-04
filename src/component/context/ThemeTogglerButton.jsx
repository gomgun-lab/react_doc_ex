import React from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeTogglerButton() {
  // The Theme Toggler Button receives not only the theme
  // but also a toggleTheme function from the context
  return (
    <ThemeContext.Consumer>
      {(value) => (
        <button
          onClick={value.toggleTheme}
          style={{ backgroundColor: value.theme.background }}
        >
          Toggle Theme
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeTogglerButton;
