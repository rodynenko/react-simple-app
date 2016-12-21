/**
* Define inner content for second screen
*/
import React from 'react';
import { Link } from 'react-router';

import SubMenu from './SubMenu';

export default class ThirdScreenContent extends React.Component {
	constructor(){
		super();
		this.state = {
			serviceItems: [
				{ text: "Видача ліцензії на імпорт товарів", linkTo: "/"},
				{ text: "Оформлення паспорту прив'язки сезонного майданчика для харчування", linkTo: "/"},
				{ text: "Державна реєстрація створення  відокремленого підрозділу юридичної особи", linkTo: "/"},
				{ text: "Для державної реєстрації зміни складу комісії з припинення", linkTo: "/"},
				{ text: "Видача разової (індивідуальної) ліцензії", linkTo: "/"},
				{ text: "Державна реєстрація створення юридичної особи", linkTo: "/"},
				{ text: "Державна реєстрація договорів (контрактів) про спільну інвестиційну діяльність за участю іноземного інвестора", linkTo: "/"},
				{ text: "Анулювання державної реєстрації іноземних інвестицій.", linkTo: "/"},
				{ text: "Анулювання державної реєстрації іноземних інвестицій.", linkTo: "/"},
				{ text: "Перереєстрація іноземних інвестицій", linkTo: "/"}
			],
			subMenuStructure: ["Послуги", "Підприємницькая діяльність", "Видача ліцензії на експорт товарів"],
			submitItems: [ ]
		};
	}

	changeListItem(pos){
		let items = this.state.submitItems, position = items.indexOf(pos);
		if(position>-1){
			items.splice(position,1);
		}else{
			items.push(pos);
		}
		this.setState({submitItems: items});
	}

	handleClick(e){
		e.target.classList.toggle('document-list__pointer_disabled');
		e.target.classList.toggle('document-list__pointer_active');

		let docNumber = e.target.getAttribute('data-document-number'),
				items = this.state.submitItems,
				pos = items.indexOf(docNumber);

		if (pos >-1){
			items.splice(pos,1);
		}else{
			items.push(docNumber);
		}

		this.setState({ submitItems: items });

		console.log(this.state.submitItems.length == 4, this.state.submitItems.length);
	}

	render(){
		let items = this.state.serviceItems;
		return (
			<div className="content">
				<SubMenu structure={this.state.subMenuStructure} />
				<div className="services__title">
					<Link to="/business" className="return-button">
						<img className="return-button__back-arrow" src="./image/back-arrow.png"></img>
						Назад
					</Link>
						Перевірте наявність документів
					<div className="step-indicator">
						Крок <span>3</span> із 3
					</div>
				</div>
				<div className="document-list">
					<ul>
						<li className="document-list__item">
							<div data-document-number="1" className="document-list__pointer_disabled" onClick={(e) => this.handleClick(e)}></div>
							<span>Документ, що посвідчує особу</span>
						</li>
						<li className="document-list__item">
							<div data-document-number="2" className="document-list__pointer_disabled" onClick={(e) => this.handleClick(e)}></div>
							<span>Водійське посвідчення</span>
						</li>
						<li className="document-list__item">
							<div data-document-number="3" className="document-list__pointer_disabled" onClick={(e) => this.handleClick(e)}></div>
							<span>Інформаційна картка</span>
						</li>
						<li className="document-list__item">
							<div data-document-number="4" className="document-list__pointer_disabled" onClick={(e) => this.handleClick(e)}></div>
							<span>Зразок заяви для здійснення вилучення</span>
						</li>
					</ul>
				</div>
				<div className="text-center">
					<a className={this.state.submitItems.length == 4 ? "submit-button_active" : "submit-button_disabled"}>
						Записатись
					</a>
				</div>

			</div>
		)
	}
}
