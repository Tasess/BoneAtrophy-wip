import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Menu from "./Menu";

class Home extends Component {
    render() {
    return (
        <HashRouter>
        <div>
            <div className="jumbotron">
                <h1>Sweet Life</h1>

                <button className="btn btn-primary"><i class="fas fa-cookie-bite"></i>  Order Now</button>
            </div>
            <div>
                
                <div className="row no-gutters">
                    <div className="col-12 col-sm-4">
                        <NavLink to="/Menu" className="card-link">
                            <div className="card card-block card-pastry">
                                <h2>Pastries</h2>
                            </div>
                        </NavLink> 
                    </div>
                    <div className="col-12 col-sm-4">
                        <NavLink to="/Menu" className="card-link">
                            <div className="card card-block card-coffee">
                                <h2>Coffee</h2>
                            </div>
                        </NavLink>
                    </div>
                    <div className="col-12 col-sm-4">
                        <NavLink to="/Menu" className="card-link">
                            <div className="card card-block card-cake">
                                <h2>Cake</h2>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
            <Route path="/Menu" component={Menu}/>
        </div>
        </HashRouter>
    );
}
}

export default Home;
