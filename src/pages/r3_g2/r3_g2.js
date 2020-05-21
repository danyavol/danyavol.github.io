import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class R3_G2 extends Component {
    render() {
        return (
            <div className="homePage">
                <h5 className="text-center">3.2 Выбор способов реализации решений</h5>
                <p className="text-justify text-ind mb-0">Для выбора оптимального способа реализации решения, необходимо составить список возможных вариантов. Затем оценить каждый из вариантов и выбрать наилучший.</p>
                <p className="text-justify text-ind mb-0">Выпишем подцели, представленные на нижнем уровне дерева целей (Рисунок 3.1) и сгенерируем несколько возможных альтернативных вариантов решения. При этом можно использовать разные методы генерации альтернатив, например: метод Дельфи, эвристические приемы Повилейко, эвристические приемы реконструкции бизнеса, морфологический анализ.</p>
                <p className="text-justify text-ind">После этого проведем оценку всех сгенерированных вариантов по шкале от 0 до 1, где 0 – наименьшая оценка. Затем из представленных альтернатив выбираем наилучший вариант и записывай в столбец «Опт. вариант». Таким образом получаем таблицу на рисунке 3.3.</p>

                <img src="../images/3-3.png" className="img-fluid mx-auto d-block" alt="Рисунок 3.3"></img>
                <p className="text-center">Рисунок 3.3 – Перечень сгенерированных вариантов решения задач</p>

                <p className="text-justify text-ind">Также необходимо провести анализ ранее построенной диаграммы взаимосвязи подсистем и внедрить на схему полученные на рисунке 3.3 варианты. Получается усовершенствованная система взаимосвязи подсистем, представленная на рисунке 3.4.</p>

                <img src="../images/3-4.png" className="img-fluid mx-auto d-block" alt="Рисунок 3.4"></img>
                <p className="text-center">Рисунок 3.4 – Усовершенствованная диаграмма взаимосвязей подсистем</p>

                <p className="text-justify text-ind mb-0">Все изменения подписаны с помощью примечаний. Можно увидеть значительные улучшения по сравнению со старой диаграммой на рисунке 2.3.</p>
                <p className="text-justify text-ind">Проведем повторный прогноз состояния систем после усовершенствования диаграммы взаимосвязей подсистем. Создадим новую таблицу и добавим два столбца: «значение было» и «значение будет», для понимаю на сколько все изменилось.</p>

                <img src="../images/3-5.png" className="img-fluid mx-auto d-block" alt="Рисунок 3.5"></img>
                <p className="text-center">Рисунок 3.5 – Описание нового состояния подсистем</p>

                <p className="text-justify text-ind mb-0">Путем использования более эффективных методов поиска и более продвинутых систем, а также максимальное использование интернет возможностей, можно достигнуть более эффективных результатов на пути к решению проблемы трудоустройства. Показатели время всех подсистем значительно улучшились, что говорит о верно выбранном направлении деятельности.</p>

                <div className="d-flex justify-content-between mt-5">
                    <Link to="/systems-project/razdel-3/glava-1"><button type="button" className="btn btn-outline-primary">Предыдущая</button></Link>
                    <Link to="/systems-project/razdel-3/glava-3"><button type="button" className="btn btn-outline-primary">Следующая</button></Link>
                </div>
            </div>
        );
    }

    componentWillUnmount() {
        document.getElementById('menu-3-2').classList.remove('active');
    }

    componentDidMount() {
        document.getElementById('menu-3-2').classList.add('active');
    }
}

export default R3_G2;