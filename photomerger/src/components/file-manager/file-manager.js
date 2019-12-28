import React from 'react';

import Images from '../../data-models/images'
import ImageList from '../image-list/image-list'



class FileManager extends React.Component {
    constructor() {
        super()
        this.state = {
            showList: false,
            imgs: Images
        }
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
        for (i=0; i<this.state.imgs.length; i++) {
            if(this.state.imgs[i].id === imgId) {
                
                var newImage = document.createElement('img')
                newImage.classList.add('new-selected-img')
                document.getElementById("file-manager").appendChild(newImage)
                var x = "photoSample2"
                const photoCollection = require.context('../../assets/', true)
                const photo = photoCollection(`./${this.state.imgs[i].src}`)
                console.log(photoCollection)
                newImage.src = photo
                this.imageList()
            break
            }
        }

    }

    render() {
        const ImageListItems = this.state.imgs.map(item => <ImageList
            key={item.id}
            name={item.name}
            select={this.selectImg}
            itemId={item.id}
        ></ImageList>)

        return (
            <div className="col-4 file-manager" id="file-manager">
                <div>
                    <button onClick={this.imageList} className="btn add-btn">+</button>
                    <div>{this.state.showList ?
                        <div id="img-list-popup" className="img-list-popup">
                            {ImageListItems}
                        </div> :
                        <div></div>}
                    </div>
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


//componentholder sends w/h and src for layers with active true
//and on top and makes all other actives false > ...