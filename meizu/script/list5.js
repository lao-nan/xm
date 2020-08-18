$('.head').load('../pages/header.html');
$('.fft').load('../pages/footer.html');



$('.nav li').on('click', 'div', function () {
  if ($(this).is('.ct')) {

  } else {

    //转换内容 d3
    if ($(this).parent().parent().is('.d3')) {
      var name = $(this).text();
      

   if(name=="魅族17"){
   
      $('.x1').css({'display':'inline-block'}).siblings().css({'display':'none'});

   }else if(name=="魅族17Pro"){

    $('.x2').css({'display':'inline-block'}).siblings().css({'display':'none'});

   }else if(name=="【17Pro老用户专享】"){

    $('.x3').css({'display':'inline-block'}).siblings().css({'display':'none'});
     
   }else{

    $('.x4').css({'display':'inline-block'}).siblings().css({'display':'none'});
     
   }
     
     
     
     
     
      $('.sj').empty()
      $.ajax({
        type: 'get',
        url: '../json/list5.json',
        dataType: 'json',
        cache: false,
        success: function (json) {
          for (var i = 0; i < json.length; i++) {
            if (json[i].name == name) {
              var va = `<h2>${json[i].name}</h2><p>${json[i].intro}</p>`
              $('.sj').prepend(va)
              $('.yj').find('span').text(json[i].mj)
              $('.gm h2').text(json[i].price)
              $('.d8').empty();
              var va1= `<span class="t8">花呗分期 </span><div><span>${json[i].f1}</span> <p>${json[i].f1s}</p></div>
               <div><span>${json[i].f2}</span> <p>${json[i].f2s}</p></div>
               <div><span>${json[i].f3}</span> <p>${json[i].f3s}</p></div>`
               $('.d8').append(va1);
            }


          }


        },
        error: function () {
          alert('请求失败');
        }
      });

      if ($(this).index() == 0) { } else {
        var t1 = $(this).text();
        var t2 = $(this).siblings().eq(0).text()
        $(this).siblings().eq(0).text(t1);
        $(this).text(t2);
      }

    }

    //d5颜色分类
    if ($(this).parent().parent().is('.d5')) {
      $(this).css({ 'border': '1px solid #000000', 'color': '#000000' })
      $(this).siblings().css({ 'border': '1px solid #f2f2f2', 'color': '#595959' });
    }
    //选择套餐
    if ($(this).parent().parent().is('.d7')) {
      $(this).css({ 'border': '1px solid #000000', 'color': '#000000' })
      $(this).siblings().css({ 'border': '1px solid #f2f2f2', 'color': '#595959' });
    }

  }

  //d6内存容量
  if ($(this).parent().is('.d6')) {

    $(this).css({ 'border': '0.1px solid #000000', 'color': '#000000' })
    $(this).siblings().css({ 'border-color': '#f2f2f2', 'color': '#595959' });
  
    
   if($(this).index()==2){

  

    if($('.sj h2').text()=="魅族17"){
      $('.gm h2').text("￥3999.00")
    }else if($('.sj h2').text()=="【17Pro老用户专享】"){
      $('.gm h2').text("￥4699.00")
    }else if($('.sj h2').text()=="魅族17Pro"){
      $('.gm h2').text("￥4699.00")
    }else{
      $('.gm h2').text("￥3999.00")
    }

  }else{


    if($('.sj h2').text()=="魅族17"){
      $('.gm h2').text("￥3699.00")
    }else if($('.sj h2').text()=="【17Pro老用户专享】"){
      $('.gm h2').text("￥4299.00")
    }else if($('.sj h2').text()=="魅族17Pro"){
      $('.gm h2').text("￥4299.00")
    }else{
      $('.gm h2').text("￥3699.00")
    }
    

  }
    




  }

})






$('.x1 .imq .ct').on('click','div',function(){

  $('.x1 .imk img').eq($(this).index()).css({'display':'inline-block'}).siblings().css({'display':'none'})


})



$('.x2 .imq .ct').on('click','div',function(){

  $('.x2 .imk img').eq($(this).index()).css({'display':'inline-block'}).siblings().css({'display':'none'})


})



$('.x3 .imq .ct').on('click','div',function(){

  $('.x3 .imk img').eq($(this).index()).css({'display':'inline-block'}).siblings().css({'display':'none'})

})



$('.x4 .imq .ct').on('click','div',function(){

  $('.x4 .imk img').eq($(this).index()).css({'display':'inline-block'}).siblings().css({'display':'none'})

  
})



var name= document.cookie.split('=')[1];
if(name){
  console.log(typeof name)
}



$('.s1').on('click',function(){
  $(this).siblings('.s2').css({'color':'#000000'})
  
  var val = $(this).siblings('.z').text();
  val = parseInt(val)
  console.log(val==1);

  if(val>1){
    val = val - 1;
    $(this).siblings('.z').text(val+'');
  }

  if(val==1){
    $(this).css({'color':'#e0e0e0'})
  }else{
    $(this).css({'color':'#000000'})
  }




})





$('.s2').on('click',function(){



   $(this).siblings('.s1').css({'color':'#000000'})
 


  var val = $(this).siblings('.z').text();
  val = parseInt(val)
  
  if(val<3){
    val = val + 1;
    $(this).siblings('.z').text(val+'');
  }
  
  if(val==3){
    $(this).css({'color':'#e0e0e0'})
  }else{
    $(this).css({'color':'#000000'})
  }




})