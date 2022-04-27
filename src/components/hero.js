import React, {useEffect} from 'react';

const Hero = () => { 
    
    return (
        <section className="home" id="home" style={{position: 'relative', zIndex: 2}}>
        <div className="home-content">
            <div>
                <div className="text-two">       
                    <div className="text-three">Hi, Nice to meet you</div>  <br/>
                    <h4 className="span loader">
                        <span className='m'>W</span>
                        <span className='m'>e</span>
                        <span className='m'>b</span>
                        <span className='m'>&nbsp;</span>
                        <span className='m'>{'&'}</span>
                        <span className='m'>&nbsp;</span>
                        <span className='m'>B</span>
                        <span className='m'>l</span>
                        <span className='m'>o</span>
                        <span className='m'>c</span>
                        <span className='m'>k</span>
                        <span className='m'>c</span>
                        <span className='m'>h</span>
                        <span className='m'>a</span>
                        <span className='m'>i</span>
                        <span className='m'>n</span>
                        <span className='m'>&nbsp;</span> <br className="br"/>
                        <span className='m'>D</span>
                        <span className='m'>e</span>
                        <span className='m'>v</span>
                        <span className='m'>e</span>
                        <span className='m'>l</span>
                        <span className='m'>o</span>
                        <span className='m'>p</span>
                        <span className='m'>e</span>
                        <span className='m'>r</span>
                    </h4><br/> 
                </div>
                <div className="text-four">Specialized in React | NodeJS | Web3JS</div>
            </div>
        </div>
    </section>
    );
}

export default Hero;