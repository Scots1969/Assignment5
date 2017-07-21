import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import request from 'superagent';
import {TemperatureConverter} from 'cis137-components';

import './App.css';
import Home from './Home.js';
import About from './About';
import Events from './Events';



class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			headerMinimized: false,
			temp:''
		};
	}

	minimizeHeader = () => {
		this.setState({
			headerMinimized: !this.state.headerMinimized
		});
	};

	componentDidMount(){
		request

			.get('http://api.openweathermap.org/data/2.5/weather?zip=21157,us&APPID=924d6ca7c2acd9294d6e042394ead7f4')

			.end((err,res) => {
			if(err){
			  	console.error(err);
			  	return;
			  }

			  this.setState({
				  temp:parseFloat((9/5*(res.body.main.temp-273.15)+32).toFixed(2))

			  });
			})
	}



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
							<tempConvert/>
							<p ><bold>The current temperature:</bold>{this.state.temp} degrees Fahrenheit</p>

						 <h1>{this.state.title}</h1>
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
