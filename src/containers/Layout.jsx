/* slr -> crea esta estructura
{children} recibimos un hijo */
import React from "react";
const Layout = ({ children}) => {
    return (
        <div className="Layout">
            {children} 
        </div>
    );
}

export default Layout;