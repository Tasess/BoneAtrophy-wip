import React, { Component } from "react";

class About extends Component {
    render() {
    return (
        <div>

            <div className="col-12 about-content">
                <h1 className=" display-4">
                    We're Just Coffee Lovers ♥
                </h1>
                <p>Small and Locally owned. We just want to spread the joy of relaxing and enjoying fresh baked cake and a warm cup of coffee. </p>
            </div>
                
            <div className="jumbotron about-mission jumbotron-fluid"></div>
            <div className="col-12 about-content border-top-bottom">
                <p>Our Daily goals are to warm everyone's heart and stomach, and if we're able, make someone's day.</p>
            </div>
            <div className="row">
                <div className=" col-12 col-md-6 jumbotron about-coffee jumbotron-fluid"></div>
                <div className="col-12 col-md-6 about-content product-section" id="coffee">
                    <h1 className="display-4">Our Coffee</h1>
                    <p>How we go about making each brew. Vestibulum metus felis, ornare eu gravida aliquet, porttitor at neque. In sollicitudin sodales sem, sed semper mi pharetra a. In augue felis, accumsan at felis a, ultricies condimentum augue. Nam sed ultrices odio. Morbi lacinia eget felis a tristique. Sed ut orci felis. Donec ac sollicitudin magna, eget molestie nibh. Aenean rhoncus, orci aliquet scelerisque porttitor, sem est feugiat risus, nec tempus risus nunc a tellus. Proin nisi purus, blandit vitae condimentum in, scelerisque ut elit. </p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 about-content product-section" id="ingredients">
                    <h1 className="display-4">Our Ingredients</h1>
                    <p>Our Ingredients are as fresh as we can get them. Mauris molestie ornare tristique. Donec accumsan nisi ac tincidunt luctus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin efficitur magna et odio luctus, a suscipit nunc aliquam. Morbi varius, augue non tempus posuere, urna ex cursus sapien, posuere viverra felis mauris quis purus. Sed hendrerit ipsum quis placerat consequat. Mauris mauris lectus, tincidunt nec convallis ac, pretium convallis massa. Vivamus eget neque quam. </p>
                </div>
                <div className=" col-12 col-md-6 jumbotron about-ingredients jumbotron-fluid"></div>
            </div>
            <div className="row">
                
                <div className="col-12 about-content product-section border-top-bottom" id="cake">
                    <h1 className="display-4">Our Cakes</h1>
                    <p>Cake recipes are how we started. Etiam tempus ultricies ipsum id ultricies. In hac habitasse platea dictumst. Morbi placerat nec nisi quis sollicitudin. Aliquam at lorem non elit volutpat eleifend sed id nulla. Cras id ligula quis leo aliquam finibus. Sed lacinia lorem sed diam pellentesque lacinia. Sed a mauris leo. Nunc a scelerisque nisl, fringilla ultricies nisl. Donec tincidunt ligula non luctus efficitur. Mauris quis dapibus lacus. Sed maximus, felis eu porta cursus, velit lacus blandit nunc, et finibus purus libero at lorem.  </p>
                </div>
                <div className=" col-12 jumbotron about-cake jumbotron-fluid"></div>
            </div>
        </div>
    );
}
}

export default About;
