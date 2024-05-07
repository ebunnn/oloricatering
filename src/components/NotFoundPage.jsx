import React from "react";
import "../css/NotFoundPage.css"

export default function NotFoundPage() {
    return (
        <div className="notfound--container">
            <img style={{width:"20%"}} src="https://github.com/ebunnn/oloricatering/blob/main/src/Images/olori%20catering%201.png?raw=true" alt="404 Logo" />
            <h1>404 Page Not Found 🙁</h1>
            <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        </div>
    )
}