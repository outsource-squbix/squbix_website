import React from 'react'
import {NavLink} from 'react-router-dom'


const Acard2=(props)=>{
    return(
        <>
        <div className="col-md-6 my-2">
        <div class="card h-100">
<div className="card_img3" >
    <img className="card_img3" src={props.icon} alt="img"/>
</div>
  <div class="card-body">
    <h5 class="card-title text-center">{props.title}</h5>
    <p class="card-text">{props.text}</p>
  </div>
</div>
        </div>
  
        </>
    )
}

export default Acard2;