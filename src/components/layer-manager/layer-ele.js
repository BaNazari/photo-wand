import React from 'react'

const LayerEle = function (props) {


    return (
        <div>
            <div  className="remover-button" onClick={() => {props.remove(props.id)}}>-</div>
            <img className="layer-image" src={props.src}></img>
        </div>
    )
}

//Add onclick, so each clicked iamge will trun active.


//Onclick: The clicked one > active

export default LayerEle