$(document).ready(function(){
  var imgItems = $('.slider li').length;
  var imgPos = 1;

  for(i = 1; i <= imgItems ; i++){
    $('.pagination').append("<li><i class='fa fa-circle'></i></li>");
  }

  $('.slider li').hide();
  $('.slider li:first').show();  
  $('.pagination li:first').css({'color': '#40e0d0'});

  $('.pagination li').click(pagination);
  $('.right i').click(nextSlider);
  $('.left i').click(prevSlider);

  function pagination(){
    var paginationPos = $(this).index() + 1;
    $('.slider li').hide();
    $('.slider li:nth-child(' + paginationPos + ')').fadeIn();
    $('.pagination li').css({'color': '#fff'});
    $(this).css({'color': '#40E0D0'});

    imgPos = paginationPos;
  }

  function nextSlider(){
    if(imgPos >= imgItems){
      imgPos = 1;
    }else{
      imgPos++;
    }

    $('.pagination li').css({'color': '#fff'});
    $('.pagination li:nth-child(' + imgPos + ')').css({'color': '#40E0D0'});
  
    $('.slider li').hide();
    $('.slider li:nth-child('+ imgPos +')').fadeIn();
    }
    
    function prevSlider(){
      if(imgPos <= 1){
        imgPos = imgItems;
      }else{
        imgPos--;
      }
  
      $('.pagination li').css({'color': '#fff'});
      $('.pagination li:nth-child(' + imgPos + ')').css({'color': '#40E0D0'});
    
      $('.slider li').hide();
      $('.slider li:nth-child('+ imgPos +')').fadeIn();
      }
});

