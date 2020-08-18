$('.head').load('../pages/header.html');
$('.dft').load('../pages/footer.html');
$.ajax({
    type: 'get',
    url: '../json/detail.json',
    dataType: 'json',
    cache: false,
    success: function (json) {
        for (var i = 0; i < json.length; i++) {
        var node = `<li>
            <img class="img1" src="${json[i].img1}" alt="">
            <img class="img2" src="${json[i].img2}" alt="">
            <h3>${json[i].title}</h3>
            <p>${json[i].gn}</p>
            <h4><b>￥</b>${json[i].price}</h4>
            </li>`
            $('.phnav').append(node)
        }

    },
    error: function () {
        alert('请求失败');
    }
});






$('.phnav').on('mouseenter','li',function(){
    var node ='<div class="niu"><div class="circle"><div class="d1">1</div><div class="d2">2</div></div><div class="wrap"></div></div>'
    $(this).append(node);
    var z = this;
    $('.niu .circle').on('click','div',function(){
        if($(this).index()==0){
            console.log()
            $('.wrap').css({'left':'172px'})
            $('.img1').eq($(z).index()).css({'display':'inline-block'});
            $('.img2').eq($(z).index()).css({'display':'none'});
        }else{
            $('.wrap').css({'left':'205px'})
            $('.img2').eq($(z).index()).css({'display':'inline-block'});
            $('.img1').eq($(z).index()).css({'display':'none'});
        }
    })






})


$('.phnav').on('mouseleave','li',function(){
    $('.niu').detach()
})

$('.pht').on('click','span',function(){
    
  
   if($(this).index()==3){

    $('.phnav').empty();
    $.ajax({
        type: 'get',
        url: '../json/detail.json',
        dataType: 'json',
        cache: false,
        success: function (json) {
            for (var i = 0,len=json.length; i <len; i++) {
            var node = `<li>
                <img class="img1" src="${json[len-1-i].img1}" alt="">
                <img class="img2" src="${json[len-1-i].img2}" alt="">
                <h3>${json[len-1-i].title}</h3>
                <p>${json[len-1-i].gn}</p>
                <h4><b>￥</b>${json[len-1-i].price}</h4>
                </li>`
                $('.phnav').append(node)
            }
        },
        error: function () {
            alert('请求失败');
        }
    });

}else if($(this).index()==2){


    $('.phnav').empty();
    $.ajax({
        type: 'get',
        url: '../json/detail.json',
        dataType: 'json',
        cache: false,
        success: function (json) {
            for (var i = 0,len=json.length; i <len; i++) {
            var node = `<li>
                <img class="img1" src="${json[i].img1}" alt="">
                <img class="img2" src="${json[i].img2}" alt="">
                <h3>${json[i].title}</h3>
                <p>${json[i].gn}</p>
                <h4><b>￥</b>${json[i].price}</h4>
                </li>`
                $('.phnav').append(node)
            }
        },
        error: function () {
            alert('请求失败');
        }
    });



}else{



    $('.phnav').empty();
    $.ajax({
        type: 'get',
        url: '../json/detail.json',
        dataType: 'json',
        cache: false,
        success: function (json) {
            for (var i = 0,len=json.length; i <len; i++) {
            var node = `<li>
                <img class="img1" src="${json[len-1-i].img1}" alt="">
                <img class="img2" src="${json[len-1-i].img2}" alt="">
                <h3>${json[len-1-i].title}</h3>
                <p>${json[len-1-i].gn}</p>
                <h4><b>￥</b>${json[len-1-i].price}</h4>
                </li>`
                $('.phnav').append(node)
            }
        },
        error: function () {
            alert('请求失败');
        }
    });






}




})



$('.phnav').on('click','li',function(e){
    var ev = e || event;

    var target = e.target || e.srcElement;

    if($(target).text()=='1'){
       
    }else if($(target).text()=='2'){
        
    }else{

        if($(this).index()>2){

        }else{
            var node  = $(this).find('h3').text()
            window.open(node+'.html')
        }
    
    }

})
