import React from 'react'
import './ShowItem.css'

const Result = (props) => {
    const style = {
        display: "block",
    }
    if(props.grade <= 0) {
        style.display = "none"
    }
    return(
        <>
            <div style = {style} className = "resultContainer">
                <div className = "cardMedia"></div>
                <div className = "cardText">
                    <h1 className = "text">Total credit <span className = "result">{props.credit}</span></h1>
                    <h1 className = "text"><span className = "span">Congratulation!</span> Your Grade is <span className = "result">{props.grade.toFixed(2)}</span>
                    </h1> 
                </div>                    
            </div>
        </>
    )
}
export default Result;