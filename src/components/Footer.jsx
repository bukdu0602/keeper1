import React from "react";

function Footer() {
    const d = new Date();
    const n = d.getFullYear();
    return <footer>
    <p>Copyright {n}</p>
    </footer>
}

export default Footer;