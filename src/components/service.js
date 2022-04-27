import React from 'react';

const Service = () => {

    const showWork = (type) => {        
        window.$('#' + type).click();
        window.$('html, body').animate({
            scrollTop: window.$('#myworks').offset().top
        }, 500);
    }
    
    return (
        <React.Fragment>
            <div className="portfolio-container">
                <div id="services" style={{marginTop: -100, height: 100}}></div>
                <h2 className="services" data-text="SERVICES">SERVICES</h2>
                <div className="portfolio">    
                    <div className="portfolio-item">    
                        <div className="item-desc"> 
                        <h2 className="animate one">
                            <span>W</span><span>e</span><span>b</span><span>&nbsp;</span><span>D</span><span>e</span><span>v</span><span>e</span><span>l</span><span>o</span><span>p</span><span>m</span><span>e</span><span>n</span><span>t</span>
                        </h2>
                        <p>
                            9 years of experience in Web development. <br/>
                            - Strong HTML + CSS, SCSS, Tailwind CSS, TypeScript<br/>
                            - Node.js, express, hapi, Nest<br/>
                            - React, Redux, React Hooks, Next, React Native<br/>
                            - Apollo, GraphQL, Firebase<br/>
                            - MongoDB, mongoose, postgreSQL, MySQL<br/>
                            - codeigniter, Laravel<br/>
                            - Responsive Web design<br/>
                            - Chrome extension, bot development with NodeJS and Python<br/>
                            - Restful, API integration, headless<br/>
                            - Socket programming, socket.io, websocket<br/>
                            - AWS services, Git, Bitbucket<br/>
                            - Jira, Agile                
                        </p>
                        <a onClick={() => showWork('website')} title="Website Development">View Work</a>
                
                        </div>
                
                        <div className="item-card">
                
                        <div>
                            <picture>
                            <img className="lazy" data-src="./assets/images/coding.png" alt="mushroom" style={{maxWidth: 400, maxHeight: 200, width: '80vw', height: '40vw'}}/>
                            </picture>
                            <div></div>
                            <div></div>
                        </div>
                
                        </div>
                
                    </div>        
                    <div className="portfolio-item">
                
                        <div className="item-desc">        
                            <h2 className="animate two">
                                <span>W</span><span>e</span><span>b</span><span>&nbsp;</span><span>A</span><span>n</span><span>i</span><span>m</span><span>a</span><span>t</span><span>i</span><span>o</span><span>n</span><span>s</span>
                            </h2>
                            <p>
                                I'm very proficient in Web Animation development as I have got an artistic eye for design.<br/>
                                - Pure CSS animation<br/>
                                - 3D Animation with Three.js and WebGL<br/>
                                - Graphic animation with Canvas<br/>
                                - SVG graphic animation design<br/>
                                - parallx scroll animation<br/>
                                - ParticlesJS, GreenSockJS and so on.
                            </p>
                            <a onClick={() => showWork('animation')} title="Web Animations">View Work</a>
                
                        </div>
                
                        <div className="item-card">
                
                        <div>
                            <picture>
                            <img className="lazy" data-src="./assets/images/video.png" alt="mushroom" style={{maxWidth: 400, maxHeight: 200, width: '80vw', height: '40vw'}}/>
                            </picture>
                            <div></div>
                            <div></div>
                        </div>
                
                        </div>
                
                    </div>        
                    <div className="portfolio-item">
                
                        <div className="item-desc">      
                            <h2 className="animate three">
                                <span>B</span><span>l</span><span>o</span><span>c</span><span>k</span><span>c</span><span>h</span><span>a</span><span>i</span><span>n</span><span>&nbsp;</span>
                                <span>D</span><span>e</span><span>v</span><span>e</span><span>l</span><span>o</span><span>p</span><span>m</span><span>e</span><span>n</span><span>t</span>
                            </h2>
                            <p>
                                I have been working as a Blockchain developer for 4 years.<br/>
                                Mostly work as a Blockchain Fronend Developer.<br/>
                                - React + Web3JS, React + EthersJS<br/>
                                - Smart Contract, Solidity, Rust<br/>
                                - Ethereum, Solana<br/>
                                - NFT mint, NFT marketplace<br/>
                                - Binance, Cryptocurrency<br/>
                            </p>
                            <a onClick={() => showWork('blockchain')} title="Blockchain Development">View Work</a>
                
                        </div>
                
                        <div className="item-card">
                
                        <div>
                            <picture>
                            <img className="lazy" data-src="./assets/images/webdesign.png" alt="mushroom" style={{maxWidth: 400, maxHeight: 200, width: '80vw', height: '40vw'}}/>
                            </picture>
                            <div></div>
                            <div></div>
                        </div>
                
                        </div>
                
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Service;