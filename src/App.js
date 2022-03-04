import { ThemeContext, themes } from "./component/context/ThemeContext";
import ThemedButton from "./component/context/ThemedButton";
import Toolbar from "./component/context/Toolbar";
import ThemeTogglerButton from "./component/context/ThemeTogglerButton";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };

    this.toggleTheme = () => {
      this.setState((state) => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark,
      }));
    };
  }

  render() {
    // The ThemedButton button inside the ThemeProvider
    // uses the theme from state while the one outside uses
    // the default dark theme
    return (
      <>
        <ThemeContext.Provider value={this.state.theme}>
          {/* <Toolbar changeTheme={this.toggleTheme} /> */}
          <ThemeTogglerButton />
        </ThemeContext.Provider>
        {/* <ThemedButton /> */}
      </>
    );
  }
}

export default App;
