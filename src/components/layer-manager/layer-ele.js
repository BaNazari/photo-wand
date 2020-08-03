import React from 'react'

const LayerEle = function (props) {
    return (
        <div>
            <img  className="layer-image" src={props.src}></img>
        </div>
    )
}

//Add onclick, so each clicked iamge will trun active.
export default LayerEle