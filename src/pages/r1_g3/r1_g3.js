import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class R1_G3 extends Component {
    render() {
        return (
            <div className="homePage">
                <h5 className="text-center">1.3 Поиск доступных вакансий</h5>
                <p className="text-justify">Методы поиска вакансий регулярно меняются. Когда не было интернета, объявления публиковали в газетах, журналах или размещали на досках возле предприятий. По мере развития интернета стали создавать сайты – сначала организации выкладывали информацию о вакансии на странице портала, а затем появились специализированные сервисы.</p>
                <p className="text-justify">Распространенное направление, где ищут работу – интернет. Когда вакансии собраны в «одном месте», с функцией поиска, сортировкой по различным фильтрам, задача поиска упрощается.</p>
                <p className="text-justify">Время поиска работы сильно зависит от места, где производится поиск. В столице страны время поиска обычно гораздо меньше, чем в областных центрах. Убедиться может в этом проанализировав данные на рисунке 1.3.</p>

                <img src="../images/1-3.png" className="img-fluid" alt="Рисунок 1.3"></img>
                <p className="text-center">Рисунок 1.3 – Среднее время поиска работы по регионам страны</p>
                
                <p className="text-justify">После того, как была найденная интересующая вас вакансия, не стоит останавливаться только на ней. Стоит также взять на рассмотрение несколько других вариантов.</p>
                <p className="text-justify">Найдя все наиболее актуальные варианты следует отправить во все эти компании резюме на рассмотрение. Как правило в течение недели с вами свяжутся и дадут более подробную информацию по поводу вашего резюме.</p>
                <p className="text-justify">Если работодателю понравится ваше резюме, а также будут свободные вакансии, вам будет предложено посетить собеседование на выбранную вакансию. Подробнее о собеседовании в следующей главе.</p>

                <div className="d-flex justify-content-between mt-5">
                    <Link to="/razdel-1/glava-2"><button type="button" className="btn btn-outline-primary">Предыдущая</button></Link>
                    <Link to="/razdel-1/glava-4"><button type="button" className="btn btn-outline-primary">Следующая</button></Link>
                </div>
            </div>
        );
    }

    componentWillUnmount() {
        document.getElementById('menu-1-3').classList.remove('active');
    }

    componentDidMount() {
        document.getElementById('menu-1-3').classList.add('active');
    }
}

export default R1_G3;