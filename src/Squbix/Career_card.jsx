import React from 'react'
import {NavLink} from 'react-router-dom'


const Career_card=(props)=>{
    return(
        <>

<div class="row mb-3">
<div class="col-md-12">
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-md-3">
                   <img class="imgjb" src={props.imgsrc} />
                </div>
                <div class="col-md-7">
                    <h5>{props.job_title}</h5>
                    <small>Experience : {props.experience}</small> <br />
                    <small>Skill : {props.skill}</small> <br />
                    <small>Location : {props.location}</small>
                    <p><small style={{fontWeight:'600'}}>SQUBIX DIGITAL</small></p>
                </div>
                <div class="col-md-2">
                  
                {/* <a target={props.target} href={props.link}>
                        <button className={props.class}>{props.status2}</button> 
                        </a> */}

                        <button type="button" className={props.class} data-bs-toggle="modal" data-bs-target="#exampleModal">{props.status2}</button> 

                        {/* <button style={{marginLeft:'5px'}} className="btn btn-primary">Details</button> */}
                   <br/>
                    <small>Published on : {props.date}</small> <br />
                                    <small>Status : {props.status}</small>
                </div>
            </div>
            
        </div>
    </div>
</div>
</div>

{/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  
        </>
    )
}

export default Career_card;