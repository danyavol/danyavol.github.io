import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class R3_G3 extends Component {
    render() {
        return (
            <div className="homePage">
                <h5 className="text-center">3.3 Разработка информационного обеспечения</h5>
                <p className="text-justify text-ind">Проанализируя структурную модель проблемосодержащей системы и модель усовершенствованной системы, составим список исполнителей, участвующих в деятельности системы. Определим различные подразделения в работе и сгруппируем для них сотрудников. Получим диаграмму организации, представленная на рисунке 3.6.</p>
                
                <img src="../images/3-6.png" className="img-fluid mx-auto d-block" alt="Рисунок 3.6"></img>
                <p className="text-center">Рисунок 3.6 – Организационная диаграмма</p>

                <p className="text-justify text-ind mb-0">После этого еще раз обратимся к списку задач, которые необходимо выполнить на пути к решению проблему трудоустройства. Составим таблицу, в которой по строкам указаны решаемые задачи, по столбцам – участники решения задач. В ячейках таблицы указаны роли участников в решение поставленной задачи. Таблица с описанием обязанностей частников данного проекта представлена на рисунке 3.7.</p>
                <p className="text-justify text-ind">Также составим диаграмму управления проектом. На этой диаграмме указан состав команды, которая будет принимать участие в проекте по совершенствованию системы. Диаграмма представлена на рисунке 3.8.</p>

                <img src="../images/3-7.png" className="img-fluid mx-auto d-block" alt="Рисунок 3.7"></img>
                <p className="text-center">Рисунок 3.7 – Описание обязанностей участников проекта по совершенствованию системы</p>

                <img src="../images/3-8.png" className="img-fluid mx-auto d-block" alt="Рисунок 3.8"></img>
                <p className="text-center">Рисунок 3.8 – Организационная диаграмма управление проектом</p>

                <p className="text-justify text-ind mb-0">По результатам данного проекта, получаем готовую информационную систему, позволяющую без проблем находить работу за максимально сжатые сроки. Кроме того, на сайте будет разработан редактор резюме, которые так же быстро сможет помочь составить персональное резюме.</p>
                <p className="text-justify text-ind mb-0">После того, как пользователь найдет несколько вариантов работы и отправит работодателям свое резюме, ему будет предложено провести собеседование онлайн посредством видеосвязи. Таким образом это значительно сократит общее время, необходимое для успешного трудоустройства.</p>

                <div className="d-flex justify-content-between mt-5">
                    <Link to="/systems-project/razdel-3/glava-2"><button type="button" className="btn btn-outline-primary">Предыдущая</button></Link>
                    <Link to="/systems-project/tehnicheskoe-zadanie"><button type="button" className="btn btn-outline-primary">Следующая</button></Link>
                </div>
            </div>
        );
    }

    componentWillUnmount() {
        document.getElementById('menu-3-3').classList.remove('active');
    }

    componentDidMount() {
        document.getElementById('menu-3-3').classList.add('active');
    }
}

export default R3_G3;