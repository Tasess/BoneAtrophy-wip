import React, { Component } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";

class Menu extends Component {

    render() {
        
    return (
        <div className="menu-page-bg">
            <div className="row">
                <div className="col-10" id="menu">

                    <nav className="navbar navbar-expand-lg navbar-dark">
                        
                        <div className="collapse navbar-collapse" id="nav-left">
                            <ul className="nav navbar-nav">
                                <li className="nav-item">
                                    <Link to="/Menu#Coffee">Coffee</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Menu#Tea">Tea</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Menu#Cake">Cake</Link>
                                </li>
                                </ul>
                        </div>
                        <div className="menu-header navbar-brand mx-auto">
                            <h1>Menu Items</h1>
                        </div>
                        <div className="collapse navbar-collapse">
                            <ul className="nav navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to="/Menu#Pastries">Pastries</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Menu#Cookies">Cookies</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Menu#Candy">Candy</Link>
                                </li>
                                </ul>
                        </div>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menunav" aria-controls="menunav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* Mobile menu nav */}
                        <div className="collapse menu-collapse" id="menunav">
                            <ul className="nav navbar-nav">
                                <li className="nav-item">
                                    <Link to="/Menu#Coffee">Coffee</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Menu#Tea">Tea</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Menu#Cake">Cake</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Menu#Pastries">Pastries</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Menu#Cookies">Cookies</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Menu#Candy">Candy</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    
                    <ScrollUpButton />                        
                    <div className="menu-section" id="Coffee">
                            <h1>Coffee</h1>
                            <div className="menu-padding">
                                <ul className="list-leader">
                                    <li>
                                        <span>Americano</span>
                                        <span>2.50</span>
                                    </li>
                                    <li>
                                        <span>Caffè Mocha</span>
                                        <span>3.00</span>
                                    </li>
                                    <li>
                                        <span>Latte</span>
                                        <span>3.00</span>
                                    </li>
                                    <li>
                                        <span>Iced Coffee</span>
                                        <span>2.50</span>
                                    </li>
                                    <li>
                                        <span>Cold Brew</span>
                                        <span>3.00</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="menu-section" id="Tea">
                            <h1>Tea</h1>
                            <div className="menu-padding">
                                <ul className="list-leader">
                                    <li>
                                        <span>White Tea</span>
                                        <span>2.50</span>
                                    </li>
                                    <li>
                                        <span>Green Tea</span>
                                        <span>3.00</span>
                                    </li>
                                    <li>
                                        <span>Masala Chai</span>
                                        <span>3.00</span>
                                    </li>
                                    <li>
                                        <span>Mint Tea</span>
                                        <span>2.50</span>
                                    </li>
                                    <li>
                                        <span>Earl Gray</span>
                                        <span>3.00</span>
                                    </li>
                                    <li>
                                        <span>Lady Gray</span>
                                        <span>3.00</span>
                                    </li>
                                    <li>
                                        <span>Chamomile Sunset</span>
                                        <span>3.00</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="menu-section" id="Cake">
                            <h1>Cake</h1>
                            <div className="menu-padding">
                                <ul className="list-leader">
                                    <li>
                                        <span>Harvest Cake</span>
                                        <span>2.50</span>
                                    </li>
                                    <li>
                                        <span>Coffee Cake</span>
                                        <span>2.50</span>
                                    </li>
                                    <li>
                                        <span>Apple Cake</span>
                                        <span>2.50</span>
                                    </li>
                                    <li>
                                        <span>Lemon Cake</span>
                                        <span>2.50</span>
                                    </li>
                                    <li>
                                        <span>Marble Cake</span>
                                        <span>2.50</span>
                                    </li>
                                    <li>
                                        <span>Sponge Cake</span>
                                        <span>2.50</span>
                                    </li>
                                </ul>
                                <ul className="menu-note">
                                <li><small>Prices listed are for a singular serving/slice</small></li>
                                <li><small>We also accept cake orders, please go here to put in an order.</small></li>
                                </ul>
                            </div>
                            
                        </div>
                        <div className="menu-section" id="Pastries">
                            <h1>Pastries</h1>
                            <div className="menu-padding">
                                <ul className="list-leader">
                                    <li>
                                        <span>Bear Claw</span>
                                        <span>2.50</span>
                                    </li>
                                    <li>
                                        <span>Croissant</span>
                                        <span>2.00</span>
                                    </li>
                                    <li>
                                        <span>Danish Pastry</span>
                                        <span>2.00</span>
                                    </li>
                                    <li>
                                        <span>Bruttibroni</span>
                                        <span>2.50</span>
                                    </li>
                                    <li>
                                        <span>Apple Strudel</span>
                                        <span>2.00</span>
                                    </li>
                                    <li>
                                        <span>Honey Nut Swirl</span>
                                        <span>2.50</span>
                                    </li>
                                    <li>
                                        <span>Berliner</span>
                                        <span>2.00</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="menu-section" id="Cookies">
                            <h1>Cookies</h1>
                            <div className="menu-padding">
                                <ul className="list-leader">
                                    <li>
                                        <span>Chocolate Chip</span>
                                        <span>1.00</span>
                                    </li>
                                    <li>
                                        <span>Oatmeal Cranberry</span>
                                        <span>1.00</span>
                                    </li>
                                    <li>
                                        <span>Snickerdoodle</span>
                                        <span>1.00</span>
                                    </li>
                                    <li>
                                        <span>Gingerbread</span>
                                        <span>1.00</span>
                                    </li>
                                    <li>
                                        <span>Lemon & Honey</span>
                                        <span>1.00</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="menu-section" id="Candy">
                            <h1>Candy</h1>
                            <div className="menu-padding">
                                
                                <ul className="list-leader">
                                    <li>
                                        <span>Peppermint Bark</span>
                                        <span>1.50</span>
                                    </li>
                                    <li>
                                        <span>Caramel</span>
                                        <span>1.50</span>
                                    </li>
                                    <li>
                                        <span>Toffee</span>
                                        <span>1.50</span>
                                    </li>
                                    <li>
                                        <span>Peach Candy</span>
                                        <span>1.50</span>
                                    </li>
                                    <li>
                                        <span>Honey Lollipops</span>
                                        <span>1.50</span>
                                    </li>
                                </ul>
                                <ul className="menu-note">
                                    <li><small>All candy is sold by the bag.</small></li>
                                </ul>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        
);

        }
}


export default Menu;