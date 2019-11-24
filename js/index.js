function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Prikaži više"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Prikaži manje"; 
      moreText.style.display = "inline";
    }
  }
  function myFunctionTwo() {
    var dotsTwo = document.getElementById("dotsTwo");
    var moreTextTwo = document.getElementById("moreTwo");
    var btnTextTwo = document.getElementById("myBtnTwo");
  
    if (dotsTwo.style.display === "none") {
      dotsTwo.style.display = "inline";
      btnTextTwo.innerHTML = "Prikaži više"; 
      moreTextTwo.style.display = "none";
    } else {
      dotsTwo.style.display = "none";
      btnTextTwo.innerHTML = "Prikaži manje"; 
      moreTextTwo.style.display = "inline";
    }
  }
  function myFunctionThree() {
    var dotsThree = document.getElementById("dotsThree");
    var moreTextThree = document.getElementById("moreThree");
    var btnTextThree = document.getElementById("myBtnThree");
  
    if (dotsThree.style.display === "none") {
      dotsThree.style.display = "inline";
      btnTextThree.innerHTML = "Prikaži više"; 
      moreTextThree.style.display = "none";
    } else {
      dotsThree.style.display = "none";
      btnTextThree.innerHTML = "Prikaži manje"; 
      moreTextThree.style.display = "inline";
    }
  }
function topFunction() {
  document.documentElement.scrollTop = 0;
}