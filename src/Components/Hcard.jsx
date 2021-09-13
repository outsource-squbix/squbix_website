import React from 'react'
import {NavLink} from 'react-router-dom'


const Hcard=(props)=>{
    return(
        <>

        <figure class="snip1581">
  <img id="overlay" src={props.img} alt="profile-sample2"/>
  <figcaption>
    <h3 class="title1">{props.title}</h3>
    <p class="title2">{props.text}</p>
  </figcaption><NavLink to={props.link}></NavLink>
</figure>
  
        </>
    )
}

export default Hcard;