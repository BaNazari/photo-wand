import React, { useState, useEffect } from 'react';

const FileManager = function (props) {

    const [imageInput, setimageInput] = useState({ imageSrc: ""})


    function imageImporter() {
        const fileSelect = document.getElementById("fileSelect"),
            fileElem = document.getElementById("fileElem");
        if (fileElem) {
            fileElem.click();
        }

        console.log(fileElem)
        fileElem.onchange = function () {
            if (this.files[0].size > 3145728) {
                alert("File is too big!");
                this.value = "";
            };
            //Check input file and accept only images, not any file with an image looking extension.
            showThumbnail(fileElem.files[0])


        };


    }
//Is using data uri performant?

    function showThumbnail(imageObj) {

        let thumbnail = document.createElement("img")
        thumbnail.setAttribute("id", "new-selected-img")
        thumbnail.classList.add('new-selected-img')

        thumbnail.file = imageObj
        let holder = document.getElementById("img-holder");
        holder.textContent = '';
        holder.appendChild(thumbnail);

        const reader = new FileReader();


        reader.onload = function (e) {
            thumbnail.src = e.target.result;
            setimageInput(prevSt => ({ imageSrc: e.target.result }))
        }


        reader.readAsDataURL(imageObj);
        console.log({ reader: reader })

    }

    return (
        <div className="col-4 file-manager" id="file-manager">
            <div>
                <input type="file" id="fileElem" accept="image/*" style={{ display: "none" }}></input>
                <button className="btn browse-btn" id="fileSelect" onClick={imageImporter}>Select photo</button>
                <div id="img-holder" className="img-holder"></div>


                <button className="btn add-btn" onClick={() => { props.imageAdder(imageInput) }}>+</button>

            </div>
        </div>
    )

}

export default FileManager

