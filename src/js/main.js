autoSlider();
var left = 0;
function autoSlider(){
    var timer = setTimeout(function(){
      var sliderWidth = document.getElementById('my-slider');
        left = left - 1008;
        if (left < -1680){
            left = 0;
            clearTimeout(timer);
        }
        sliderWidth.style.left = left + 'px';
        autoSlider();  
    },3000);
}

autoSlider2();
var left2 = 0;
function autoSlider2(){
    var timer2 = setTimeout(function(){
      var sliderWidth2 = document.getElementById('slider-hover');
        left2 = left2 - 578;
        if (left2 < -578){
            left2 = 578;
            clearTimeout(timer2);
        }
        sliderWidth2.style.left = left2 + 'px';
        autoSlider2();  
    },3000);
}

$(document).ready(function(){
    $('.fa-heart-o').hover(function(){
        $('#image-hover').removeClass('fa fa-briefcase fa-5x');
        $('#image-hover').removeClass('fa fa-leaf fa-5x');
        $('#image-hover').removeClass('fa fa-microchip fa-5x');
        $('#image-hover').removeClass('fa fa-umbrella fa-5x');
        $('#image-hover').addClass('fa fa-heart-o fa-5x');  
    });
    $('.fa-briefcase').hover(function(){
        $('#image-hover').removeClass('fa fa-heart-o fa-5x');
        $('#image-hover').removeClass('fa fa-leaf fa-5x');
        $('#image-hover').removeClass('fa fa-microchip fa-5x');
        $('#image-hover').removeClass('fa fa-umbrella fa-5x');
        $('#image-hover').addClass('fa fa-briefcase fa-5x');
    });
     $('.fa-leaf').hover(function(){
        $('#image-hover').removeClass('fa fa-briefcase fa-5x');
        $('#image-hover').removeClass('fa fa-heart-o fa-5x');
        $('#image-hover').removeClass('fa fa-microchip fa-5x');
        $('#image-hover').removeClass('fa fa-umbrella fa-5x');
        $('#image-hover').addClass('fa fa-leaf fa-5x');  
    });
    $('.fa-microchip').hover(function(){
        $('#image-hover').removeClass('fa fa-heart-o fa-5x');
        $('#image-hover').removeClass('fa fa-leaf fa-5x');
        $('#image-hover').removeClass('fa fa-briefcase fa-5x');
        $('#image-hover').removeClass('fa fa-umbrella fa-5x');
        $('#image-hover').addClass('fa fa-microchip fa-5x');
    });
    $('.fa-umbrella').hover(function(){
        $('#image-hover').removeClass('fa fa-heart-o fa-5x');
        $('#image-hover').removeClass('fa fa-leaf fa-5x');
        $('#image-hover').removeClass('fa fa-briefcase fa-5x');
        $('#image-hover').removeClass('fa fa-microchip fa-5x');
        $('#image-hover').addClass('fa fa-umbrella fa-5x');
    });
});