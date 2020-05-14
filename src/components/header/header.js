import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './header.scss';

class Header extends Component {
    render() {
        return (
            <div className="col-4 p-0">
                <div className="header border rounded shadow-sm p-3 mr-3 sticky-top">
                    <ul className="list-group-flush">
                    <Link to="/systems-project"><li className="list-group-item list-group-item-action border-bottom" id="menu-main">Главная</li></Link>
                    <Link to="/systems-project/intro"><li className="list-group-item list-group-item-action" id="menu-intro">Введение</li></Link>
                    <li className="list-group-item mt-3 border-top-0 border-dark"><strong>1 Описание процесса трудоустройства</strong></li>
                    <Link to="/systems-project/razdel-1/glava-1"><li className="list-group-item list-group-item-action border-bottom" id="menu-1-1">1.1 Исследоваение рынка труда</li></Link>
                    <Link to="/systems-project/razdel-1/glava-2"><li className="list-group-item list-group-item-action border-bottom" id="menu-1-2">1.2 Создание персонального резюме</li></Link>
                    <Link to="/systems-project/razdel-1/glava-3"><li className="list-group-item list-group-item-action border-bottom" id="menu-1-3">1.3 Поиск доступных вакансий</li></Link>
                    <Link to="/systems-project/razdel-1/glava-4"><li className="list-group-item list-group-item-action" id="menu-1-4">1.4 Собеседование</li></Link>
                    <li className="list-group-item mt-3 border-top-0 border-dark"><strong>2 Описание информационных потоков</strong></li>
                    <Link to="/systems-project/razdel-2/glava-1"><li className="list-group-item list-group-item-action border-bottom" id="menu-2-1">2.1 Структурный анализ системы</li></Link>
                    <Link to="/systems-project/razdel-2/glava-2"><li className="list-group-item list-group-item-action border-bottom" id="menu-2-2">2.2 Анализ причин возникновения проблем</li></Link>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;