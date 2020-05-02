import React, { Component } from 'react';
import {Link} from 'react-router-dom';
//import './home.scss';

class Home extends Component {
    render() {
        return (
            <div>
                <h3 className="text-center">Курсовая работа на тему</h3>
                <h2 className="text-center mb-5">Проблема Трудоустройства</h2>
                <p className="text-right">Выполнил работу:<br/>Волосюк Даниил</p>

                <div className="d-flex justify-content-end mt-5">
                    <Link to="/content"><button type="button" className="btn btn-outline-primary">Следующая</button></Link>
                </div>
            </div>
        );
    }

    componentWillUnmount() {
        document.getElementById('menu1').classList.remove('active');
    }

    componentDidMount() {
        document.getElementById('menu1').classList.add('active');
    }
}

export default Home;