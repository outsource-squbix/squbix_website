import React from 'react'


const PrivateBlockChain = () =>{
    return(
        <>

<div className="container" style={{marginTop:'150px'}} id="hyp_ledg">
          <img className="img_polka" src="../images/pvtbchain.png" alt=""/>

          <p className="text-center" style={{marginTop:'50px'}}>
          A private blockchain is an invitation-only blockchain. The blockchain is governed by a single entity. The participating parties require permission to read, write, or audit the blockchain. The blockchain can have multiple layers of data access to keep certain pieces of data confidential.
          </p>

          <button className="btn_cont" style={{marginTop:'50px'}}>CONTACT</button>
       </div>


       <div className="container my-5" style={{background:'#f9f9f9'}}>
<h3 className="text-center">Private Blockchains</h3>
<hr/>
<div className="row">
<div className="col-md-6 my-2" id="card_hover">
<div class="card h-100" id="card_pvt">
 <div className="card_img3" >
<img className="card_img3" src="../images/icons/hypledg2.png" alt="img"/>
</div>
<div class="card-body">
{/* <h5 class="card-title text-center">Hyperledger</h5> */}
<p class="card-text text-center">Hyperledger is an open source community focused on developing a suite of stable frameworks, tools and libraries for enterprise-grade blockchain deployments.</p>
</div>
<button className="btn_pvt" type="submit" data-toggle="modal" data-target="#modal1">Learn More</button>
</div>
</div>

<div className="col-md-6 my-2" id="card_hover">
<div class="card h-100" id="card_pvt">
<div className="card_img3" >
<img className="card_img3" src="../images/icons/corda2.png" alt="img"/>
</div>
<div class="card-body">
{/* <h5 class="card-title text-center">Corda</h5> */}
<p class="card-text text-center">Corda is a permissioned blockchain platform that powers DLT applications that enable businesses to transact directly and in strict privacy with one another.</p>
</div>
<button className="btn_pvt" type="submit" data-toggle="modal" data-target="#modal3">Learn More</button>
</div>
</div>


</div>
</div>

<div className="container">
  <div className="row">
    <div className="col-md-6">
      <p>
        <strong>Fabric : </strong>  <br/>
        <strong>Iroha : </strong> <br/>
        <strong>Sawtooth : </strong>  <br/>
        <strong>Besu : </strong>   <br/>
        <strong>Indi : </strong>  <br/>
        <strong>Ursa : </strong>  <br/>
      </p>
    </div>
    <div className="col-md-6">

    </div>
  </div>
</div>


{/* Modal 1 */}

<div class="modal fade" id="modal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        {/* <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> */}
        <img className="card_img3" src="../images/icons/hypledg.png" alt="img"/>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div className="container">
            <img src="" alt=""/>

            Hyperledger Fabric is a platform for distributed ledger solutions underpinned by a modular 
            architecture delivering high degrees of confidentiality, resiliency, flexibility, and scalability. 
            It is designed to support pluggable implementations of different components and accommodate the 
            complexity and intricacies that exist across the economic ecosystem.
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

      </div>
    </div>
  </div>
</div>
{/* Modal 1 End*/}
{/* Modal 2 */}
<div class="modal fade" id="modal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        {/* <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> */}
        <img className="card_img3" src="../images/icons/polka.png" alt="img"/>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div className="container">
            <img src="" alt=""/>

            Polkadot is a true multi-chain application environment where things like cross-chain registries and 
            cross-chain computation are possible. Polkadot can transfer this data across public, open, 
            permissionless blockchains as well as private, permissioned blockchains. Which makes it possible 
            to build applications that get permissioned data from a private blockchain and use it on a public 
            blockchain.
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

      </div>
    </div>
  </div>
</div>
{/* Modal 2 End*/}
{/* Modal 3 */}
<div class="modal fade" id="modal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        {/* <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> */}
        <img className="card_img3" src="../images/icons/corda.png" alt="img"/>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <div className="container">
              <img src="" alt=""/>
              Corda is a next-gen blockchain platform that delivers privacy, scalability, and security, making it 
              the DLT platform of choice for financial services and beyond. Only Corda allows you to build 
              interoperable blockchain networks that transact in strict privacy. Corda's smart contract 
              technology allows businesses to transact directly, with value.
          </div>
      
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

      </div>
    </div>
  </div>
</div>
{/* Modal 3 End*/}
{/* Modal 4 */}
<div class="modal fade" id="modal4" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        {/* <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> */}
        <img className="card_img3" src="../images/icons/ripple.png" alt="img"/>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <ol>
          <li>Ripple is originally designed as a day to day payment system, so it is much more powersafe than Bitcoin. As the results, the transactions are much quicker and cheaper.</li>
          <li>Ripple has started as an official organization, as its main focus is to be used by banks. So it is not a subject of multiple regulation checks as many other cryptocurrencies.</li>
          <li>Ripple has the ability to be exchanged to any currency or valuable (like gold) with a unified minimal commission.</li>
        </ol>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

      </div>
    </div>
  </div>
</div>
{/* Modal 4 End*/}
        </>
    )
}
export default PrivateBlockChain;