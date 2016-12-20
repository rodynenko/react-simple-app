/**
* Define site header
*/
import React from 'react';

export default class Header extends React.Component{
	render(){
		return (
			<header className="header">
				<h1 className="header__site-title">
					<img className="header__site-image" src="./image/book.png"></img>
					Центр адміністративних послуг
				</h1>
			</header>
		)
	}
}
/*	<img className="header__site-image" src="src/images/book.png"></img> */
