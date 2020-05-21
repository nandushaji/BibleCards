import React from 'react'

export class Button extends React.Component {
	render() {
		return (
			<div>
				<button style={btnStyle} className='btn'onClick={this.props.onClickHandler}>Click to shuffle</button>
			</div>
		)
	}
}
const btnStyle={
	background:"#c723ba",
	color:'white',
	fontSize:'1.1em',
	padding:'10px',
	border:'none',
	margin:'10px',
	boxShadow:'2px 2px 4px #9f0000',
	borderRadius:'10px'

}
export default Button