import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="homePage">
                <h3 className="text-center">Курсовой проект</h3>
                <h4 className="text-center">на тему</h4>
                <h2 className="text-center mb-5">Проектирвоание информационной системы "Трудоустройство"</h2>
                <p className="text-right">Выполнил работу:<br/>Волосюк Даниил</p>

                <div className="d-flex justify-content-end mt-5">
                    <Link to="/intro"><button type="button" className="btn btn-outline-primary">Следующая</button></Link>
                </div>
            </div>
        );
    }

    componentWillUnmount() {
        document.getElementById('menu-main').classList.remove('active');
    }

    componentDidMount() {
        document.getElementById('menu-main').classList.add('active');
    }
}

export default Home;