import React, { Fragment } from 'react';
import './banner.css';
import './center.css';

function Pt(){
    return(
        <Fragment>
            <div className="banner">
                <img src={require('../img/personal_training_img.jpg')} />
                <div className="img_text">
                    <h4 style={{textAlign: 'center'}}>
                        <span style={{letterSpacing: '5px'}}>
                            <strong>
                            <span style={{color: 'rgb(255,255,255)', fontSize: '2em'}}>Personal Training</span>
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
                            PT 소개
                        </span>
                    </h5>
                    <p><br></br></p>
                    
                    <p>현재의 체형과 몸 상태에 만족하지 못하는 분들을 위해</p>
                    <p>효과적인 운동 방법과 노하우를 지도합니다.</p>
                    <p><br></br></p>
                    
                    <p>일정 시간 내에 원하는 목표를 달성하기 원하시는 분,</p>
                    <p>개인화된 운동 코칭을 필요로 하시는 분들께 적합합니다.</p>
                    <p><br></br></p>
                    
                    <p>운동목적 및 건강상태/운동경험 유무에 관한 상담,</p>
                    <p>인바디로 체성분 검사, 체력테스트를 통해</p>
                    <p>개인 맞춤형 훈련 프로그램을 설계합니다.</p>
                    <p><br></br></p>
                    
                    <p>다이어트, 체력향상, 바디프로필 촬영, 대회 준비</p>
                    <p>원하시는 목표를 골든핼스 트레이너와 함께 도전하세요!</p>
                    <p><br></br></p>
                    
                    <p style={{textAlign: 'center'}}>※ 문의전화 : 055-326-9682 ※</p>
                    <p><br></br></p>
                </div>
                <div className="wrap">
                    
                        <img src={require('../img/inbody.jpg')}  height="500px"/>
                    
                </div>
                <div className="item2"></div>
                <div className="item1"></div>
            </div>
            <div className="clear"></div>

             {/* mobile -*/}
             <div className="grid_container_mobile">
                <div className="item1_mobile"></div>
                <div className="item2_mobile"></div>
                <div className="wrap" style={{textAlign: 'center'}}>
                    <img src={require('../img/inbody.jpg')} alt="인바디" height="400px"/>
                </div>
                <div className="content_area">
                    <h5 style={{textAlign: 'center'}}>
                        <span style={{letterSpacing: '2px', color:'rgb(124,124,124)', fontSize: '24px'}}>
                            PT 소개
                        </span>
                    </h5>
                    <p><br></br></p>
                    
                    <p>현재의 체형과 몸 상태에 만족하지 못하는 분들을 위해</p>
                    <p>효과적인 운동 방법과 노하우를 지도합니다.</p>
                    <p><br></br></p>
                    
                    <p>일정 시간 내에 원하는 목표를 달성하기 원하시는 분,</p>
                    <p>개인화된 운동 코칭을 필요로 하시는 분들께 적합합니다.</p>
                    <p><br></br></p>
                    
                    <p>운동목적 및 건강상태/운동경험 유무에 관한 상담,</p>
                    <p>인바디로 체성분 검사, 체력테스트를 통해</p>
                    <p>개인 맞춤형 훈련 프로그램을 설계합니다.</p>
                    <p><br></br></p>
                    
                    <p>다이어트, 체력향상, 바디프로필 촬영, 대회 준비</p>
                    <p>원하시는 목표를 골든핼스 트레이너와 함께 도전하세요!</p>
                    <p><br></br></p>
                    
                    <p style={{textAlign: 'center'}}>※ 문의전화 : 055-326-9682 ※</p>
                    <p><br></br></p>
                </div>
                
                <div className="item3_mobile"></div>
                <div className="item1_mobile"></div>
            </div>
            <div className="clear"></div>

        </Fragment>
    );
}
export default Pt;