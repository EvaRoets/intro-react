import React from "react";

const Footer = () => {
    const name = "Eva Roets"
    return (
        <>
            <div className="footer">
                Copyright &copy;
                <script>document.write(new Date().getFullYear())</script>
                {name}
            </div>
        </>
    );
}

export default Footer;






