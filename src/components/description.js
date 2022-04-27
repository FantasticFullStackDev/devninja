import React from 'react';

const Description = () => {
    
    return (
        <React.Fragment>
            <hr style={{position: 'relative', zIndex: 2}}/>
            <br/>
            <div className="w3-container w3-padding-large"  style={{position: 'relative', zIndex: 2}}>
                <div id="about" style={{marginTop: -100, height: 170}}></div>
                <div className="w3-col l5" style={{display: 'flex', justifyContent: 'center'}}>
                    <img data-src="./assets/images/me.png" className="avatar lazy" style={{minHeight: 300, minWidth: 300, margin: 10}}/>
                </div>
                <div className="w3-col l7 description">
                <h3>A full stack web developer who has got deep experience of web design and development with Node.js.
                    Ready to take any kind of challenges in any situation.
                    Always make sure of the quick turnaround of my job as I never disappoint any of my clients.
                    Expert enough to manage any kind of job environment by coming up with my multitasking expertise.
                    Always try to learn new things and update the previous knowledge. 
                    Confident to carry the tasks efficiently and accurately.
                    Committed to the clients and always focus on their respectable needs.
                    Work with 100% client's satisfaction.</h3>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Description;