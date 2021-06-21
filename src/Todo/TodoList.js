import React from 'react';
import { TodoContext } from "./TodoContext";

export default class TodoList extends React.Component {
  static contextType = TodoContext;

  render() {
    return (
      <ul>
        <TodoContext.Consumer>
          {items => (
            items?.map((item) => {
              return <li key={item.id}>{item.text}</li>
            })
          )}
        </TodoContext.Consumer>
      </ul>
    );
  }
}