import React,{memo} from 'react';
import classes from './Header.module.css';
const Header=(props)=>{
    return(
        <>
        <h1 className={classes.title}>{props.maxNum===100?"Start Game":`Welcome to Level ${props.level}`}</h1><hr></hr>
            <h2 className={classes.rulesTitle}>Read the Rules carefully : </h2><hr></hr>
            <div className={classes.rules}>
            <p>1. Guess the Number between <span className={classes.mainPoint}>1 to {props.maxNum}</span>.</p>
             <p>2. If difference between Randomly generated number and your input value is <span className={classes.mainPoint}>0 then you won</span>.</p>
             <p>3. Otherwise enter another guess.</p>
            </div>
            <hr></hr>
        </>
    )
}

export default memo(Header);