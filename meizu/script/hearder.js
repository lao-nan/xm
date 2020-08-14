var showindex =0;
var prev = showindex;
$('.nav li').mouseenter(function () {
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
    console.log('bonson'+(showindex+1))
       json['bonson'+(showindex+1)].forEach(function(item,idex) {
        var node=`<div><img src="${json['bonson'+(showindex+1)][idex].adr}" alt="">
        <p>${json['bonson'+(showindex+1)][idex].tro}<span>${json['bonson'+(showindex+1)][idex].price}</span></p>
        </div>`
        console.log('.boxson'+(showindex+1) +' '+'.center')
        $('.boxson'+(showindex+1) +' '+'.center').append(node);
      });
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