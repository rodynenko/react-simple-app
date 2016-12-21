/**
* Define inner content for second screen
*/
import React from 'react';
import { Link } from 'react-router';

import SubMenu from './SubMenu';

export default class SecondScreenContent extends React.Component {
	constructor(){
		super();
		this.state = {
			serviceItems: [
				{ text: "Видача ліцензії на імпорт товарів", linkTo: "/business/export-licence"},
				{ text: "Оформлення паспорту прив'язки сезонного майданчика для харчування", linkTo: "/business/export-licence"},
				{ text: "Державна реєстрація створення  відокремленого підрозділу юридичної особи", linkTo: "/business/export-licence"},
				{ text: "Для державної реєстрації зміни складу комісії з припинення", linkTo: "/business/export-licence"},
				{ text: "Видача разової (індивідуальної) ліцензії", linkTo: "/business/export-licence"},
				{ text: "Державна реєстрація створення юридичної особи", linkTo: "/business/export-licence"},
				{ text: "Державна реєстрація договорів (контрактів) про спільну інвестиційну діяльність за участю іноземного інвестора", linkTo: "/business/export-licence"},
				{ text: "Анулювання державної реєстрації іноземних інвестицій.", linkTo: "/business/export-licence"},
				{ text: "Анулювання державної реєстрації іноземних інвестицій.", linkTo: "/business/export-licence"},
				{ text: "Перереєстрація іноземних інвестицій", linkTo: "/business/export-licence"}
			],
			subMenuStructure: ["Послуги", "Підприємницькая діяльність"]
		};
	}

	render(){
		let items = this.state.serviceItems;
		return (
			<div className="content">
				<SubMenu structure={this.state.subMenuStructure} />
				<div className="services__title">
					<Link to="/" className="return-button">
						<img className="return-button__back-arrow" src="./image/back-arrow.png"></img>
						Назад
					</Link>
						Виберіть послугу
					<div className="step-indicator">
						Крок <span>2</span> із 3
					</div>
				</div>
				<div className="services__list">
					{ items.map((item,i) => <ServiceItem key={i} text={item.text} linkTo={item.linkTo}/> ) }
				</div>
			</div>
		)
	}
}

const ServiceItem = (props) => (
	<div className="service__list-item">
		<Link to={props.linkTo} className="service-card">
			<div className="service-card__title">
				{props.text}
			</div>
		</Link>
	</div>
);
