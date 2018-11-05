import React, { Component } from "react";
import { Provider } from "react-redux";
// import { Header } from "./components";
// import BarPanel from "./components/BarPanel";
import { Dashboard } from "./dashboard";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider {...this.props}>
        <Dashboard />
        {/* <div className="App">
          <header className="App-header"></header>
          <div className="App-intro">
            <BarPanel />
          </div>
        </div> */}
      </Provider>
    );
  }
}

export default App;
