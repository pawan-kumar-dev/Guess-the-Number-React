import React from 'react';
import './App.css';
import Game from './Components/Game';
class App extends React.PureComponent {
  constructor(props){
    super(props)
    this.state={
      userGuess:0,
      maxNum:100,
      generatedNum:0,
      isNum:true,
      userWin:false,
      level:1,
      color:'white',
      conclusion:''
    }
  }
componentDidMount=()=>{
  this.setState({
    generatedNum:this.generatedRandom()
  })
}
generatedRandom=()=>{
  return Math.floor(Math.random()*this.state.maxNum)+1
}
  handleChange=(e)=>{
    this.setState({
      userGuess:!isNaN(e.target.value)?Number(e.target.value):e.target.value,
      isNum:!isNaN(e.target.value),
      userWin:false,
      conclusion:'',
      color:'white'
  })
  }
  handleClick=(e)=>{
    e.preventDefault();
    if(!this.state.isNum||this.state.userGuess===0)return;
    const userInput=this.state.userGuess;
    const guess=this.state.generatedNum
    const numAbs=Math.abs(guess-userInput)
    if(numAbs===0){
      this.setState({
        userGuess:0,
        maxNum:this.state.maxNum+100,
        generatedNum:this.generatedRandom(),
        isNum:true,
        userWin:true,
        level:this.state.level+1,
        color:'lightgreen',
        conclusion:'Correct'
      })
    }
    else if(numAbs>=1 && numAbs<=4){
      this.setState({
        userGuess:0,
        color:'red',
        conclusion:'Hot'
      })
    }
    else if(numAbs>=5 && numAbs<=15){
      this.setState({
        userGuess:0,
        color:'yellow',
        conclusion:'Warm'
      })
    }
    else if(numAbs>=16){
      this.setState({
        userGuess:0,
        color:'lightblue',
        conclusion:'Cold'
      })
    }
  }
  render() {
    return (
      <>
      <h2 className="mainHeader">WELCOME TO NUMBER GUESSING GAME.</h2>
      <Game 
      globalState={this.state}
      handleChange={this.handleChange} 
      handleClick={this.handleClick}/>
      </>
    );
  }
}

export default App;
