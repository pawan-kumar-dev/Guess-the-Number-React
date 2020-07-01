import React,{memo} from 'react';
import classes from './Footer.module.css';
const Footer=(props)=>{
    return(
        <>
         <h2 className={classes.winText}>{props.userWin&&"You Win, Previous Level"}</h2>
        <h2 className={classes.conclusion}>{props.conclusion!==''&&`Statement => ${props.conclusion}`}</h2>
        </>
    )
}
export default memo(Footer);