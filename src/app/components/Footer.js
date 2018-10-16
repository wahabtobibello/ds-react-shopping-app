import React from 'react'

const Footer = () => {
    return (
        <footer className="footer_area">
            <div className="container">

                <div className="footer_copyright" style={{ borderTop: "1px solid #cccccc", paddingTop: "60px", paddingBottom: "60px" }}>
                    <h5>©
                    {new Date().getFullYear()}
                        Copyright &copy;
                    {new Date().getFullYear()} All rights reserved | This template is
                    made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
                    </h5>
                </div>
            </div>
        </footer>
    )
}

export default Footer