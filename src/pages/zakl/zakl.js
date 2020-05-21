import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Zakl extends Component {
    render() {
        return (
            <div className="homePage">
                <h5 className="text-center">ЗАКЛЮЧЕНИЕ</h5>
                <p className="text-justify text-ind mb-0">В ходе работы на данным курсовым проектом была проанализирована информационная система Трудоустройство. Были выявлены все коренные причины проблем данной системы, а также все следствия, вытекающие из нее. К выявленным проблемам относятся: долгий процесс поиска работы, сложность составления резюме, трудности во время собеседования. Причинами всех этих проблем является следующее:</p>
                <ol className="mb-0 list-padding">
                    <li>Отсутствие свободных вакансий;</li>
                    <li>Неудовлетворительные условия труда;</li>
                    <li>Отсутствие необходимой квалификации у сотрудника;</li>
                    <li>Некомпетентность сотрудника;</li>
                    <li>Сложность в использовании выбранной биржи труда.</li>
                </ol>

                <p className="text-justify text-ind mb-0">После того, как были проанализированы все проблемы и причины, был составлен список возможных вариантов решения поставленных проблем. Затем из них были выбраны наиболее оптимальные варианты. А именно:</p>
                <ol className="mb-0 list-padding">
                    <li className="text-justify">Разработать редактор резюме, который позволит без проблем составить собственное резюме и выбрать любой макет для него на выбор;</li>
                    <li className="text-justify">Разработать базу данных со всем предложениями о работе, с помощью которой можно будет легко находить свободные вакансии по выбранной специальности;</li>
                    <li className="text-justify">Разработать систему онлайн собеседований, позволяющую провести собеседование дистанционно посредством видеосвязи потенциального сотрудника и работодателя. А также организовать удобную систему обмена файлами.</li>
                </ol>
                <p className="text-justify mb-0 text-ind mb-0">По итогу выходит система автоматизации Трудоустройства, позволяющая максимально сократить время, необходимое для успешного трудоустройства, а также снизить процент безработицы.</p>
                

                
                <div className="d-flex justify-content-between mt-5">
                    <Link to="/systems-project/tehnicheskoe-zadanie"><button type="button" className="btn btn-outline-primary">Предыдущая</button></Link>
                    <Link to="/systems-project/ispolzovannie-istochniki"><button type="button" className="btn btn-outline-primary">Следующая</button></Link>
                </div>
            </div>
        );
    }

    componentWillUnmount() {
        document.getElementById('menu-zakl').classList.remove('active');
    }

    componentDidMount() {
        document.getElementById('menu-zakl').classList.add('active');
    }
}

export default Zakl;