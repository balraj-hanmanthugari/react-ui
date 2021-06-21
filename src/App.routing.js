import React from "react";
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import { Home } from "./home/home";
import { Todo } from "./Todo/Todo";

export class RoutedComp extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/toDo' component={Todo} />
                </Switch>
            </BrowserRouter>
        )
    };
}