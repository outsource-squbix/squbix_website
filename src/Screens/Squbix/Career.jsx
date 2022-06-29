import React from 'react'
import Career_card from './Career_card';
import Career_details from './Career_details';

const Career = () => {
    return (
        <>


<h1 class="text-center" style={{marginTop:'70px'}}>Current Openings</h1>
<hr/>
<section class="mb-5">
    <div class="container">

    <div class="row">

        <div class="col-md-12 px-5">

        {
    Career_details.map((val, ind)=>{
        return <Career_card
        imgsrc={val.imgsrc}
        job_title={val.job_title}
        experience={val.experience}
        skill={val.skill}
        location={val.location}
        target={val.target}
        link={val.link}
        date={val.date}
        status={val.status}
        status2={val.status2}
        class={val.class}
        />
    })
    }

            {/* <div class="row mb-3">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-3">
                                   <img class="imgjb" src="https://image.freepik.com/free-vector/ui-ux-designers-work-flat-vector-illustration_82574-8091.jpg" />
                                </div>
                                <div class="col-md-7">
                                    <h5>Senior UX Designer</h5>
                                    <small>Bengaluru, India</small>
                                    <p><small>SQUBIX DIGITAL, BENGALURU</small></p>
                                </div>
                                <div class="col-md-2">
                                 
                                   <a target="" href="">
                        <button className="btn btn-success" disabled>Apply</button> 
                        </a>
                        <button style={{marginLeft:'5px'}} className="btn btn-primary">Apply</button>
                
                             <br/>
                                    <small>Published on 03/02/2021</small> <br />
                                    <small>Status : Closed</small>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div class="row mb-3">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-3">
                                   <img class="imgjb" src="https://media.istockphoto.com/vectors/blockchain-icon-concept-on-white-background-cryptocurrency-data-sign-vector-id979321630?k=6&m=979321630&s=612x612&w=0&h=FeveQPpyl_I4x9bBNDDmH2OJRAYCKvTAjq6U97hXA1I=" />
                                </div>
                                <div class="col-md-7">
                                    <h5>Blockchain Developer</h5>
                                    <small>Bhubaneswar, India</small>
                                    <p><small>SQUBIX DIGITAL, BHUBANESWAR</small></p>
                                </div>
                                <div class="col-md-2">
                                  
                                   <a target="_blank" href="https://forms.gle/jgXDmDty15Dmh4N29">
                        <button className="btn btn-primary">Apply</button>
                        </a>
                                   <br/>
                                    <small>Published on 10/04/2021</small>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-3">
                                   <img class="imgjb" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" />
                                </div>
                                <div class="col-md-7">
                                    <h5>React Developer</h5>
                                    <small>Bhubaneswar, India</small>
                                    <p><small>SQUBIX DIGITAL, BHUBANESWAR</small></p>
                                </div>
                                <div class="col-md-2">
                                  
                        <a target="_blank" href="https://forms.gle/jgXDmDty15Dmh4N29">
                        <button className="btn btn-primary">Apply</button>
                        </a>
                                  
                                   <br/>
                                    <small>Published on 17/04/2021</small>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div> */}
            </div>
        </div>
    </div>
</section>



        </>
    )
}
export default Career;