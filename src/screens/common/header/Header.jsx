import React from "react";
import { Button } from "@material-ui/core";


function Header(){
    return(
        <div className="header">
          <img className="logo" src="./assets/logo.svg" alt="logo" />  
          <Button color="default" variant="contained">Login</Button>
        </div>
    );
}
export default Header;