import React from 'react'

class ImageList extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <div onClick={() => this.props.select(this.props.itemId)} className="list-item">{this.props.name}</div>
            </div>
        )
    }
}


export default ImageList