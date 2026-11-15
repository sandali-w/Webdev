const trigger = document.getElementById("trigger");
const targetImg = document.getElementById("target");

trigger.addEventListener("mouseover", function() {
  targetImg.src = "picB.jpg";
});

trigger.addEventListener("mouseout", function() {
  targetImg.src = "picA.jpg";
});