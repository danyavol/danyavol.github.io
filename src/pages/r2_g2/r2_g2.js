import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class R2_G2 extends Component {
    render() {
        return (
            <div className="homePage">
                <h5 className="text-center">2.2 Анализ причин возникновения проблем</h5>
                <p className="text-justify text-ind">Определив взаимосвязи всех подсистем, можно приступить к поиску причин возникновения проблем. Для этого выберем одну из основных проблем, выявленных ранее, и выделим все факторы, которые могут влиять на возникновение данной проблемы.</p>

                <img src="../images/2-5.png" className="img-fluid mx-auto d-block" alt="Рисунок 2.5"></img>
                <p className="text-center">Рисунок 2.5 – Диаграмма «рыбий скелет» для подсистемы «поиск работы»</p>

                <p className="text-justify text-ind mb-0">На рисунке 2.5 представлена диаграмма «рыбий скелет», на которой основная проблема – «Сложность поиска подходящей вакансии», разбита на подкатегории. А те в свою очередь на отдельные факторы, влияющие на данную проблему.</p>
                <p className="text-justify text-ind mb-0">Такая же диаграмма была составлена для другой основной проблемы – Сложность составления резюме. Эта проблема обуславливается отсутствием опыта сотрудника, не совершенность вспомогательных сервисов и устаревшим оборудованием. Диаграмма представлена на рисунке 2.6.</p>
                <p className="text-justify text-ind mb-0">Для большей наглядности была построена еще одна схема анализа причин возникновения проблем – дерево причин. Дерево причин строится сверху вниз. Для основной проблемы выдвигаются «подпроблемы», являющиеся причинами ее появления. Для каждой из них также формулируются «подпроблемы» и так до тех пор, пока не будут достигнуты коренные причины.</p>
                <p className="text-justify text-ind mb-0">Такой подход позволяет объединить в единую систему все полученные ранее результаты анализа. Дерево целей представлено на рисунке 2.7.</p>

                <img src="../images/2-6.png" className="img-fluid mx-auto d-block" alt="Рисунок 2.6"></img>
                <p className="text-center">Рисунок 2.6 – Диаграмма «рыбий скелет» для подсистемы «резюме»</p>

                <img src="../images/2-7.png" className="img-fluid mx-auto d-block" alt="Рисунок 2.7"></img>
                <p className="text-center">Рисунок 2.7 – Дерево причин</p>

                <p className="text-justify mb-0 text-ind">Подведем итоги, проведя оценку важности коренных причин. Путем составления дерева причин и диаграмм «Рыбий скелет» были выявлены коренные причины основной проблемы. А именно:</p>
                <ol className="mb-0 list-padding">
                    <li>Отсутствие свободных вакансий;</li>
                    <li>Неудовлетворительные условия труда;</li>
                    <li>Отсутствие необходимой квалификации у сотрудника;</li>
                    <li>Некомпетентность сотрудника;</li>
                    <li>Сложность в использовании выбранной биржи труда.</li>
                </ol>

                <p className="text-justify text-ind mb-0">Таким образом, решив данные коренные проблемы, будет возможно снизить время на поиск работы и снизить процент безработных.</p>

                <div className="d-flex justify-content-between mt-5">
                    <Link to="/systems-project/razdel-2/glava-1"><button type="button" className="btn btn-outline-primary">Предыдущая</button></Link>
                    <Link to="/systems-project/razdel-3/glava-1"><button type="button" className="btn btn-outline-primary">Следующая</button></Link>
                </div>
            </div>
        );
    }

    componentWillUnmount() {
        document.getElementById('menu-2-2').classList.remove('active');
    }

    componentDidMount() {
        document.getElementById('menu-2-2').classList.add('active');
    }
}

export default R2_G2;