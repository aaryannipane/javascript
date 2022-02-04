const dropZone = document.querySelector(".drop-zone");
const fileInput = document.querySelector("#fileInput");
const browseBtn = document.querySelector(".browse-btn ");

const host = "https://innshare.herokuapp.com";
const uploadURL = '${host}api/files';

dropZone.addEventListener("dragover", (e)=>{
    // console.log("Dragging");
    e.preventDefault()
    if(!dropZone.classList.contains("dragged")){
        dropZone.classList.add("dragged");
    }
})

dropZone.addEventListener("dragleave", (e)=>{
    dropZone.classList.remove("dragged");
})

dropZone.addEventListener("drop", (e)=>{
    e.preventDefault()
    dropZone.classList.remove("dragged");
    const files = e.dataTransfer.files;
    console.log(files);
    if(files.length){
        fileInput.files = files;
        uploadFile();
    }
})


browseBtn.addEventListener("click", (e)=>{
    fileInput.click()
})

const uploadFile = ()=>{

    const file = filesInput.files(0);
    const formData = new formData();
    formData.append("myfile", file);

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = ()=>{
        console.log(xhr.readyState)
    };

    xhr.open("POST", uploadURL);
    xhr.send(formData);
}