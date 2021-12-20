import React from "react"
import Time from "./Time"


function Header(){
    let logo = <img src="../Img/find-rates.png" alt="header" />
    return(<div className="header-image">
        {logo}
        <Time />
    </div>)
}

export default Header;