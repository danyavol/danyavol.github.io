import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class R1_G1 extends Component {
    render() {
        return (
            <div className="homePage">
                <h4 className="text-center">1 ОПИСАНИЕ ПРОЦЕССА ТРУДОУСТРОЙСТВА</h4>
                <h5 className="text-center">1.1 Исследование рынка труда</h5>
                <p className="text-justify text-ind">Проблемы занятости и трудоустройства всегда находятся в центре внимания. С этой проблемой ежегодно сталкивается множество людей. Сам процесс поиска работы порой занимает большое количество времени, что может привести к ряду проблем.</p>
                <img src="../images/1-1.png" className="img-fluid mx-auto d-block" alt="Рисунок 1.1"></img>
                <p className="text-center">Рисунок 1.1 – Распределение свободных вакансий по регионам страны</p>
                <p className="text-justify text-ind">Рынок труда представляет собой особую сферу, где работники осуществляют торговлю своими собственными силами, знаниями и умением. Особенность рынка труда и его механизма заключается в том, что объектами купли-продажи на нём является право на найм рабочей силы и право на подбор персонала, у которых имеются знания, квалификация (образование) и способности к трудовому процессу.</p>
                <p className="text-justify text-ind">Основными методами исследования рынка труда являются маркетинговые исследования. Маркетинговые исследования представляют собой сбор, обработку и анализ данных с целью уменьшения неопределенности, сопутствующей принятию маркетинговых решений. Исследованиям подвергаются рынок, конкуренты, потребители, цены, внутренний потенциал субъекта рынка рабочей силы. Основой исследований маркетинга служит общенаучные и аналитико-прогностические методы. Информационное обеспечение складывается из кабинетных и полевых исследований, а также из различных источников информации.</p>

                <div className="d-flex justify-content-between mt-5">
                    <Link to="/intro"><button type="button" className="btn btn-outline-primary">Предыдущая</button></Link>
                    <Link to="/razdel-1/glava-2"><button type="button" className="btn btn-outline-primary">Следующая</button></Link>
                </div>
            </div>
        );
    }

    componentWillUnmount() {
        document.getElementById('menu-1-1').classList.remove('active');
    }

    componentDidMount() {
        document.getElementById('menu-1-1').classList.add('active');
    }
}

export default R1_G1;