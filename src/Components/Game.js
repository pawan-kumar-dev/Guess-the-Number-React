import React,{memo} from 'react';
import Form from './Form';
import Header from './Header';
import Footer from './Footer';
import classes from './Game.module.css';
const Game=(props)=>{
    let {color,level,maxNum,userWin,conclusion}=props.globalState
    return(
        <div className={classes.MainContainer} style={{backgroundColor:`${color}`}}>
            <Header maxNum={maxNum} level={level}/>
             <Form
             globalState={props.globalState}
             handleChange={props.handleChange} 
             handleClick={props.handleClick}/>
             <Footer userWin={userWin} conclusion={conclusion}/>
          </div>
    )
}
export default memo(Game);