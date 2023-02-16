import React, { useState } from "react";
import Popup from './Popup';

export default function FullPageLanding() {
	const [ popup, setPopup ] = useState(true); 
    
    return (
    	<>
        	{popup ? <Popup onClose={setPopup} /> : null}
        </>
    )
}