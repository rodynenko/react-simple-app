/**
* Define inner content for first screen
*/
import React from 'react';

export default  class FirstScreenContent extends React.Component {
	constructor(){
		super();
		this.state = {
			menuElements: [
				{ text: "Автотранспорт", imgSrc: "logo-transport" },
				{ text: "Будівництво, архітектура, землекористування", imgSrc: "logo-building" },
				{ text: "Громадянство", imgSrc: "logo-publicity" },
				{ text: "Захист прав дитини", imgSrc: "logo-childhood" },
				{ text: "Реєстрація місця, проживання/перебування", imgSrc: "logo-reestration" },
				{ text: "Підприємницька діяльність", imgSrc: "logo-business" },
				{ text: "Санітарне та епідемічне благополуччя, ветеринарна медицина", imgSrc: "logo-ses" },
				{ text: "Комунальне господарство", imgSrc: "logo-gek" }
			]
		};
	}

	render(){
		let items = this.state.menuElements;
		return (
			<div className="content">
				<div className="categories__title">Виберіть категорію</div>
				<div className="categories__list">
					{ items.map((item,i) => <CategoryItem key={i} text={item.text} img={item.imgSrc}/> ) }
				</div>
			</div>
		)
	}
}

const CategoryItem = (props) => (
	<div className="categories__list-item">
		<a className="category-card" href="#">
			<div className="category-card__image">
				<div className={"logo "+props.img}></div>
			</div>
			<div className="category-card__title">
				<span className="category-card__title-inner-text">{props.text}</span>
			</div>
		</a>
	</div>
);
