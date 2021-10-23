import React from 'react'
import { Redirect } from 'react-router'
export const Protected = (props) => {
    let Protectedcom = props.component;
    let isLoggedIn=window.sessionStorage.getItem("token_value");
    return isLoggedIn
    ?(<Protectedcom/>)
    :(<Redirect to ="/sign"/>)
    
    
}
