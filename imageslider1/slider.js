const IMAGE_WIDTH=400;
var carousel=document.getElementsByClassName('carousel-container');  
var imageWrapper=document.getElementsByClassName('image-wrapper')[0];
var imageArray=Array.from(imageWrapper.children);
for(index in imageArray){
    imageArray[index].style.left=(IMAGE_WIDTH * index)+'px';
}
var currentIndex=0;
function Slideshow(){
    currentIndex++;
    if(currentIndex >= imageArray.length){
        currentIndex=0;
    }
    imageWrapper.style.left= (-IMAGE_WIDTH*currentIndex)+'px';
 // imageArray[currentIndex].style.display='block';

}
setInterval(Slideshow,3000);