import React from 'react';

// context is used for communication between parent component and nested child components. 
// for parent and immediate child communication, use props. 
export const TodoContext = React.createContext();

export default TodoContext;