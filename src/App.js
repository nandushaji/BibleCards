import React from 'react'
import './App.css'
import Header from './componets/Header.js'
import Button from './componets/Button.js'
import Crads from './componets/Crads.js'

export class App extends React.Component {
  state={
    quotes:[
    {id:0,
      title:"The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness." },
    {id:1,
      title: "The name of the LORD is a strong tower; the righteous man runs into it and is safe."},
    {
      id:2,
      title: "Now faith is the substance of things hoped for, the evidence of things not seen. "},
    {id:3,
      title: "And whatever you ask in prayer, you will receive, if you have faith."},
    {id:4,
      title:"For we walk by faith, not by sight." },
    {id:5,
      title:"I have fought the good fight, I have finished the race, I have kept the faith." },
    {id:6,
      title:"The apostles said to the Lord, 'Increase our faith!'" }
    ],
    id:Math.floor((Math.random()*6)),
    style:"animate__animated animate__flip",
    style1:"animate__animated animate__flipInY",
    click:true

  }

	onClickHandler=()=>{
      this.setState({id:Math.floor((Math.random()*6))})
      this.setState({style:"animate__animated animate__flip"})
      this.setState({click:!this.state.click})

      console.log(this.state.id)
      

	}
  render() {
    return (
    <div className='container' style={{background:'#eeeeee', verticalAlign:'center'}}>
      <div className='App'>
     	<Header />
     	<Crads quote={this.state.quotes[this.state.id].title} key={this.state.quotes.id} sty={this.state.style} sty1={this.state.style1} click={this.state.click}/>
     	<Button  onClickHandler={this.onClickHandler} />
      </div>
    </div>  
    )
  }
}

export default App