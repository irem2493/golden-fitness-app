import React, { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';

import './header.css';
import { Card, CardBody, UncontrolledCollapse } from 'reactstrap';


function Header(){
    return(
        <Fragment>
            <header className="all_header">
                <div className="header_item1"></div>
                <div id="header_logo" >
                    <div className="logo" >
                    <Link to="/"><img src={require('../img/health_logo.png')}></img></Link>
                    </div>
                </div>
                    <nav>
                        <ul className="nav">
                            <li><Link to="/center">센터소개</Link>
                                <ul className="submenu">
                                        <li><Link to="/center">센터내부 소개</Link></li>
                                        <li><Link to="/convenience">편의시설</Link></li>
                                        <li><Link to="/come">찾아오시는 길</Link></li>
                                    
                                </ul>
                            </li>
                            <li><Link to="/pt">PT</Link></li>
                        
                            <li className="clear"></li>
                        </ul>
                    </nav>
                <div className="header_item1"></div>
                
                <div className="clear"></div>
             
            </header>
            <Outlet/>
            {/* mobile */}
            <header className="all_header2">
                <div className="header">
                    <div className="menu_btn">
                        <a href="#">
                            <span className="burgur" id="burgur">
                                <span className="top-line"></span>
                                <span className="bot-line"></span>
                            </span>
                        </a>
                    </div>
                </div>
                <div id="header_logo" >
                    <div className="logo" >
                    <Link to="/"><img src={require('../img/health_logo.png')}></img></Link>
                    </div>
                </div>
               
                <div className="clear"></div>
                
            </header>
         
            <div className='mobile_menu'>  
                <div className="menu_bg" id="scroll_menu"></div>
                <div className="sidebar_menu" id="sidebar_menu">
                    <div className="close_btn">
                        <Link to="#"><i className="fa-solid fa-xmark"></i></Link>
                    </div>
                    <div className="slide-title">골든헬스</div>
                    <nav className='navbar-collapse'> 
                        <ul >
                            <li><Link to="/" >홈으로</Link></li>
                            <li ><Link to="#collapse" data-bs-toggle='collapse' role='button' aria-expanded='false'>센터소개&nbsp;<i className="fa-solid fa-caret-down"></i></Link>
                                <ul className='collapse' id='collapse'>
                                    <li className='collapse-item'><Link to="/center" >센터내부 소개</Link></li>
                                    <li className='collapse-item'><Link to="/convenience" >편의시설</Link></li>
                                    <li className='collapse-item'><Link to="/come" >찾아오시는 길</Link></li>    
                                </ul>
                            </li>
                            <li className='nav-item'><Link to="/pt" >PT</Link></li>
                        </ul> 
                    </nav>
                </div>
            </div>
        </Fragment>
    );
}
export default Header;