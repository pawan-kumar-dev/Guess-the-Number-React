import React,{memo} from 'react';
import classes from './Form.module.css';
const Form=(props)=>{
let {handleClick,handleChange}=props;
let {isNum,userGuess}=props.globalState;
    return(
            <form className={classes.form}>
                <input type="text" min="1" name="userGuess" onChange={handleChange} value={userGuess} placeholder="Enter the number" required autoComplete="off"/>
                  <span>{!isNum&&"Not a num, Please Enter a Number"}</span>
                <button onClick={handleClick}>Submit the Guess</button>
            </form>
    )
}
export default memo(Form);