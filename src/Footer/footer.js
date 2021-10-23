import React from 'react'
import './footer.css'
export const Footer = () => {
    return (
        <>
        <footer className="foot">
            <div className="container">
                <div className="row">
                    <div col-12 col-lg-10 mx-auto>
                        <div className="row">
                            <div className="col-6 col-lg-3">
                                <h6 className="us">About</h6>
                                <ul>
                                    <li>
                                        <a href="/contact">contact us</a>
                                    </li>
                                    <li>
                                        <a href="/about">About us</a>
                                    </li>
                                    <li>
                                        <a href="#">stories</a>
                                    </li>
                                    <li>
                                        <a href="#">creer</a>
                                    </li>
                                </ul>

                            </div>
                            <div className="col-6 col-lg-3">
                            <h6 className="us">Policy</h6>
                                <ul>
                                    <li>
                                        <a href="#">Return</a>
                                    </li>
                                    <li>
                                        <a href="#">Term and use</a>
                                    </li>
                                    <li>
                                        <a href="#">Security</a>
                                    </li>
                                    <li>
                                        <a href="#">privacy</a>
                                    </li>
                                </ul>

                            </div>
                            <div className="col-6 col-lg-3">
                            <h6 className="us">Help</h6>
                                <ul>
                                    <li>
                                        <a href="#">payment</a>
                                    </li>
                                    <li>
                                        <a href="#">cancilation</a>
                                    </li>
                                    <li>
                                        <a href="#">FAQ</a>
                                    </li>
                                    <li>
                                        <a href="#">Shipping</a>
                                    </li>
                                </ul>

                            </div>
                            <div className="col-6 col-lg-3">
                                <h6 className="us">Follow us</h6>
                                <div className="row">
                                    <div className="col-3 mx-auto f">
                                        <a href="#">
                                        <i class="fab fa-facebook"></i>
                                        
                                
                                        </a>
                                    </div>
                                    <div className="col-3 mx-auto f">
                                        <a href="#">
                                        
                                        <i class="fab fa-instagram"></i>
                                    
                                        </a>
                                    </div>
                                    <div className="col-3 mx-auto f">
                                        <a href="#">
        
                                        <i class="fab fa-twitter-square"></i>
                                        </a>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
            
        </>
    )
}
