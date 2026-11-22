function upDate(previewPic) {
  console.log("Event triggered");
  console.log("alt:", previewPic.alt);
  console.log("src:", previewPic.src);

  const image = document.getElementById("image");
  image.innerHTML = previewPic.alt;
  image.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
  const image = document.getElementById("image");
  image.style.backgroundImage = "url('')";
  image.innerHTML = "Hover over an image below to display here.";
}
