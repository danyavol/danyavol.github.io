import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.scss';
import ScrollToTop from './components/scrollToTop/scrollToTop';

import Header from './components/header/header';

import Home from './pages/home/home';
import Intro from './pages/intro/intro';
import R1_G1 from './pages/r1_g1/r1_g1';
import R1_G2 from './pages/r1_g2/r1_g2';
import R1_G3 from './pages/r1_g3/r1_g3';
import R1_G4 from './pages/r1_g4/r1_g4';
import R2_G1 from './pages/r2_g1/r2_g1';

function App() {
  return (
	<Router>
		<ScrollToTop />
		<div className="container-xl my-5">
			<div className="row h-75 justify-content-start">

				<Header />
				<div className="col-8 p-0">
					<div className="content border rounded shadow-sm p-3 bg-white">
						<Switch>
							<Route exact path="/systems-project">
								<Home />
							</Route>
							<Route exact path="/systems-project/intro">
								<Intro />
							</Route>
							<Route exact path="/systems-project/razdel-1/glava-1">
								<R1_G1 />
							</Route>
							<Route exact path="/systems-project/razdel-1/glava-2">
								<R1_G2 />
							</Route>
							<Route exact path="/systems-project/razdel-1/glava-3">
								<R1_G3 />
							</Route>
							<Route exact path="/systems-project/razdel-1/glava-4">
								<R1_G4 />
							</Route>
							<Route exact path="/systems-project/razdel-2/glava-1">
								<R2_G1 />
							</Route>
						</Switch>
					</div>
				</div>
				
			</div>
		</div>
    </Router>
    
  );
}

export default App;
