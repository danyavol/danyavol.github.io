import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class R2_G1 extends Component {
    render() {
        return (
            <div className="homePage">
                <h4 className="text-center">2 ОПИСАНИЕ ИНФОРМАЦИОННЫХ ПОТОКОВ</h4>
                <h5 className="text-center">2.1 Структурный анализ системы</h5>
                <p className="text-justify text-ind">Декомпозиция деятельности — это её детализация, наглядное разделение комплексной объемлющей системы на многоуровневую иерархию небольших взаимосвязанных задач. Иными словами, любая цель подразделяется на несколько уровней задач, а те, в свою очередь, на элементарные действия.</p>
                <p className="text-justify text-ind">Для визуализации декомпозиции целей используются различные подходы — от структурированного списка в рукописном или электронном виде до сложных таблиц.</p>
                <p className="text-justify mb-0 text-ind">Декомпозиция темы Трудоустройство была проведена по следующим областям декомпозиции:</p>
                <ol>
                    <li>Поиск вакансий</li>
                    <li>Связь с нанимателем</li>
                    <li>Проведение собеседования </li>
                </ol>

                <img src="../images/2-1.png" className="img-fluid mx-auto d-block" alt="Рисунок 2.1"></img>
                <p className="text-center">Рисунок 2.1 – Декомпозиция деятельности</p>
                
                <p className="text-justify text-ind">Для наглядного представления всего бизнес-процесса необходимо разбить все структурные элементы на подсистемы и подробно их описать. Весь процесс был разбит на следующие подсистемы: поиск работы, оставление резюме, связь с нанимателем и проведение собеседование. Подробная схема представлена на рисунке 2.2.</p>

                <img src="../images/2-2.png" className="img-fluid mx-auto d-block" alt="Рисунок 2.2"></img>
                <p className="text-center">Рисунок 2.2 – Описание информационных подсистем</p>

                <p className="text-justify text-ind">Все подсистемы являются частью одной большой системы. Представив данную схему на рисунке, можно понять общую картину того, как именно работает процесс трудоустройства.</p>

                <img src="../images/2-3.png" className="img-fluid mx-auto d-block" alt="Рисунок 2.3"></img>
                <p className="text-center">Рисунок 2.3 – Диаграмма взаимосвязи подсистем</p>

                <p className="text-justify text-ind">Проанализировав представленную на рисунке 2.3 схему, можем отследить как именно происходит взаимосвязь подсистем. К примеру, в первую очередь потенциальный сотрудник должен составить резюме. Исполнителем в данном случае является сам сотрудник, а средством деятельности – вспомогательные сервисы для создания резюме.</p>
                <p className="text-justify text-ind">После этого сотрудник приступает к поиску работы на бирже труда. Когда была найдена работа, происходит связь с нанимателем. Исполнителем этого процесс является как сотрудник, так и работодатель. Затем сотрудник договаривается о проведение собеседования и, в случае успеха, трудоустраивается в данную компанию. Если же собеседование прошло неудачно – возвращается к поиску работу, и процесс повторяется.</p>
                <p className="text-justify text-ind">Для локализации проблем, необходимо также провести анализ состояния подсистем. Для этого возьмем два основных показателя времени: составление резюме и поиск работы. Таблица представлена на рисунке 2.4.</p>
                <img src="../images/2-4.png" className="img-fluid mx-auto d-block" alt="Рисунок 2.4"></img>
                <p className="text-center">Рисунок 2.4 – Анализ состояния подсистем</p>
                <p className="text-justify text-ind">Таким образом, проанализировав все системы и подсистемы, делаем вывод, что большую часть времени в трудоустройстве составляет поиск подходящей вакансии на бирже труда, который может длиться до двух месяц.</p>

                <div className="d-flex justify-content-between mt-5">
                    <Link to="/systems-project/razdel-1/glava-4"><button type="button" className="btn btn-outline-primary">Предыдущая</button></Link>
                    <Link to="/systems-project/razdel-2/glava-2"><button type="button" className="btn btn-outline-primary">Следующая</button></Link>
                </div>
            </div>
        );
    }

    componentWillUnmount() {
        document.getElementById('menu-2-1').classList.remove('active');
    }

    componentDidMount() {
        document.getElementById('menu-2-1').classList.add('active');
    }
}

export default R2_G1;