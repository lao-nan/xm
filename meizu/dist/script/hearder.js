var showindex =0;
var prev = showindex;
$('.nav1 li').mouseenter(function () {
  $('.boxson'+(prev+1)+' '+'.center').empty();
  showindex = $(this).index();
  prev = showindex;
  if (showindex < 4) {
    $('a').addClass("upa");
    $('h1').addClass('biglog')
    $('.box').animate({
      height: 268
    }, 100, function () {
      $.ajax({
        type: 'get',
        url: '../json/boxson1.json',
        dataType: 'json',
        cache: false,
        success: function (json) {


        $('.boxson'+(prev+1)+' '+'.center').empty();
       json['bonson'+(showindex+1)].forEach(function(item,idex) {
        var node=`<div><img src="${json['bonson'+(showindex+1)][idex].adr}" alt="">
        <p>${json['bonson'+(showindex+1)][idex].tro}</p><span>${json['bonson'+(showindex+1)][idex].price}</span>
        </div>`
        $('.boxson'+(showindex+1) +' '+'.center').append(node);
        
      });


       $('.boxson1 .center').on('click','div',function(){
         var val = $(this).find('p').text();
         if($(this).index()<6){
           window.open(val+'.html')
         }
       })
        
       
      



        },
        error: function () {
          alert('请求失败');
        }
      });
    })
  }
  if (showindex > 3) {
    $('.box')[0].style.height = 0;
  }
}
)

$('.box').mouseleave(function(){
  $('a').removeClass("upa");
  $('h1').removeClass('biglog')
  $('.box').animate({
    height: 0
  }, 100,function(){
    $('.boxson .center').empty();
  }
  )
})


$('.user2').mouseleave(function(){


$(this).css({'display':'none'})

})

$('.user').mouseenter(function(){
  $('.user2').css({'display':'block'})
})
$('.user2').on('click','div',function(){
    
  if($(this).index()==0){
    var val = $(this).text();
    window.open(val+'.html')
  }
})





