import React, { Component } from "react";

class Contact extends Component {
    render() {
    return (
        <div>
            
            <div className="row">
                <div className="col-12 col-md-10" id="contact">
                    <h1>Let Us Know What You Think</h1>
                    
                        <h3 className="display-5">Please feel free to send us your love, recommendation, questions, or concerns. We would love to hear from you!</h3>

                        <div className="row">
                            <div className="col-12 col-md-6 contact-section">
                                <div>
                                    <h2>
                                        <span className="icon phone"></span> 123-456-7890
                                    </h2>
                                </div>
                                <div>
                                    <h2>
                                        <span className="icon email"></span> cafe@business.com
                                    </h2>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <h2 className="display-5">
                                    You can also reach us on Social Media.
                                </h2>
                                <div className="social-media text-center">
                                    <a href="http://www.facebook.com" target="__blank"><i class="fab fa-facebook-square"></i></a>
                                    <a href="http://www.twitter.com" target="__blank"><i class="fab fa-twitter-square"></i></a>
                                    <a href="http://www.instagram.com" target="__blank"><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="col-12">
                                <h3 className="display-3">
                                    Office Hours
                                </h3>
                                <p>
                                    Monday - Friday <br /> 10:00 am - 4:00 pm
                                </p>
                                <p>
                                    Saturday and Sunday <br /> 11:00 am - 3:30 pm
                                </p>
                            </div>
                        </div>

                </div>
                
            </div>

        </div>
    );
}
}

export default Contact;
