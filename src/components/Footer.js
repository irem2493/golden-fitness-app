import React, { Fragment } from 'react';
import './footer.css';

function Footer(){
    return (
        <Fragment>
            <footer>
                <div className="wrap ">
                    <h5>
                        <span style={{color: 'rgb(165,137,88)', fontSize:'26px', margin: '20px'}}>
                            <strong>Golden Health</strong>
                        </span>
                    </h5>
                    <p style={{fontSize: '14px', margin: '20px'}}>
                        대표자 : 이정민<br></br>
                        상담전화: 055-326-9682<br></br>
                        주소: 김해 진영 진산대로 65, 3층<br></br>
                    </p>
                    
                </div>
            </footer>
            <div className="clear"></div>
        </Fragment>
    );
}

export default Footer;