import React, { useEffect, useState } from 'react';

const Contacts = () => {

    return (
    <div className="w3-container w3-padding-large contact" style={{position: 'relative', zIndex: 2}}>
        <div id="contact" style={{marginTop: -100, height: 100}}></div>
        <div className="waviy" style={{marginBottom: 110}}>
            <span style={{"--i":1}}>C</span>
            <span style={{"--i":2}}>O</span>
            <span style={{"--i":3}}>N</span>
            <span style={{"--i":4}}>T</span>
            <span style={{"--i":5}}>A</span>
            <span style={{"--i":6}}>C</span>
            <span style={{"--i":7}}>T</span>
            <span style={{"--i":8}}> </span>
            <span style={{"--i":9}}>&nbsp;</span>
            <span style={{"--i":10}}>M</span>    
            <span style={{"--i":11}}>E</span>       
        </div>
        <div className="w3-row-padding w3-center w3-border w3-border-dark-grey" style={{margin:0, padding: 0, marginTop: -50}}>
            <div className="w3-col l4 w3-dark-grey">
                <p><i className="fa fa-envelope w3-xxlarge w3-text-light-grey"></i></p>
                <p><a href="mailTo: jinwangdev531@gmail.com?Subject=I'd like to have a interview with you."  style={{textDecoration: 'underline'}}>jinwangdev531@gmail.com</a></p>
            </div>
            <div className="w3-col l4">
                <p><i className="fa fa-clock-o w3-xxlarge w3-text-light-grey"></i></p>
                <p>Full Time Availability</p>
            </div>
            <div className="w3-col l4  w3-dark-grey">
                <p><i className="fa fa-github w3-xxlarge w3-text-light-grey"></i></p>
                <p><a href="https://github.com/FantasticFullStackDev" target="_blank" title="https://github.com/FantasticFullStackDev" style={{textDecoration: 'underline'}}> Git Hub </a></p>
            </div>
            <div className="w3-col l4">
                <p><i className="fa fa-telegram w3-xxlarge w3-text-light-grey"></i></p>
                <p><a href="https://t.me/WebDevNinja" target="_blank" title="https://t.me/WebDevNinja" style={{textDecoration: 'underline'}}> Telegram </a></p>
            </div>
            <div className="w3-col l4  w3-dark-grey">
                <p><i className="fa fa-skype w3-xxlarge w3-text-light-grey"></i></p>
                <p><a href="https://join.skype.com/invite/FoWj6FCMMNhh" target="_blank" title="https://join.skype.com/invite/FoWj6FCMMNhh" style={{textDecoration: 'underline'}}> Skype </a></p>
            </div>
            <div className="w3-col l4">
                <p>
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="discord" 
                className="svg-inline--fa fa-discord" role="img" xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 640 512" style={{width: 45}}>
                    <path fill="currentColor" d="M524.5 69.84a1.5 1.5 0 0 0 -.764-.7A485.1 485.1 0 0 0 404.1 32.03a1.816 
                    1.816 0 0 0 -1.923 .91 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 
                    -15.14-30.6 1.89 1.89 0 0 0 -1.924-.91A483.7 483.7 0 0 0 116.1 69.14a1.712 1.712 0 0 0 -.788 .676C39.07 
                    183.7 18.19 294.7 28.43 404.4a2.016 2.016 0 0 0 .765 1.375A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 
                    2.063-.676A348.2 348.2 0 0 0 208.1 430.4a1.86 1.86 0 0 0 -1.019-2.588 321.2 321.2 0 0 1 -45.87-21.85 
                    1.885 1.885 0 0 1 -.185-3.126c3.082-2.309 6.166-4.711 9.109-7.137a1.819 1.819 0 0 1 1.9-.256c96.23 43.92 200.4 
                    43.92 295.5 0a1.812 1.812 0 0 1 1.924 .233c2.944 2.426 6.027 4.851 9.132 7.16a1.884 1.884 0 0 1 -.162 
                    3.126 301.4 301.4 0 0 1 -45.89 21.83 1.875 1.875 0 0 0 -1 2.611 391.1 391.1 0 0 0 30.01 48.81 1.864 1.864 
                    0 0 0 2.063 .7A486 486 0 0 0 610.7 405.7a1.882 1.882 0 0 0 .765-1.352C623.7 277.6 590.9 167.5 524.5 
                    69.84zM222.5 337.6c-28.97 0-52.84-26.59-52.84-59.24S193.1 219.1 222.5 219.1c29.67 0 53.31 26.82 52.84 
                    59.24C275.3 310.1 251.9 337.6 222.5 337.6zm195.4 0c-28.97 0-52.84-26.59-52.84-59.24S388.4 219.1 417.9 
                    219.1c29.67 0 53.31 26.82 52.84 59.24C470.7 310.1 447.5 337.6 417.9 337.6z"></path>
                </svg>
            </p>
                <p><a href="https://discord.gg/WZKJTNJE" target="_blank" title="https://discord.gg/WZKJTNJE" style={{textDecoration: 'underline'}}> Discord </a></p>
            </div>
        </div>
    </div>
    );
}

export default Contacts;