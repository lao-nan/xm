$('.qiu').mouseenter(function(){
  $('.cd').css({'display':'block'}); 
})

$('.cd').mouseleave(function(){
    $(this).css({'display':'none'});
})



$('.w').mouseenter(function(){
    $('.z1').css({'display':'block'})
}).mouseleave(function(){
    $('.z1').css({'display':'none'})
   $('.z1').mouseenter(function(){
    $('.z1').css({'display':'block'})
   })
})
$('.z1').mouseleave(function(){
    $('.z1').css({'display':'none'})
   })


   $('.x').mouseenter(function(){
    $('.z2').css({'display':'block'})
}).mouseleave(function(){
    $('.z2').css({'display':'none'})
   $('.z2').mouseenter(function(){
    $('.z2').css({'display':'block'})
   })
})
$('.z2').mouseleave(function(){
    $('.z2').css({'display':'none'})
   })