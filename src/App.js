import React, { Component } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import BurgerBulider from "./containers/BurgerBuilder/BurgerBulider";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <BurgerBulider />
        </Layout>
      </div>
    );
  }
}
