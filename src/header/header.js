import React from "react";
import {
    BrowserRouter,
    Link
} from "react-router-dom";

export class Header extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <h1>{this.props.appName}</h1>
                    <nav style={{"margin":"2.4rem"}}>
                        <Link to="/" style={{"marginRight":"1.2rem"}}>Home</Link>
                        <Link to="/toDo">Todo</Link>
                    </nav>
                    <hr />
                </div>
            </BrowserRouter>
        )
    };
}