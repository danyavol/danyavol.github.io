import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Ss extends Component {
    render() {
        return (
            <div className="homePage">
                <h5 className="text-center">СПИСОК ИСПОЛЬЗОВАННЫХ ИСТОЧНИКОВ</h5>
                
                <ol className="mb-0 list-padding">
                    <li className="text-justify">Белов, В.В. Проектирование информационных систем: Учебник / В.В. Белов. - М.: Академия, 2018. - 144 c.</li>
                    <li className="text-justify">Гвоздева, Т. В. Проектирование информационных систем. Планирование проекта. Лабораторный практикум : учебное пособие / Т. В. Гвоздева. - Санкт-Петербург : Москва : Краснодар : Лань, 2019. – 114 с.</li>
                    <li className="text-justify">Гвоздева, Т. В. Проектирование информационных систем. Стандартизация : учебное пособие / Т. В. Гвоздева, Б. А. Баллод. - Санкт-Петербург : Москва : Краснодар : Лань, 2019. - 249 с.</li>
                    <li className="text-justify">Остроух, А. В. Проектирование информационных систем : монография / А. В. Остроух, Н. Е.Суркова. - Санкт-Петербург : Москва : Краснодар : Лань, 2019. - 161 с.</li>
                    <li className="text-justify">Рочев, К. В. Информационные технологии. Анализ и проектирование информационных систем : учебное пособие / К. В. Рочев. - 2-е изд., исправленное . - Санкт-Петербург : Москва : Краснодар : Лань, 2019. - 127 с.</li>
                    <li className="text-justify">Соловьев, И.В. Проектирование информационных систем. Фундаментальный курс / И.В. Соловьев, А.А. Майоров. - М.: Академический проект, 2009. - 398 c.</li>
                    <li className="text-justify">Федоров, Н.В. Проектирование информационных систем на основе современных CASE-технологий / Н.В. Федоров. - М.: МГИУ, 2008. - 280 c.</li>
                </ol>
                
                <div className="d-flex justify-content-left mt-5">
                    <Link to="/systems-project/zakluchenie"><button type="button" className="btn btn-outline-primary">Предыдущая</button></Link>
                </div>
            </div>
        );
    }

    componentWillUnmount() {
        document.getElementById('menu-ss').classList.remove('active');
    }

    componentDidMount() {
        document.getElementById('menu-ss').classList.add('active');
    }
}

export default Ss;