import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.scss';

import Header from './components/header/header';
import Content from './components/content/content';
import Home from './pages/home/home';

function App() {
  return (
	<Router>
		<div className="container my-5">
			<div className="row h-75 justify-content-start">
				<Header />
				
				<div className="content col-8 border rounded shadow-sm p-3">
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/content">
							<Content />
						</Route>
					</Switch>
				</div>
			</div>
		</div>
    </Router>
    
  );
}

export default App;
