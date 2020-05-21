import React from 'react'

export class Header extends React.Component {
	render() {
		return (

			<header style={bilbleStyle}>
				<h2>Bible Quotes</h2>
			</header>
		)
	}
}
const bilbleStyle={
	background:"#eeeeee",
	color:"#c723ba",
	fontFamily:'Serif',
	padding:'10px',
	margin:'0px'
}

export default Header