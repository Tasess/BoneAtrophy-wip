import React, { Component } from "react";

class Footer extends Component {
    render() {
    return (
        <div>
            <footer>
                <div className="row footer text-center">
                        <div className="col-12 col-md-4">
                            <h3 className="display-5">Come visit!</h3>
                            <p>
                                3209 Caramel Grove <br />
                                Ice Cream, Cone, 54216
                            </p>
                        </div>
                        <div className="col-12 col-md-3">
                            <p>Some stuff</p>
                        </div> 
                        <div className="col-12 col-md-3 logo">
                            
                        </div>

                </div>
                <div className="footer-copyright text-center">
                    <p>© Copyright 2019 Bon Appetite. All rights reserved</p>
                </div>
            </footer>
        </div>
    );
}
}

export default Footer;