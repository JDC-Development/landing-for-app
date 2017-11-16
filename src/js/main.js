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