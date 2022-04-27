import React from 'react';

const Skills = () => {
    
    return (
        <React.Fragment>
            <section className="skills" style={{paddingTop: 0, position: 'relative', zIndex: 2}}>
                <div id="skills" style={{marginTop: -100, height: 100}}></div>
                <section className="skills-bounce">
                    <div className="content">
                        <h2>skills</h2>
                        <h2>skills</h2>
                    </div>
                </section>
                <div className="content pre-loader">
                    <div className="boxes shape">
                        <div className="box circle">
                            <div className="topic">Front-End</div>
                            <div className="green">
                                <div className="progress">
                                <div className="inner">
                                    <div className="percent"><span>&nbsp;&nbsp;95</span>%</div>
                                    <div className="water"></div>
                                    <div className="glare"></div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="box circle">
                            <div className="topic">Animation</div>
                            <div className="green">
                                <div className="progress">
                                    <div className="inner">
                                        <div className="percent"><span>&nbsp;&nbsp;95</span>%</div>
                                        <div className="water"></div>
                                        <div className="glare"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box circle">
                            <div className="topic">MobileApp</div>
                            <div className="red">
                                <div className="progress">
                                    <div className="inner">
                                        <div className="percent"><span>&nbsp;&nbsp;50</span>%</div>
                                        <div className="water"></div>
                                        <div className="glare"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="boxes shape second">
                        <div className="box circle">
                            <div className="topic">Database</div>
                            <div className="orange">
                                <div className="progress">
                                <div className="inner">
                                    <div className="percent"><span>&nbsp;&nbsp;70</span>%</div>
                                    <div className="water"></div>
                                    <div className="glare"></div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="box circle">
                            <div className="topic">Back-end</div>
                            <div className="green">
                                <div className="progress">
                                    <div className="inner">
                                        <div className="percent"><span>&nbsp;&nbsp;85</span>%</div>
                                        <div className="water"></div>
                                        <div className="glare"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box circle">
                            <div className="topic">Blockchain</div>
                            <div className="orange">
                                <div className="progress">
                                    <div className="inner">
                                        <div className="percent"><span>&nbsp;&nbsp;70</span>%</div>
                                        <div className="water"></div>
                                        <div className="glare"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Skills;