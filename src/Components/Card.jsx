import React from 'react'
import {NavLink} from 'react-router-dom'


const Card=(props)=>{
    return(
        <>
 
    <div class="card my-3" style={{width:'20rem'}}>
  <img src={props.imgsrc} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to='/contact'><button className="btn btn-primary">Click Here</button></NavLink>
  </div>
</div>
        </>
    )
}

export default Card;