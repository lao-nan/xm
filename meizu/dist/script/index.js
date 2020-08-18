
//加载模块
$('.banxin').load('../pages/header.html');
$('.ft').load('../pages/footer.html');




//生活版块
$.ajax({
  type: 'get',
  url: '../json/st.json',
  dataType: 'json',
  cache: false,
  success: function (json) {
    
    for(var i =0;i<json.length;i++){
      var node = `<div>
      <img src="${json[i].img1}" alt="">
      <div>
        <img src="${json[i].img2}" alt="">
         <span>${json[i].intro1}</span>
      </div>
      <b>${json[i].intro2}</b>
      <span class="biao">${json[i].biao}</span>
</div>`
   $('.sh').append(node)
    }

  },
  error: function () {
    alert('请求失败');
  }
});










// 轮播图
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 水平切换选项
    loop: true, // 循环模式选项
    autoplay: true,
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    }
  })  
  
  

  








