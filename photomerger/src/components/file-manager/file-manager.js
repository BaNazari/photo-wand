import React from 'react';

import Images from '../../data-models/images'
import ImageList from '../image-list/image-list'



class FileManager extends React.Component {
    constructor() {
        super()
        this.state = {
            showList: false,
            current: null
        }
        this.imgs = Images

        this.imageList = this.imageList.bind(this)
        this.selectImg = this.selectImg.bind(this)
    }

    imageList() {
        this.setState(prevSt => {
            return {
                showList: !prevSt.showList
            }
        })
    }

    selectImg(imgId) {
        let i;
        for (i=0; i<this.imgs.length; i++) {
            if(this.imgs[i].id === imgId) {
                var imgHolder = document.getElementById("img-holder")
                imgHolder.removeChild(imgHolder.firstChild)
                var newImage = document.createElement('img')
                newImage.classList.add('new-selected-img')
                newImage.id = this.imgs[i].id
                imgHolder.appendChild(newImage)
                
                //Context: According to Webpack, a context is created if your require() contains an expression rather 
                //than a string literal, so the exact module is not known on compile time.
                //https://webpack.js.org/guides/dependency-management/
                const photoCollection = require.context('../../assets/', true)
                console.log("cont: "+photoCollection)
                const photo = photoCollection(`./${this.imgs[i].src}`)
                newImage.src = photo
                this.imageList()
                this.setState({
                    current: { id: this.imgs[i].id, name: this.imgs[i].name, src: this.imgs[i].src }
                })
                
            //break the loop after img found
            }
        }

    }


    componentDidUpdate() {
        console.log(this.state)

    }

    render() {
        const ImageListItems = this.imgs.map(item => <ImageList
            key={item.id}
            name={item.name}
            select={this.selectImg}
            itemId={item.id}
        ></ImageList>)
            //I put a text or an emplt div inside img-holder, otherwise I ll face an error for first execution of imgHolder.removeChild(imgHolder.firstChild).
        return (
            <div className="col-4 file-manager" id="file-manager">
                <div>
                    <button onClick={this.imageList} className="btn browse-btn">Browse</button>
                    <div>{this.state.showList ?
                        <div id="img-list-popup" className="img-list-popup">
                            {ImageListItems}
                        </div> :
                        <div></div>}
                    </div>
                    <div id="img-holder" className="img-holder">Watch here!</div>
                    <button className="btn add-btn" onClick={() => this.props.imageAdder(this.state.current)}>+</button>
                </div>
            </div>
        )
    }

}

export default FileManager

//you click + here > see image name list > choose image >
//the image loads in file manager imagebox > you admit  >
//image src and width/height will be sent for component
//holder by props > file manager gets clean like first
//step > sends w/h and src down to eventmanager > event
//manager makes the resizer > event manager sends the 
//w/h and src down to phototool > canvas draws the image
//with every change for the resizer eventmanager sends the
//new state down to phototool as props > phototool redraws 
//the img with new size

//modify styles > add sass > go BEM

//add tests

//add real image uploader


//componentholder sends w/h and src for layers with active true
//and on top and makes all other actives false > ...