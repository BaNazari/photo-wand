import React from 'react'
import LayerEle from './layer-ele'
//img children number equal to props.length

const LayerManager = function (props) {
    let layers;

    if (props.newImageSrc.length) {
        layers = props.newImageSrc.map((img) =>
            <LayerEle
                width={img.width}
                height={img.height}
                src={img.src}
                id={img.id}
                active={img.active}
                key={img.id}
            ></LayerEle>
        )
        console.log({proppy: props})

    } else {
        layers = <p>hi</p>
    }
    console.log("len: "+layers.length)
    return (
        <div className="">
            {layers}
        </div>
    )
}

export default LayerManager
