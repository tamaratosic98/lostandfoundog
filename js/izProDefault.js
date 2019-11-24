
var modal = document.getElementById("myModal");
var img = document.getElementById("img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

var close = document.getElementsByClassName("close")[0];
function showImg(slika){
    modal.style.display = "block";
    modalImg.src = slika.src;      
    captionText.innerHTML = slika.alt;
    }
close.onclick = function() {
  modal.style.display = "none";
}