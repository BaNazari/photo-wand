import React from 'react'

const LayerEle = function (props) {


    return (
        <div>
            <button  onClick={() => {props.remove(props.id)}}>-</button>
            <img className="layer-image" src={props.src}></img>
        </div>
    )
}

//Add onclick, so each clicked iamge will trun active.
//Add remove

//Onclick: The clicked one > active

export default LayerEle