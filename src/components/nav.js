import React, { useEffect, useState } from 'react';

const Nav = () => {

    const [ navBarActive, setNavBarActive ] = useState('');
    const [ menuBtnOpacity, setMenuBtnOpacity ] = useState(1);
    const [ menuBtnPointerEvent, setMenuBtnPointerEvent ] = useState('auto')
    const [ sticky, setSticky ] = useState('');

    const openNavBar = () => {
        setNavBarActive("active");
        setMenuBtnOpacity(0);
        setMenuBtnPointerEvent("none");
    }

    const closeNavBar = () => {        
        setNavBarActive("");
        setMenuBtnOpacity(1);
        setMenuBtnPointerEvent("auto");
    }

    const navTo = (where) => {
        window.$('html, body').animate({
            scrollTop: window.$('#' + where).offset().top
        }, 500);
        setNavBarActive("");
        setMenuBtnOpacity(1);
        setMenuBtnPointerEvent("auto");
    }

    window.$(window).scroll(function(e){
        if(window.$(window).scrollTop() > 20){
            setSticky('sticky');
        }else{
            setSticky('');
        }
    });

    useEffect(() => {        
        if(window.$(window).scrollTop() > 20){
            setSticky('sticky');
        }else{
            setSticky('');
        }    
    }, [])
    
    return (
        <div>
            <nav className={sticky} style={{width: '100%'}}>
                <div className={'navbar ' + navBarActive}>            
                    <div className="logo"><a href="#">Portfolio</a></div>
                    <ul className="menu">
                        <li className= "li"><a onClick={() => navTo('home')}>Home</a></li>
                        <li className= "li"><a onClick={() => navTo('about')}>About</a></li>
                        <li className= "li"><a onClick={() => navTo('skills')}>Skills</a></li>
                        <li className= "li"><a onClick={() => navTo('services')}>Services</a></li>
                        <li className= "li"><a onClick={() => navTo('myworks')}>Portfolio</a></li>
                        <li className= "li"><a onClick={() => navTo('contact')}>Contact</a></li>
                        <div className="cancel-btn" onClick={closeNavBar}>
                            <i className="fa fa-times"></i>
                        </div>
                    </ul>
                </div>
                <div className="menu-btn" style={{opacity: menuBtnOpacity, pointerEvents: menuBtnPointerEvent}}>
                    <i className="fa fa-bars" style={{marginTop: 8}} onClick={openNavBar}></i>
                </div>
            </nav>
        </div>
    );
}

export default Nav;