import React from 'react';
import preloader from "../../../assets/images/preloader.svg";

export function Preloader() {
    return (
        <div>
            <img src={preloader} alt={preloader}/>
        </div>
    );
}
