import { createContext } from "react";

const UserContext = createContext({
    name: '',
    role: ''
});

export default UserContext;