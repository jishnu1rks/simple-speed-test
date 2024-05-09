const button = document.getElementById("button");
const speed = document.getElementById("speed");

button.addEventListener("click", () => {
  console.log("button clicked");
  let i = 0;
  let speedOut;
  var totalSpeed = 80;
  function animate() {
    if (i < totalSpeed) {
      speed.innerHTML = i.toFixed();
      setTimeout(animate, 20);
      i += 1.02;
    } else {
      i = 0;
    }
  }

  animate();
  var imageLink =
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/Tokyo_Sky_Tree_2012.JPG",
    downloadSize = 8185374,
    time_start,
    time_end;
  var downloadSrc = new Image();

  time_start = new Date().getTime();
  const cacheImg = "?nn" + time_start;
  downloadSrc.src = imageLink + cacheImg;
  downloadSrc.onload = function () {
    time_end = new Date().getTime();

    var timeDuration = (time_end - time_start) / 1000;
    var loadBytes = downloadSize * 8;
    totalSpeed = (loadBytes / timeDuration / 1024 / 1024).toFixed();

    speed.innerHTML = totalSpeed;
  };
});
