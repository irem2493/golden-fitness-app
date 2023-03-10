import React, { Fragment } from 'react';
import './banner.css';
import './center.css';

function Convenience(){
    return(
        <Fragment>
            <div className="banner">
                <img src={require('../img/convenience_facility_img.jpg')} />
                <div className="img_text">
                    <h4 style={{textAlign: 'center'}}>
                        <span style={{letterSpacing: '5px'}}>
                            <strong>
                            <span style={{color: 'rgb(255,255,255)', fontSize: '2em'}}>편의시설</span>
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
                            골든헬스 편의시설
                        </span>
                    </h5>
                    <p><br></br></p>
                    
                    <p>24시간 이용가능한 편의시설입니다.</p>
                    <p>화장실, 탈의실, 샤워장,</p>
                    <p>개인라커, 커피머신, 휴대폰 충전기가 </p>
                    <p>갖추어져 있습니다.</p>
                    <p><br></br></p>
                    
                    <p>이용 안내 및 불편사항이 있으시면</p>
                    <p>입구에 위치한 카운터에 문의주시길 바랍니다.</p>
                    <p>문의사항을 도와드립니다.</p>
                    <p><br></br></p>
                    
                    <p>
                        <span style={{color:'rgb(106,108,108;)'}}>
                            [문의가능 가능 시간]<br></br>
                            월 ~ 금 오전 10시 ~ 오후 11시<br></br>
                            토 오전 10시 ~ 오후 6시
                        </span>
                    </p>
                    <p><br></br></p>
                </div>
                
                <div id="content_img" className="wrap">
                    <div id="imgs">
                        <img src={require('../img/machine_explanation_monitor_sizechange.jpg')} />
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
                        <img src={require('../img/machine_explanation_monitor_sizechange.jpg')} />
                    </div>
                </div>
                <div className="item1_mobile"></div>
                <div className="content_area">
                    <h5 style={{textAlign: 'center'}}>
                        <span style={{letterSpacing: '2px', color:'rgb(124,124,124)', fontSize: '24px'}}>
                            골든헬스 편의시설
                        </span>
                    </h5>
                    <p><br></br></p>
                    
                    <p>24시간 이용가능한 편의시설입니다.</p>
                    <p>화장실, 탈의실, 샤워장,</p>
                    <p>개인라커, 커피머신, 휴대폰 충전기가 </p>
                    <p>갖추어져 있습니다.</p>
                    <p><br></br></p>
                    
                    <p>이용 안내 및 불편사항이 있으시면</p>
                    <p>입구에 위치한 카운터에 문의주시길 바랍니다.</p>
                    <p>문의사항을 도와드립니다.</p>
                    <p><br></br></p>
                    
                    <p>
                        <span style={{color:'rgb(106,108,108;)'}}>
                            [문의가능 가능 시간]<br></br>
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
                        <div className="gallery"><img src={require('../img/restroom.jpg')}/></div>
                        <div className="gallery"><img src={require('../img/shower_room.jpg')} /></div>
                        <div className="gallery"><img src={require('../img/fitting_room(2).jpg')} /></div>
                        <div className="gallery"><img src={require('../img/clothes_sizechange.jpg')} /></div>
                    </div>
                    <div></div>
                    <div className="gallery_img2" style={{width:'100%'}}>
                        <div className="gallery"><img src={require('../img/bag_storage_sizechange.jpg')} /></div>
                        <div className="gallery"><img src={require('../img/locker(2).jpg')} /></div>
                        <div className="gallery"><img src={require('../img/phone_charger.jpg')} /></div>
                        <div className="gallery"><img src={require('../img/coffee_machine_sizechange.jpg')} /></div>
                    </div>
                    <div></div>
                    
                    <div className="gallery_item1"></div>
                </div>

                 {/* mobile -*/}
                 <div className="gallery_grid_mobile">
                    <div className="gallery_item1"></div>
                    <div></div>
                    <div className="gallery_img" style={{width:'100%'}}>
                        <div className="gallery"><img src={require('../img/restroom.jpg')}/></div>
                        <div className="gallery"><img src={require('../img/shower_room.jpg')} /></div>
                    </div>
                    <div className="gallery_img2" style={{width:'100%'}}>
                        <div className="gallery"><img src={require('../img/fitting_room(2).jpg')} /></div>
                        <div className="gallery"><img src={require('../img/clothes_sizechange.jpg')} /></div>
                    </div>
                    <div></div>
                    <div className="gallery_img3" style={{width:'100%'}}>
                        <div className="gallery"><img src={require('../img/bag_storage_sizechange.jpg')} /></div>
                        <div className="gallery"><img src={require('../img/locker(2).jpg')} /></div>
                    </div>
                    <div></div>
                    <div className="gallery_img4" style={{width:'100%'}}>
                        <div className="gallery"><img src={require('../img/phone_charger.jpg')} /></div>
                        <div className="gallery"><img src={require('../img/coffee_machine_sizechange.jpg')} /></div>
                    </div>
                    <div></div>
                    
                    <div className="gallery_item1"></div>
                </div>
            </div>
        </Fragment>
    );
}

export default Convenience;