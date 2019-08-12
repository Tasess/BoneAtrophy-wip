import React, { Component } from "react";

class Footer extends Component {
    render() {
    return (
        <div>
            <footer>
                <div className="row footer text-center">
                        <div className="col-12 col-md-4 location">
                            <h3 className="display-5">Come visit!</h3>
                            <p>
                                3209 Caramel Grove <br />
                                Ice Cream, Cone, 54216
                            </p>
                        </div>
                        <div className="col-12 col-md-4 social-media text-center">
                            <h3 className="display-5">Follow us on social media:</h3>
                            <a href="http://www.facebook.com" target="__blank"><i class="fab fa-facebook-square"></i></a>
                            <a href="http://www.twitter.com" target="__blank"><i class="fab fa-twitter-square"></i></a>
                            <a href="http://www.instagram.com" target="__blank"><i class="fab fa-instagram"></i></a>
                        </div> 
                        <div className="col-12 col-md-4 footer-logo">
                            
                        </div>

                </div>
                <div className="footer-copyright text-center">
                    <p>© Copyright 2019 <b>Cafe Business Inc.</b>. All rights reserved</p>
                </div>
            </footer>
        </div>
    );
}
}

export default Footer;