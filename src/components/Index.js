import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Index(){
    return (
        <Fragment>
            <div id="image" className="all">
                <div className="image_img"><img src={require('../img/golden_health_main_img.jpg')}></img></div>
            </div>
            
            <div id="content1" className="wrap">
                <div id ="index_img1" className="content_div"><img src={require('../img/center_in(1).jpg')}></img></div>
                <div id ="index_img2" className="content_div" ><img src={require('../img/center_in(3).jpg')}></img></div>
                <div id ="index_img3" className="content_div" ><img src={require('../img/center_in(4).jpg')}></img></div>
                <div className="content_text">
                    <div className="introduce">센터소개</div>
                    <div className="button"><Link to="/center" className="btn">더 알아보기</Link></div>
                </div>
            </div>
            <div className="clear"></div>
            
            <div id="content2" className="wrap">
                <div id="index2_img1" className="content_div2"><img src={require('../img/center_in(5).jpg')}></img></div>
                <div id="index2_img2" className="content_div2"><img src={require('../img/weight(3).jpg')}></img></div>
                <div className="content_text">
                    <div className="introduce">PT 소개</div>
                    <div className="button"><Link to="/pt" className="btn">더 알아보기</Link></div>
                </div>
            </div>
            <div className="clear"></div>
            
            <div id="contact_etc" className="wrap">
                <div>
                    <h4 style={{textAlign: 'center', padding: '10px'}}>
                        <span style={{letterSpacing: '5px', fontSize: '26px'}}>
                        CONTACT US
                        </span>
                    </h4>
                    <p style={{textAlign: 'center'}}></p>
                    <p style={{textAlign: 'center'}}>골든헬스의 소식들을 실시간으로 만나보세요</p>
                </div>
                
                <div id="desktop_contact">
                    <div className="contact">
                        <div className="contact_grid">
                            <div style={{padding:'10px'}}>
                                <div className="circle"><i className="fa-brands fa-instagram"></i></div>
                            </div>
                            <div className="contact_text">
                                <p style={{textAlign: 'center'}}>
                                    <span style={{textAlign: 'center'}}>공식계정을 팔로우하시고</span>
                                </p>
                                <p style={{textAlign: 'center'}}>
                                    <span style={{textAlign: 'center'}}>골든헬스의 다양한 소식들을 확인하세요!</span>
                                </p>
                            </div>
                            <div style={{fontSize: '1.286em'}}>
                                <h6 style={{textAlign: 'center'}}>
                                    <a href="https://www.instagram.com/golden1_________" rel="noopener noreferrer" target="_blank">@golden1_________</a>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="contact">
                        <div className="contact_grid">
                                <div style={{padding:'10px'}}>
                                    <div className="circle"><i className="fa-solid fa-blog"></i></div>
                                </div>
                                <div className="contact_text">
                                    <p style={{textAlign: 'center'}}>
                                    <span style={{fontSize: '14px'}}>골든헬스 이용안내 및 운동정보들은</span>
                                    </p>
                                    <p style={{textAlign: 'center'}}>
                                        <span style={{fontSize: '14px'}}>네이버 블로그에서 확인하세요!</span>
                                    </p>
                                </div>
                                <div style={{fontSize: '1.286em'}}>
                                <h6 style={{textAlign: 'center'}}>
                                    <a href="https://blog.naver.com/goldenfitness" rel="noopener noreferrer" target="_blank">@goldenfitness</a>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="contact">
                        <div className="contact_grid">
                            <div style={{padding:'10px'}}>
                                <div className="circle"><i className="fa-solid fa-phone"></i></div>
                            </div>
                            <div className="contact_text">
                                <p style={{textAlign: 'center'}}>
                                    <span style={{fontSize: '14px'}}>상담문의는 센터전화를</span>
                                </p>
                                <p style={{textAlign: 'center'}}>
                                    <span style={{fontSize: '14px'}}>이용해주세요!</span>
                                </p>
                            </div>
                            <div style={{fontSize: '1.286em'}}>
                                <h6 style={{textAlign: 'center'}}>
                                    055-326-6982
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/*mobile */} 
                <div id="mobile_contact">
                <div className="contact">
                        <div className="contact_grid">
                            <div style={{padding:'10px'}}>
                                <div className="circle"><i className="fa-brands fa-instagram"></i></div>
                            </div>
                            <div className="contact_text">
                                <p style={{textAlign: 'center'}}>
                                    <span style={{fontSize: '14px'}}>공식계정을 팔로우하시고</span>
                                </p>
                                <p style={{textAlign: 'center'}}>
                                    <span style={{fontSize: '14px'}}>골든헬스의 다양한 소식들을 확인하세요!</span>
                                </p>
                            </div>
                            <div style={{fontSize: '1.286em'}}>
                                <h6 style={{textAlign: 'center'}}>
                                    <a href="https://www.instagram.com/golden1_________" rel="noopener noreferrer" target="_blank">@golden1_________</a>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="contact">
                        <div className="contact_grid">
                                <div style={{padding:'10px'}}>
                                    <div className="circle"><i className="fa-solid fa-blog"></i></div>
                                </div>
                                <div className="contact_text">
                                    <p style={{textAlign: 'center'}}>
                                    <span style={{fontSize: '14px'}}>골든헬스 이용안내 및 운동정보들은</span>
                                    </p>
                                    <p style={{textAlign: 'center'}}>
                                        <span style={{fontSize: '14px'}}>네이버 블로그에서 확인하세요!</span>
                                    </p>
                                </div>
                                <div style={{fontSize: '1.286em'}}>
                                <h6 style={{textAlign: 'center'}}>
                                    <a href="https://blog.naver.com/goldenfitness" rel="noopener noreferrer" target="_blank">@goldenfitness</a>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="contact">
                        <div className="contact_grid">
                            <div style={{padding:'10px'}}>
                                <div className="circle"><i className="fa-solid fa-phone"></i></div>
                            </div>
                            <div className="contact_text">
                                <p style={{textAlign: 'center'}}>
                                    <span style={{fontSize: '14px'}}>상담문의는 센터전화를</span>
                                </p>
                                <p style={{textAlign: 'center'}}>
                                    <span style={{fontSize: '14px'}}>이용해세요!</span>
                                </p>
                            </div>
                            <div style={{fontSize: '1.286em'}}>
                                <h6 style={{textAlign: 'center'}}>
                                    055-326-6982
                                </h6>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
            <div className="clear"></div>
        </Fragment>
    );
}

export default Index;