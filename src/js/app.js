import React from 'react';
import ReactDOM from 'react-dom';
//import ReactDOM from 'react-dom';

import Header from './Components/Header';
import FirstScreenContent from './Components/FirstScreenContent';

// load stylesheets
require("../less/style.less");

class AdminService extends React.Component{
	render(){
		return (
			<div>
				<Header />
				<FirstScreenContent />
			</div>
		)
	}
};


ReactDOM.render(<AdminService />, document.getElementById('page-content'));
