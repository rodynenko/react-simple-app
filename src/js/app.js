import React from 'react';
import ReactDOM from 'react-dom';
//import ReactDOM from 'react-dom';

import Header from './Components/Header';
import FirstScreenContent from './Components/FirstScreenContent';
import SecondScreenContent from './Components/SecondScreenContent';
import ThirdScreenContent from './Components/ThirdScreenContent';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// load stylesheets
require("../less/style.less");

class AdminService extends React.Component{
	render(){
		return (
			<div>
				<Header />
				{this.props.children}
			</div>
		)
	}
};


ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={AdminService}>
			<IndexRoute component={FirstScreenContent}></IndexRoute>
			<Route path='business' component={SecondScreenContent}></Route>
			<Route path='business/export-licence' component={ThirdScreenContent}></Route>
		</Route>
	</Router>,
document.getElementById('page-content'));
