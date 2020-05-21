import React from 'react'

export class Crads extends React.Component {
	render() {
		return(
			<div style={cardStyle} className={(this.props.click)?(this.props.sty):(this.props.sty1)} >
					Quote for you
					<h2 >{this.props.quote}</h2>
			</div>
		)
	}
}
const cardStyle={
	
	marginTop:'0',
	background:"#c723ba",
	color:'white',
	boxShadow:'2px 2px 4px violet'
	}

export default Crads