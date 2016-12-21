/**
* Define inner content for first screen
*/
import React from 'react';
import { Link } from 'react-router';

export default  class FirstScreenContent extends React.Component {
	constructor(){
		super();
		this.state = {
			menuElements: [
				{ text: "Автотранспорт", imgSrc: "logo-transport", linkTo: "business" },
				{ text: "Будівництво, архітектура, землекористування", imgSrc: "logo-building", linkTo: "business" },
				{ text: "Громадянство", imgSrc: "logo-publicity", linkTo: "business" },
				{ text: "Захист прав дитини", imgSrc: "logo-childhood", linkTo: "business" },
				{ text: "Реєстрація місця, проживання/перебування", imgSrc: "logo-reestration", linkTo: "business" },
				{ text: "Підприємницька діяльність", imgSrc: "logo-business", linkTo: "business" },
				{ text: "Санітарне та епідемічне благополуччя, ветеринарна медицина", imgSrc: "logo-ses", linkTo: "business" },
				{ text: "Комунальне господарство", imgSrc: "logo-gek", linkTo: "business" }
			]
		};
	}

	render(){
		let items = this.state.menuElements;
		return (
			<div className="content">
				<div className="categories__title">Виберіть категорію</div>
				<div className="categories__list">
					{ items.map((item,i) => <CategoryItem key={i} text={item.text} img={item.imgSrc} linkTo={item.linkTo}/> ) }
				</div>
			</div>
		)
	}
}

const CategoryItem = (props) => (
	<div className="categories__list-item">
		<Link to={props.linkTo} className="category-card">
			<div className="category-card__image">
				<div className={"logo "+props.img}></div>
			</div>
			<div className="category-card__title">
				<span className="category-card__title-inner-text">{props.text}</span>
			</div>
		</Link>
	</div>
);
