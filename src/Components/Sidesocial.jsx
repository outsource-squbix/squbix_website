import React from 'react'

const Sidesocial = () => {
    return(
        <>
        <div class="sticky-container">
    <ul class="sticky">
        <li>
        <a href="https://www.facebook.com/Squbix-789729197819785" target="_blank">
        <img src="/images/fb.png" width="32" height="32" />
            <p style={{color:'white'}}>Like Us on<br />Facebook</p>
        </a>
        </li>
        <li>
        <a href="https://twitter.com/squbixpro" target="_blank">
        <img src="/images/twitter.png" width="32" height="32" />
            <p style={{color:'white'}}>Follow Us on<br />Twitter</p>
        </a>
        </li>
        <li>
        <a href="https://www.linkedin.com/company/10438852/" target="_blank">
        <img src="/images/linkedin.png" width="32" height="32" />
            <p style={{color:'white'}}>Follow Us on<br />LinkedIn</p>
        </a>
        </li>
        <li>
        <a href="/" target="_blank">
        <img src="/images/instagram.svg" width="32" height="32" />
            <p style={{color:'white'}}>Follow Us on<br />Instagram</p>
        </a>
        </li>
    </ul>
</div>
        </>
    )
}
export default Sidesocial;