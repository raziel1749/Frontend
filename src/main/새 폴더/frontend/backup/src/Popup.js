import React, { useState } from 'react';


const Popup = (props) => {
    const { onClose } = props;
    return (
        <div className="popWrap">
            <div className="popBox">
                <div>
                	팝업 컨텐츠는 여기에
                </div>
                <div className="btnWrap">
                    <div className="btn" onClick={() => { onClose(false) }}>
                        닫기
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup