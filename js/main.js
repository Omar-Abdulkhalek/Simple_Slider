var imgs =Array.from(document.querySelectorAll(".item img")) ;
var clickedImgIndex = 0 ;
var nextBtn = document.getElementById("next");
var prevBtn= document.getElementById("prev");
var closeBtn = document.getElementById("close");
var lightBoxContainer = document.getElementById("lightBoxContainer");
var lightBoxItem = document.getElementById("lightBoxItem")

for(var i=0 ; i<imgs.length ; i++){
    imgs[i].addEventListener("click", function(e){
        lightBoxContainer.style.display="flex"
        lightBoxItem.style.backgroundImage="url("+e.target.getAttribute("src")+")"
        clickedImgIndex = imgs.indexOf(e.target)
        
    })
    
}

// function to next slide
function nextSlide(){
    clickedImgIndex++;
    if(clickedImgIndex == imgs.length){
        clickedImgIndex=0;
    }
    lightBoxItem.style.backgroundImage="url("+imgs[clickedImgIndex].getAttribute("src")+")"
}


nextBtn.addEventListener("click",nextSlide)




// function to prev slide
function prevSlide(){
    clickedImgIndex--;
    if(clickedImgIndex < 0){
        clickedImgIndex=imgs.length-1;
    }
    lightBoxItem.style.backgroundImage="url("+imgs[clickedImgIndex].getAttribute("src")+")"
}


prevBtn.addEventListener("click", prevSlide)

// function to close 
function closeFun(){
    lightBoxContainer.style.display="none";
}

closeBtn.addEventListener("click", closeFun)


document.addEventListener("keydown",function(e){
//    console.log(e);
    if(e.key=="ArrowRight"){
        nextSlide()

    }else if(e.key=="ArrowLeft"){
        prevSlide()
    }else if(e.key=="Escape"){
        closeFun()
    }

    
})