import React, {createContext} from "react";

const AuthContext = createContext ({
    user : null,
    setUser : () => {},
    logOut : () => {}
})


export default AuthContext;