// // to get current year
// function getYear() {
//     var currentDate = new Date();
//     var currentYear = currentDate.getFullYear();
//     document.querySelector("#displayYear").innerHTML = currentYear;
// }

// getYear();

// //service section owl carousel
// $(".service_owl-carousel").owlCarousel({
//     autoplay: true,
//     center: true,
//     nav: true,
//     loop: true,
//     margin: 0,
//     responsive: {
//         0: {
//             items: 1
//         },
//         768: {
//             items: 3,
//         },
//         991: {
//             items: 3
//         }
//     }
// });

// // owl carousel slider js
// var owl = $('.portfolio_carousel').owlCarousel({
//     loop: true,
//     margin: 15,
//     dots: false,
//     center: true,
//     autoplay: true,
//     navText: [
//         '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
//         '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
//     ],
//     autoplayHoverPause: true,
//     responsive: {
//         0: {
//             center: false,
//             items: 1,
//             margin: 0
//         },
//         576: {
//             items: 2
//         },
//         991: {
//             center: true,
//             items: 3
//         }
//     }
// })


// // owl.owlcarousel2_filter

// $('.owl-filter-bar').on('click', '.item', function (e) {
//     var $items = $('.owl-filter-bar a')
//     var $item = $(this);
//     var filter = $item.data('owl-filter')
//     $items.removeClass("active");
//     $item.addClass("active");
//     owl.owlcarousel2_filter(filter);

//     e.preventDefault();
// })
// /** google_map js **/
// function myMap() {
//     var mapProp = {
//         center: new google.maps.LatLng(40.712775, -74.005973),
//         zoom: 18,
//     };
//     var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
// }

// // nice select
// $(document).ready(function () {
//     $('select').niceSelect();
// });

// var a=document.getElementById('previous-button');
// var count=0;


//  var image=document.getElementById('img-one');

// a.addEventListener('click',()=>{


//     count++;
//     console.log("We are printing the value of this:",count);

//     if(count==1)
//     {
//         document.getElementById('img-one').src='https://nack.life/cdn/shop/files/Carousel_Web_Banner_img-01_1280x.jpg?v=1684483241';
//     }
//     if(count==2)
//     {
//         document.getElementById('img-one').src=' https://nack.life/cdn/shop/files/desktopbanner_1280x.jpg?v=1692342864';
//     }

//      if(count==3)
//      {

//          document.getElementById('img-one').src='https://nack.life/cdn/shop/files/Yoga_Day_Journal_Desktop_1280x.jpg?v=1689658304';
//          count=0;
//         return ;
//      }
   
  
    
 
// });

// var b=document.getElementById('next-button');
// b.addEventListener('click',()=>{

   
       
//     count++;
//     console.log("We are printing the value of this:",count);

//     if(count==1)
//     {
//         document.getElementById('img-one').src='https://nack.life/cdn/shop/files/Carousel_Web_Banner_img-01_1280x.jpg?v=1684483241';
//     }
//     if(count==2)
//     {
//         document.getElementById('img-one').src=' https://nack.life/cdn/shop/files/desktopbanner_1280x.jpg?v=1692342864';
//     }

//      if(count==3)
//      {

//          document.getElementById('img-one').src='https://nack.life/cdn/shop/files/Yoga_Day_Journal_Desktop_1280x.jpg?v=1689658304';
//          count=0;
//         return ;
//      }


// });
var ss=document.getElementById('ss');
var imgSrc=document.getElementById('img-src');
var localSrc=imgSrc.src;
window.addEventListener("scroll", function (e) {
  
    if(this.window.pageYOffset>0)
    { 
         imgSrc.src='https://nack.life/cdn/shop/files/NACK_LOGO_NoTagline.png?v=1638202082';
         console.log(imgSrc.src);
        console.log('delta is positive',this.window.pageYOffset);
      ss.classList.add('custom-class');  
    }
    else{

        console.log('delta is negative',this.window.pageYOffset);
        ss.classList.remove('custom-class');
         imgSrc.src=localSrc;
    }
  });

  var SpecialClass=document.getElementsByClassName('special-class');
  var respNavbar=document.getElementById('resp-navbar');
   var MyBtn=document.getElementById('myBtn');
   var count=0;
   var buttonSakib=document.getElementById('button-sakib');
//   MyBtn.addEventListener('click',()=>{

//     count++;
//     if(count==1){
//     for(var i=0;i<SpecialClass.length;i++){
//       SpecialClass[i].classList.add('CustomTwo');
//     }
// }
// if(count==2)
// {
//     for(var i=0;i<SpecialClass.length;i++){
//         SpecialClass[i].classList.remove('CustomTwo');
//       }
//      count=0;
//     }
    
//  console.log('Added');
    
MyBtn.addEventListener('click',()=>{

   count++;
   if(count==1)
   {
    respNavbar.classList.add('CustomTwo');
   }
   if(count==2)
   {

    respNavbar.classList.remove('CustomTwo');

    count=0;
   }

});


       
      
//   });

   

  var Left=document.getElementById('left-header-btn-sak');
  var right=document.getElementById('right-header-btn-sak');
  var middle=document.getElementById('middle-header-btn-sak');
  var hsection=document.getElementById('hsection');

  var abouth=document.getElementById('about-h2');
  var aboutp=document.getElementById('about-p');
Left.addEventListener('click',()=>{
   
     hsection.style.backgroundImage="url('https://nack.life/cdn/shop/files/Yoga_Day_Journal_Desktop_1280x.jpg?v=1689658304')";
    abouth.innerHTML="Beyond The Yoga Mat";
    aboutp.innerHTML="  Protect your skin from the harmful UV rays this Summer with nature's strongest Astaxanthin";
});
right.addEventListener('click',()=>{
   
   abouth.innerHTML="Stronger Than The Summer Sun";
   aboutp.innerHTML="  Protect your skin from the harmful UV rays this Summer with nature's strongest Astaxanthin ";
    hsection.style.backgroundImage="url('https://nack.life/cdn/shop/files/desktopbanner_1280x.jpg?v=1692342864')";
});
middle.addEventListener('click',()=>{
   
    abouth.innerHTML="Rapid Recovery Effective Hydration";
    aboutp.innerHTML="  Protect your skin from the harmful UV rays this Summer with nature's strongest Astaxanthin";
    hsection.style.backgroundImage="url('https://nack.life/cdn/shop/files/Carousel_Web_Banner_img-01_1280x.jpg?v=1684483241')";

});
   


   
    
   
    




const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    
    // Handle scrollbar thumb drag
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
        
        // Update thumb position on mouse move
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;

            // Ensure the scrollbar thumb stays within bounds
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
            
            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }

        // Remove event listeners on mouse up
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        // Add event listeners for drag interaction
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    // Slide images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

     // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    }

    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    // Call these two functions when image list scrolls
    imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
    });
}

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);