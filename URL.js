function addImage() {
    // let imageSrc = imageForm.imageUrl.value;
    let imageSrc = document.getElementById("imageUrl").value;
    let imgElement = document.createElement("img");
    imgElement.setAttribute("src", imageSrc);
    document.body.appendChild(imgElement);
} 