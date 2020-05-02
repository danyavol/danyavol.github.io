import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './content.scss';

class Content extends Component {
    render() {
        return (
            <div className="content">
                <h2>Content</h2>
                <p>fd</p>
                <p>fd</p>
                <p>fd</p>
                <p>fd</p>
                <p>fd</p>
                <p>fd</p>
                <p>fd</p>
                <p>fd</p>
                <p>fd</p>
                <p>fd</p>
                <p>fd</p>
                <p>fd</p>
                <p>fd</p>
                <p>fd</p>
                <p>fd</p>
                <p>fd</p>
                <p>fd</p>
                <p>fd</p>
                <p>fd</p>
                <p>fd</p>
                <p>fd</p>
                <p>fd</p>
                <p>fd</p>
                <p>fd</p>
                <p>fd</p>
                <p>fd</p>
                <p>fd</p>
                <p>fd</p>
                <p>fd</p>
                <p>fd</p>

                <div className="d-flex justify-content-between mt-5">
                    <Link to="/"><button type="button" className="btn btn-outline-secondary">Предыдущая</button></Link>
                    <Link to="/content"><button type="button" className="btn btn-outline-primary">Следующая</button></Link>
                </div>
            </div>
        );
    }

    componentWillUnmount() {
        document.getElementById('menu2').classList.remove('active');
    }

    componentDidMount() {
        document.getElementById('menu2').classList.add('active');
    }
}

export default Content;