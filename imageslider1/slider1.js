const IMAGE_WIDTH=400;
var carousel=document.getElementsByClassName('carousel-container');  
var imageWrapper=document.getElementsByClassName('image-wrapper')[0];
var imageArray=Array.from(imageWrapper.children);
 var transitionArray=[];
 var i=0;
 var currentIndex=0;
 var l=imageArray.length;

for(index in imageArray){
    //imageArray[index].style.left=(IMAGE_WIDTH * index)+'px';
     transitionArray [index]=((IMAGE_WIDTH) * index)+'px';
    
}

function Slideleft(){
    //imageWrapper.style.left=(-IMAGE_WIDTH*currentIndex)+'px';
    
    i++;
   currentIndex++;
   
        if(transitionArray[i]>=transitionArray[i+1])
        {
            
            clearInterval;
        }  
      else{
          imageWrapper.style.left=(-50*i)+'px';
    }  
    if(i>28){
        i=0;
    }

}
setInterval(Slideleft,300);

        var slide_index = 1;  
        displaySlides(slide_index);  
  
        function nextSlide(n) {  
            displaySlides(slide_index += n);  
        }  
  
        function currentSlide(n) {  
            displaySlides(slide_index = n);  
        }  
  
        function displaySlides(n) {  
            var i;  
            var slides = document.getElementsByClassName("image-wrapper");  
            if (n > 4) { slide_index = 1 }  
            if (n < 1) { slide_index = 4 }  
            for (i = 0; i > 4; i++) {  
                slides[i].style.display = "none";  
            }  
            slides[slide_index - 1].style.display = "block";  
        }  
