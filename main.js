var sliderImage = Array.from(document.querySelectorAll(".container img"));
var indicatores = document.getElementById("indicatores");

var slideCount = sliderImage.length;

var currentSlide = 1;
 var slideNumberElement = document.getElementById("slide-number");

 var NextButton = document.getElementById("Next");

 var PrevousButton = document.getElementById("prev");

 NextButton.onclick = NextSlide;
 PrevousButton.onclick = prevSlide;

var paginationElement = document.createElement("ul");

paginationElement.setAttribute("id","pagination-ul")





for (let index = 1; index <= sliderImage.length; index++) {
    var paginationItems = document.createElement("li"); 
    paginationElement.append(paginationItems);
    paginationItems.setAttribute("data-index", index)
    paginationItems.innerHTML=index;
   

   
}

indicatores.appendChild(paginationElement);
paginationUl = document.getElementById("pagination-ul")

console.log(paginationItems);

var paginationsBullets = Array.from(document.querySelectorAll("#pagination-ul li"));

for (let i = 0; i < paginationsBullets.length; i++) {
   paginationsBullets[i].onclick = function () {
      
      currentSlide = parseInt(this.getAttribute("data-index"))
      checker()
   }
   
}


checker()


 function NextSlide() {
   if (NextButton.classList.contains("disabled")) {
      
   } else {
      currentSlide++
      checker()
   }
  
 }
 function prevSlide() {
   if (PrevousButton.classList.contains("disabled")) {
      
   }else {
      currentSlide = currentSlide - 1
      checker()
   }

 }

 function checker() {
  
    slideNumberElement.textContent = "slide #" + currentSlide + " of " + sliderImage.length;
    removeAllactive()
    sliderImage[currentSlide - 1].classList.add("active");

   
    paginationElement.children[currentSlide - 1].classList.add("active");

   if (currentSlide == 1) {
      PrevousButton.classList.add("disabled");
   }else{
      PrevousButton.classList.remove("disabled");
   }
   if (currentSlide === slideCount) {
      NextButton.classList.add("disabled");
   }else{
      NextButton.classList.remove("disabled");
   }
 }

 function removeAllactive() {

   paginationsBullets.forEach(function (ele) {
      ele.classList.remove('active');
    });

    sliderImage.forEach(function (img) {
        img.classList.remove("active")
    });

 }

 