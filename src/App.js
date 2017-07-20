import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './Home.js';
import About from './About';
import Events from './Events';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			headerMinimized: false
		};
	}

	minimizeHeader = () => {
		this.setState({
			headerMinimized: !this.state.headerMinimized
		});
	};

	render() {
		let {headerMinimized} = this.state;
		return (
			<BrowserRouter>
				<div>
				  <div className={`App-hero ${headerMinimized ? 'minimized' : ''}`}>
					  <header onClick={this.minimizeHeader}>
						  <Link to="/"><h1>Westminster Swim Club</h1></Link>
					  </header>
					  <div className="Nav-bar">
						<nav>
						  <Link to="/">Home</Link> |
						  <Link to="/about">About</Link> |
						  <Link to="/events">Events</Link>
						  <p>This is the time container!</p>
						</nav>
				  </div>
				</div>

				<Route path="/" exact component={Home}/>
				<Route path="/about" exact component={About}/>
				<Route path="/events" exact component={Events}/>



				</div>


			</BrowserRouter>


		);
	}
}







export default App;
