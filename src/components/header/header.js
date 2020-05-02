import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './header.scss';

class Header extends Component {
    render() {
        return (
            <div className="col-3 p-0">
                <div className="header border rounded shadow-sm p-3 mr-3 sticky-top">
                    <ul className="list-group-flush">
                    <Link to="/"><li className="list-group-item list-group-item-action border-bottom" id="menu1">Главная</li></Link>
                    <Link to="/content"><li className="list-group-item list-group-item-action border-bottom" id="menu2">Second</li></Link>
                    <Link to="/third"><li className="list-group-item list-group-item-action" id="menu3">Third</li></Link>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;