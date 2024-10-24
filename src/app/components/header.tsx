import "../style/header.css"

import ThemeToggle from "./theme-toggle";

export default function Header(){
    return(
        <div className="header">
            {/* logo */}
            <h1 className="heading1">Muniba A.</h1>

            <ThemeToggle/>
            

           
        </div>
    )
}