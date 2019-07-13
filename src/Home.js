import React, { Component } from "react";

class Home extends Component {
    render() {
    return (
        <div>
            <div className="jumbotron">
                <h1>Bon Appetit</h1>

                <button className="btn btn-primary"><i class="fas fa-cookie-bite"></i>  Order Now</button>
            </div>
            <div>
                <div className="row no-gutters">
                    <div className="col-12 col-sm-4">
                        <div className="card card-block card-pastry">
                            One
                        </div>
                    </div>
                    <div className="col-12 col-sm-4">
                        <div className="card card-block card-coffee">
                        Two
                        </div>
                    </div>
                    <div className="col-12 col-sm-4">
                        <div className="card card-block card-cake">
                        Three
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
}

export default Home;
