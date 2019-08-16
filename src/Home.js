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
        <div>
            <HashRouter>
            <div>
                <div className="jumbotron jumbotron-home">
                    <h1>Sweet Life</h1>

                    <NavLink to="/Menu" className="nav-link" ><button className="btn btn-primary"><i class="fas fa-cookie-bite"></i> Our Menu</button></NavLink>
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
            <div className="">
                <div className="col-12 col-sm-8 container-fluid">
                    <blockquote className="blockquote text-center">
                    <p className="mb-0 display-4">Take time and enjoy a treat</p>
                    <footer className="blockquote-footer">We just think you deserve it!</footer>
                    </blockquote>
                </div>
            </div>

        </div>
    );
}
}

export default Home;
