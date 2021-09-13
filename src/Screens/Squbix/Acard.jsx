import React from 'react'
import {NavLink} from 'react-router-dom'


const Acard=(props)=>{
    return(
        <>
        <div className="col-md-4"  id="a_card">
        <div class="card my-4">

  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.text}</p>
  </div>
</div>
        </div>
  
        </>
    )
}

export default Acard;