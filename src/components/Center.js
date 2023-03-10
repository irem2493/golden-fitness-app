import React, { Fragment } from 'react';
import './banner.css';
import './center.css';

function Center(){
    return(
        <Fragment>
            <div className="banner">
                <img src={require('../img/introduce_center_img.jpg')} />
                <div className="img_text">
                    <h4 style={{textAlign: 'center'}}>
                        <span style={{letterSpacing: '5px'}}>
                            <strong>
                            <span style={{color: 'rgb(255,255,255)', fontSize: '2em'}}>센터소개</span>
                            </strong>
                        </span>
                    </h4>
                </div>
            </div>
            <div className="clear"></div>

            <div className="grid_container">
		
                <div className="item1"></div>
                <div className="item2"></div>
                <div className="content_area">
                    <h5 style={{textAlign: 'center'}}>
                        <span style={{letterSpacing: '2px', color:'rgb(124,124,124)', fontSize: '24px'}}>
                            골든헬스 센터소개
                        </span>
                    </h5>
                    <p><br></br></p>
                    
                    <p>다이소 김해 진영 본점 건물 3층</p>
                    <p>300평의 넓은 공간을 갖추고 있습니다.</p>
                    <p><br></br></p>
                    
                    <p>24시간, 연중무휴로 운영되고 있으며</p>
                    <p>입구에 위치한 카운터에 문의주시면</p>
                    <p>상당 및 문의사항을 도와드립니다.</p>
                    <p><br></br></p>
                    
                    <p>
                        <span style={{color:'rgb(106,108,108;)'}}>
                            [상담 가능 시간]<br></br>
                            월 ~ 금 오전 10시 ~ 오후 11시<br></br>
                            토 오전 10시 ~ 오후 6시
                        </span>
                    </p>
                    <p><br></br></p>
                </div>
                <div id="content_img" className="wrap">
                    <div id="imgs">
                        <img src={require('../img/center_outside.jpg')} />
                        
                    </div>
                </div>
                <div className="item2"></div>
                <div className="item1"></div>
            </div>
            <div className="clear"></div>

            {/* mobile -*/}
            <div className="grid_container_mobile">
                <div className="item1_mobile"></div>
                <div className="item2_mobile"></div>
                <div id="content_img" className="wrap">
                    <div id="imgs">
                        <img src={require('../img/center_outside.jpg')} />
                    </div>
                </div>
                <div className="item1_mobile"></div>
                <div className="content_area">
                    <h5 style={{textAlign: 'center'}}>
                        <span style={{letterSpacing: '2px', color:'rgb(124,124,124)', fontSize: '24px'}}>
                            골든헬스 센터소개
                        </span>
                    </h5>
                    <p><br></br></p>
                    
                    <p>다이소 김해 진영 본점 건물 3층</p>
                    <p>300평의 넓은 공간을 갖추고 있습니다.</p>
                    <p><br></br></p>
                    
                    <p>24시간, 연중무휴로 운영되고 있으며</p>
                    <p>입구에 위치한 카운터에 문의주시면</p>
                    <p>상당 및 문의사항을 도와드립니다.</p>
                    <p><br></br></p>
                    
                    <p>
                        <span style={{color:'rgb(106,108,108;)'}}>
                            [상담 가능 시간]<br></br>
                            월 ~ 금 오전 10시 ~ 오후 11시<br></br>
                            토 오전 10시 ~ 오후 6시
                        </span>
                    </p>
                    <p><br></br></p>
                </div>
                <div className="item3_mobile"></div>
                <div className="item1_mobile"></div>
            </div>
            <div className="clear"></div>

            <div id="gallery">
                <div>
                    <h4 style={{textAlign: 'center', padding: '10px'}}>
                        <span style={{letterSpacing: '5px', fontSize: '26px'}}>
                        GALLERY
                        </span>
                    </h4>
                </div>
                
                
                <div className="gallery_grid">
                    <div className="gallery_item1"></div>
                    <div></div>
                    <div className="gallery_img" style={{width:'100%'}}>
                        <div className="gallery"><img src={require('../img/center_in(1).jpg')} /></div>
                        <div className="gallery"><img src={require('../img/center_in(3).jpg')} /></div>
                        <div className="gallery"><img src={require('../img/center_in(4).jpg')}/></div>
                        <div className="gallery"><img src={require('../img/center_in(5).jpg')} /></div>
                    </div>
                    <div></div>
                    <div className="gallery_img2" style={{width:'100%'}}>
                        <div className="gallery"><img src={require('../img/cycle_sizechange.jpg')} /></div>
                        <div className="gallery"><img src={require('../img/running_machine_sizechange.jpg')} /></div>
                        <div className="gallery"><img src={require('../img/weight(1)_sizechange.jpg')} /></div>
                        <div className="gallery"><img src={require('../img/straching.jpg')} /></div>
                    </div>
                    <div></div>
                    
                    <div className="gallery_item1"></div>
                </div>


               {/* mobile*/}
               <div className="gallery_grid_mobile">
                    <div className="gallery_item1"></div>
                    <div></div>
                    <div className="gallery_img" style={{width:'100%'}}>
                        <div className="gallery"><img src={require('../img/center_in(1).jpg')} /></div>
                        <div className="gallery"><img src={require('../img/center_in(3).jpg')} /></div>
                        
                    </div>
                    <div className="gallery_img2" style={{width:'100%'}}>
                        <div className="gallery"><img src={require('../img/center_in(4).jpg')} /></div>
                        <div className="gallery"><img src={require('../img/center_in(5).jpg')} /></div>
                    </div>
                    <div></div>
                    <div className="gallery_img3" style={{width:'100%'}}>
                        <div className="gallery"><img src={require('../img/cycle_sizechange.jpg')} /></div>
                        <div className="gallery"><img src={require('../img/running_machine_sizechange.jpg')} /></div>
                    </div>
                    <div></div>
                    <div className="gallery_img4" style={{width:'100%'}}>
                        <div className="gallery"><img src={require('../img/weight(1)_sizechange.jpg')} /></div>
                        <div className="gallery"><img src={require('../img/straching.jpg')} /></div>
                    </div>
                    <div></div>
                    
                    <div className="gallery_item1"></div>
                </div>
            </div>
            <div className="clear"></div>
        </Fragment>
    );
}
export default Center;