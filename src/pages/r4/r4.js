import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class R4 extends Component {
    render() {
        return (
            <div className="homePage">
                <h4 className="text-center">4 РАЗРАБОТКА ТЕХНИЧЕСКОГО ЗАДАНИЯ</h4>
                

                <div className="d-flex justify-content-between mt-5">
                    <Link to="/systems-project/razdel-3/glava-3"><button type="button" className="btn btn-outline-primary">Предыдущая</button></Link>
                    <Link to="/systems-project/zakluchenie"><button type="button" className="btn btn-outline-primary">Следующая</button></Link>
                </div>
            </div>
        );
    }

    componentWillUnmount() {
        document.getElementById('menu-tz').classList.remove('active');
    }

    componentDidMount() {
        document.getElementById('menu-tz').classList.add('active');
    }
}

export default R4;