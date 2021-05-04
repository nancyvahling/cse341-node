// function addImage() {
//     let imageSrc = imageForm.imageUrl.value;
//   let imgElement =  document.createElement("img")
//       ("src", imageSrc);
// }
function addImage() {
  // let imageSrc = imageForm.imageUrl.value;
  let imageSrc = document.getElementById("imageUrl").value;
  let imgElement = document.createElement("img");
  imgElement.setAttribute("src", imageSrc);
  document.body.appendChild(imgEleme