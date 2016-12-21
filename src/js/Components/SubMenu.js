/**
* Define inner content for first screen
*/
import React from 'react';

export default  class SubMenu extends React.Component {

	render(){
		let items = this.props.structure;
		return (
			<div className="submenu">
				<div className="submenu__structure">
					{ items.map((item,i) => {
						if (i < items.length-1){
							return <span key={i}>{item}<img src="./image/arrow.png" className="submenu__arrow"></img></span>;
						}else{
							return <span key={i}>{item}</span>;
						}
					})
				}
				</div>
			</div>
		)
	}
}
