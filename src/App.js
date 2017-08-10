import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import request from 'superagent';
import 'bulma/css/bulma.css';
import {TemperatureConverter} from 'cis137-components';
import ReactGA from 'react-ga'
import './App.css';
import Home from './Home.js';
import About from './About';
import Events from './Events';
import YouTube from './YouTube';

ReactGA.initialize('UA-104316879-1');

/**
 * @return {null}
 */
function Analytics(props){
    ReactGA.set({page: props.location.pathname + props.location.search});
    ReactGA.pageview(props.location.pathname + props.location.search);
	return null;
}

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			headerMinimized: false,
			temp:null
		};
		setTimeout(() =>{
			this.setState({
				componentDidMount(){}
			});
		},3000);
	}

	minimizeHeader = () => {
		this.setState({
			headerMinimized: !this.state.headerMinimized
		});
	};

	componentDidMount(){
		request
			.get(`http://api.openweathermap.org/data/2.5/weather?zip=34286&APPID=${process.env.REACT_APP_WEATHER_ACCESS_KEY}`)
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
				  <section>
					  <div>
						  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
						  <Route path="/" component={Analytics}/>
						  <div className={`App-hero ${headerMinimized ? 'minimized' : ''}`}>
							  <header onClick={this.minimizeHeader}>

							  </header>

							  <nav class="breadcrumb is-large" aria-label="breadcrumbs" >
								  <ul>
									  <Link to ="/">Home</Link>
									  <Link to="/about">About</Link>
									  <Link to="/events">Events</Link>

									  <p><bold>The current temperature: </bold> {this.state.temp} degrees Fahrenheit</p>

									  <h1>{this.state.title}</h1>

								  </ul>
							  </nav>

							  <section>
								  <YouTube />
							  </section>
						  </div>

					  </div>


					  <Route path="/" exact component={Home}/>
					  <Route path="/about" exact component={About}/>
					  <Route path="/events" exact component={Events}/>


					  <br/>


				  </section>

				</div>

			</BrowserRouter>
		);
	}
}

export default App;
