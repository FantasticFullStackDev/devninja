import React, { useEffect, useState } from 'react';

const Portfolio = () => {
    
    return (
        <React.Fragment>
            <div className="container" style={{position: 'relative', zIndex: 2}}>
                <div id="myworks" style={{marginTop: -100, height: 100}}></div>
                <div className="waviy">
                    <span style={{"--i":1}}>P</span>
                    <span style={{"--i":2}}>r</span>
                    <span style={{"--i":3}}>e</span>
                    <span style={{"--i":4}}>v</span>
                    <span style={{"--i":5}}>i</span>
                    <span style={{"--i":6}}>o</span>
                    <span style={{"--i":7}}>u</span>
                    <span style={{"--i":8}}>s</span>
                    <span style={{"--i":9}}>&nbsp;</span>
                    <span style={{"--i":10}}>W</span>    
                    <span style={{"--i":11}}>o</span>       
                    <span style={{"--i":12}}>r</span>     
                    <span style={{"--i":13}}>k</span>     
                    <span style={{"--i":14}}>s</span>      
                </div>
            </div>
            <div className="filters filter-button-group" style={{position: 'relative', zIndex: 2}}>
                <ul>
                    <li className="active"><a href onClick={(e) => console.log('ok')} data-filter="*" id="all">All</a></li>
                    <li><a href onClick={(e) => console.log('ok')} data-filter="website" id="website">Website</a></li>
                    <li><a href onClick={(e) => console.log('ok')} data-filter="animation" id="animation">Animation</a></li>
                    <li><a href onClick={(e) => console.log('ok')} data-filter="blockchain" id="blockchain">Blockchain</a></li>
                </ul>
            </div>
            <div id="container" className="isotope" style={{position: 'relative', zIndex: 2, opacity: 0.8}}>    
                <div className="grid-item" data-filter="website">
                    <a className="popupimg" href="./assets/images/portfolio/accounting.png" target="_blank">
                        <img className="lazy" data-src="./assets/images/portfolio/accounting.png" />
                    </a>
                    <div className="overlay"><a href="https://www.accointing.com/" target="_blank" className="imageLink" title="https://www.accointing.com/">React + Next + TypeScript</a></div>
                </div>
                <div className="grid-item" data-filter="website">
                    <a className="popupimg" href="./assets/images/portfolio/bluejestic.png" target="_blank">
                        <img className="lazy" data-src="./assets/images/portfolio/bluejestic.png" />
                    </a>
                    <div className="overlay"><a href="https://bluejestic.com/" target="_blank" className="imageLink" title="https://bluejestic.com/">Next + TypeScript + TailwindCSS</a></div>
                </div>
                <div className="grid-item" data-filter="blockchain">
                    <a className="popupimg" href="./assets/images/portfolio/colexion.png" target="_blank">
                        <img className="lazy" data-src="./assets/images/portfolio/colexion.png" />
                    </a>
                    <div className="overlay"><a href="https://colexion.io/" target="_blank" className="imageLink" title="https://colexion.io/">React + NodeJS + Web3</a></div>
                </div>
                <div className="grid-item" data-filter="blockchain">
                    <a className="popupimg" href="./assets/images/portfolio/everburn.png" target="_blank">
                        <img className="lazy" data-src="./assets/images/portfolio/everburn.png" />
                    </a>
                    <div className="overlay"><a href="https://everburn.io/" target="_blank" className="imageLink" title="https://everburn.io/">React + Web3 + Solidity</a></div>
                </div>
                <div className="grid-item" data-filter="website">
                    <a className="popupimg" href="./assets/images/portfolio/graphicrhino.png" target="_blank">
                        <img className="lazy" data-src="./assets/images/portfolio/graphicrhino.png" />
                    </a>
                    <div className="overlay"><a href="https://graphicrhino.be" target="_blank" className="imageLink" title="https://graphicrhino.be">React Hooks + SCSS</a></div>
                </div>
                <div className="grid-item" data-filter="website">
                    <a className="popupimg" href="./assets/images/portfolio/hugeinc.png" target="_blank">
                        <img className="lazy" data-src="./assets/images/portfolio/hugeinc.png" />
                    </a>
                    <div className="overlay"><a href="https://www.hugeinc.com/" target="_blank" className="imageLink" title="https://www.hugeinc.com/">MERN stack</a></div>
                </div>
                <div className="grid-item" data-filter="website">
                    <a className="popupimg" href="./assets/images/portfolio/mazda.png" target="_blank">
                        <img className="lazy" data-src="./assets/images/portfolio/mazda.png" />
                    </a>
                    <div className="overlay"><a href="https://www.mazda.com.au/" target="_blank" className="imageLink" title="https://www.mazda.com.au/">React + Redux + SCSS</a></div>
                </div>
                <div className="grid-item" data-filter="blockchain">
                    <a className="popupimg" href="./assets/images/portfolio/mercafantasy.png" target="_blank">
                        <img className="lazy" data-src="./assets/images/portfolio/mercafantasy.png" />
                    </a>
                    <div className="overlay"><a href="https://mercafantasy.com/" target="_blank" className="imageLink" title="https://mercafantasy.com/"> ParticleJS + Web3</a></div>
                </div>
                <div className="grid-item" data-filter="website">
                    <a className="popupimg" href="./assets/images/portfolio/momnpop.png" target="_blank">
                        <img className="lazy" data-src="./assets/images/portfolio/momnpop.png" />
                    </a>
                    <div className="overlay"><a href="https://test.momnpophub.com/" target="_blank" className="imageLink" title="https://test.momnpophub.com/">MERN stack</a></div>
                </div>
                <div className="grid-item" data-filter="animation">
                    <a className="popupimg" href="./assets/images/portfolio/motelycrowd.png" target="_blank">
                        <img className="lazy" data-src="./assets/images/portfolio/motelycrowd.png" />
                    </a>
                    <div className="overlay"><a href="https://www.motleycrowd.live/" target="_blank" className="imageLink" title="https://www.motleycrowd.live/">React + Next + ThreeJS</a></div>
                </div>
                <div className="grid-item" data-filter="website">
                    <a className="popupimg" href="./assets/images/portfolio/patternbrands.png" target="_blank">
                        <img className="lazy" data-src="./assets/images/portfolio/patternbrands.png" />
                    </a>
                    <div className="overlay"><a href="https://www.patternbrands.com/" target="_blank" className="imageLink" title="https://www.patternbrands.com/">React + Styled Component</a></div>
                </div>
                <div className="grid-item" data-filter="animation">
                    <a className="popupimg" href="./assets/images/portfolio/shop_qcterme.png" target="_blank">
                        <img className="lazy" data-src="./assets/images/portfolio/shop_qcterme.png" />
                    </a>
                    <div className="overlay"><a href="https://shop.qcterme.com/" target="_blank" className="imageLink" title="https://shop.qcterme.com/">React + GSAP</a></div>
                </div>
                <div className="grid-item" data-filter="blockchain">
                    <a className="popupimg" href="./assets/images/portfolio/solsnatcher.png" target="_blank">
                        <img className="lazy" data-src="./assets/images/portfolio/solsnatcher.png" />
                    </a>
                    <div className="overlay"><a href="https://solsnatchers.com/" target="_blank" className="imageLink" title="https://solsnatchers.com/">HTML + Bootstrap + JQuery</a></div>
                </div>
                <div className="grid-item" data-filter="website">
                    <a className="popupimg" href="./assets/images/portfolio/strv.png" target="_blank">
                        <img className="lazy" data-src="./assets/images/portfolio/strv.png"/>
                    </a>
                    <div className="overlay"><a href="https://www.strv.com/" target="_blank" className="imageLink" title="https://www.strv.com/">React + Next + Express</a></div>
                </div>
                <div className="grid-item" data-filter="animation">
                    <a className="popupimg" href="./assets/images/portfolio/ueno.png" target="_blank">
                        <img className="lazy" data-src="./assets/images/portfolio/ueno.png"/>
                    </a>
                    <div className="overlay"><a href="https://interview.ueno.co/" target="_blank" className="imageLink" title="https://interview.ueno.co/">React + ThreeJS</a></div>
                </div>

            </div>
            
            <div className="isotope-pager" style={{paddingTop: 15, textAlign:'center'}}></div>
 
        </React.Fragment>
    );
}

export default Portfolio;