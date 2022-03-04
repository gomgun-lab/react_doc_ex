import { ThemeContext, themes } from "./component/context/ThemeContext";
import ThemedButton from "./component/context/ThemedButton";
import Toolbar from "./component/context/Toolbar";
import Content from "./component/context/Content";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState((state) => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark,
      }));
    };

    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };
  }

  render() {
    // The ThemedButton button inside the ThemeProvider
    // uses the theme from state while the one outside uses
    // the default dark theme
    return (
      <>
        <ThemeContext.Provider value={this.state}>
          {/* <Toolbar changeTheme={this.toggleTheme} /> */}
          <Content />
        </ThemeContext.Provider>
        {/* <ThemedButton /> */}
      </>
    );
  }
}

export default App;
