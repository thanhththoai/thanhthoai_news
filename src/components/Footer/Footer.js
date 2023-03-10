import React from "react";
import "./Footer.css";


const Footer = () => {
    return (
        <footer className="w-100 py-4 flex-shrink-0">
        <div className="container py-4">
            <div className="row gy-4 gx-5">
                <div className="col-lg-4 col-md-6">
                <h5 className="h1 text-white">NEWS 9 PAPER</h5>
                    <p className="small text-muted">Newspaper is your news, entertainment, music fashion website. We provide you with the latest breaking news and videos straight from the entertainment industry.</p>
                    <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved. </p>
                </div>
                <div className="col-lg-2 col-md-6">
                    <h5 className="text-white mb-3">Our Service</h5>
                    <ul className="list-unstyled text-muted">
                        <li>Business</li>
                        <li>Entertainment</li>
                        <li>General </li>
                        <li>Health</li>
                        <li>Science</li>
                        <li>Sports</li>
                        <li>Technology</li>
                    </ul>
                </div>
                <div className="col-lg-2 col-md-6">
                    <h5 className="text-white mb-3">Home</h5>
                    <ul className="list-unstyled text-muted">
                        <li>Contact Us</li>
                        <li>About Us</li>
                        <li>Terms Conditions</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-6">
                    <h5 className="text-white mb-3">Newsletter</h5>
                    <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    <form action="#">
                        <div className="input-group mb-3">
                        <input className="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                            <button className="btn btn-primary" id="button-addon2" type="button"><i className="fas fa-paper-plane"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </footer>
    );
};
export default Footer;