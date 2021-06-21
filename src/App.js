import React from "react";
import { Header } from "./header/header";
import { RoutedComp } from "./App.routing";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header appName="React Learning"/>
        <RoutedComp />
      </div>
    )
  }
}