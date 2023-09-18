var rectangle = document.querySelector(".rect");

rectangle.addEventListener("mousemove", function(details) {
    var rectanglelocation = rectangle.getBoundingClientRect();
    var insideRectVal = details.clientX - rectanglelocation.left;
    if (insideRectVal<rectanglelocation.width/2) {
        var redColor = gsap.utils.mapRange(0, rectanglelocation.width/2, 255, 0, insideRectVal);
        gsap.to(rectangle, {
            backgroundColor: `rgb(${redColor}, 0, 0)`,
            ease: Power4
            
        });
    }
    else {
        var blueColor = gsap.utils.mapRange(rectanglelocation.width/2, rectanglelocation.width, 0, 255, insideRectVal);
        gsap.to(rectangle, {
            backgroundColor: `rgb(0, 0, ${blueColor})`,
            ease: Power4
            
        }); 
    }
})

rectangle.addEventListener("mouseleave", function() {
    gsap.to(rectangle, {
        backgroundColor: "white"
    })
})