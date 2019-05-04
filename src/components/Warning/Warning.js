import React, {useState, useEffect} from 'react';
import "./Warning.css";

const Warning = ({message, visible})=> {
    const [closing, setClosing] = useState(false);

    useEffect(() => {
        setClosing(true);
        setTimeout(() => {
            setClosing(false);
        }, 1000);
    }, [visible]);

    if(!visible && !closing) return null;
    return (
        <div className="Warning-wrapper">
            <div className={`Warning ${closing?'bounceOut':'bounceIn'} animated`}>
                {message}
            </div>
        </div>
    );
}

export default Warning;