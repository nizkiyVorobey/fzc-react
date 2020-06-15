import React from "react";

import { Link } from "react-router-dom";


const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/" exact="true">Start page</Link></li>
                <li><Link to="/userList" exact="true">userList page</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation