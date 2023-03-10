import React, { Fragment, useEffect } from 'react';
import './banner.css';
import './center.css';
import './come.css';
const {kakao} = window;

function Come(){
    
   useEffect(()=>{
        var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        
        var option={//지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(35.31201281382129, 128.7265452598162), //지도의 중심좌표.
            level: 3 //지도의 레벨(확대, 축소 정도)
        };
        var map = new kakao.maps.Map(container, option); //지도 생성 및 객체 리턴

        // 마커가 표시될 위치입니다 
        var markerPosition  = new kakao.maps.LatLng(35.312055971047954, 128.7265452598162); 
        
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        var iwContent = '<div style="width: 100%; padding:5px;">&nbsp;&nbsp;&nbsp;골든헬스(3층)</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        iwPosition = new kakao.maps.LatLng(35.312055971047954, 128.7265452598162); //인포윈도우 표시 위치입니다

        // 인포윈도우를 생성합니다
        var infowindow = new kakao.maps.InfoWindow({
            position : iwPosition, 
            content : iwContent 
        });
  
        // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
        infowindow.open(map, marker); 

        // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
        var mapTypeControl = new kakao.maps.MapTypeControl();

        // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
        // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

        // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
        var zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

        var container2 = document.getElementById('map2'); 
	var option={
			center: new kakao.maps.LatLng(35.31201281382129, 128.7265452598162),
			level: 3 
		};
	var map2 = new kakao.maps.Map(container2, option);
	// 마커 표시 위치 
	var markerPosition  = new kakao.maps.LatLng(35.312055971047954, 128.7265452598162); 
	
	var marker = new kakao.maps.Marker({
	    position: markerPosition
	});

	marker.setMap(map2);
	
	var iwContent = '<div style="width: 100%; padding:5px; ">&nbsp;&nbsp;&nbsp;골든헬스(3층)</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(35.312055971047954, 128.7265452598162); //인포윈도우 표시 위치입니다

	// 인포윈도우를 생성합니다
	var infowindow = new kakao.maps.InfoWindow({
	    position : iwPosition, 
	    content : iwContent 
	});
  
	// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
	infowindow.open(map2, marker); 
	
	// 일반 지도 스카이뷰
	var mapTypeControl = new kakao.maps.MapTypeControl();
	map2.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
	

	// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
	var zoomControl = new kakao.maps.ZoomControl();
	map2.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
	
	
	function setCenter() {            
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.312055971047954, 128.7265452598162);
	    
	    // 지도 중심을 이동 시킵니다
	    map.setCenter(moveLatLon);
	    map2.setCenter(moveLatLon);
	}

	function panTo() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.312055971047954, 128.72679062047834);
	    
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	    map.panTo(moveLatLon);    
	    map2.panTo(moveLatLon);     
	} 

    },[]);
    


    return(
        <Fragment>
            <div className="banner">
                <img src={require('../img/way_to_come.jpg')} />
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
                            골든헬스<br></br>찾아오시는 길
                        </span>
                    </h5>
                    <p><br></br></p>
                    
                    <p>주소 : 김해시 진영 진산대로 65, 3층</p>
                    <p>Tel. 055-326-9682</p>
                    <p><br></br></p>
                    
                    <p>
                        <span style={{color:'rgb(106,108,108)'}}>
                            [운영 시간]<br></br>
                            24시간 (24 hours)<br></br>
                            연중무휴 (all year round)
                        </span>
                    </p>
                    <p><br></br></p>
                </div>
                <div id="content_img" className="wrap">
                    <div id="imgs">
                        <img src={require('../img/center_outside(2).jpg')} alt="센터외부2" />
                        
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
                        <img src={require('../img/center_outside(2).jpg')} alt="센터외부2" />
                    </div>
                </div>
                <div className="item1_mobile"></div>
                <div className="content_area">
                    <h5 style={{textAlign: 'center'}}>
                        <span style={{letterSpacing: '2px', color:'rgb(124,124,124)', fontSize: '24px'}}>
                            골든헬스<br></br>찾아오시는 길
                        </span>
                    </h5>
                    <p><br></br></p>
                    
                    <p>주소 : 김해시 진영 진산대로 65, 3층</p>
                    <p>Tel. 055-326-9682</p>
                    <p><br></br></p>
                    
                    <p>
                        <span style={{color:'rgb(106,108,108)'}}>
                            [운영 시간]<br></br>
                            24시간 (24 hours)<br></br>
                            연중무휴 (all year round)
                        </span>
                    </p>
                    <p><br></br></p>
                </div>
                <div className="item3_mobile"></div>
                <div className="item1_mobile"></div>
            </div>
            <div className="clear"></div>

            <div id="way_to_come">
                <div>
                    <h4 style={{textAlign: 'center', padding: '10px'}}>
                        <span style={{letterSpacing: '5px', fontSize: '26px'}}>
                        LOCATION
                        </span>
                    </h4>
                </div>
                <div className="come_grid">
                    <div id="map" className="come_item" style={{width:'500px',height:'300px'}}></div>
                    <div className="come_item2">
                        <p><strong>찾아오시는 길</strong></p>
                        <p>버스 |
                            <span style={{backgroundColor: 'rgb(39,195,0)', color: 'rgb(255,255,255)'}}>지선</span>
                            3091, 3090, 3388, 3389, 3234, 3235, 2732, 3231
                        </p>
                        <p>자가용 | 지하1층 주자창 이용 가능</p>
                    </div>
                </div>

                {/* mobile -*/}
                <div className="come_mobile" >
                    <div id="map2" className="come_div" style={{height: '300px'}}></div>
                    <div className="come_div" style={{textAlign:'center', paddingBottom: '10px'}}>
                        <p><strong>찾아오시는 길</strong></p>
                        <p>버스 |
                            <span style={{backgroundColor: 'rgb(39,195,0)', color: 'rgb(255,255,255)'}}>지선</span>
                            3091, 3090, 3388, 3389, 3234, 3235, 2732, 3231
                        </p>
                        <p>자가용 | 지하1층 주자창 이용 가능</p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Come;