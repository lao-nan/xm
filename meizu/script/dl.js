$('.fot').load('../pages/footer.html');

if (localStorage.getItem("userObj")) {
    var obj = localStorage.getItem("userObj");
    obj = JSON.parse(obj);
    $('.z').val(obj.user);
    $('.m').val(obj.pass);
}


$('.j').click(function () {

    var t = $(this).prop('checked')

    if (t) {
        var user = $('.z').val();
        var pass = $('.m').val();
        var res = /[0-9a-zA-Z]{6,15}/g

        if (user.length > 6 && user.length < 16 && pass.length > 6 && pass.length < 16) {

            if (res.test(user) || res.test(pass)) {
                var userObj = { "user": user, "pass": pass }
                userObj = JSON.stringify(userObj);
                localStorage.setItem("userObj", userObj);
            }

        }

    } 

})




$('.fl').click(function () {




    if (!$('.j').prop('checked')) {
        localStorage.removeItem("userObj");

    }

    var user = $('.z').val();
    var pass = $('.m').val();


    var res = /[0-9a-zA-Z]{6,15}/g;


    if (user.length > 6 && user.length < 16 && pass.length > 6 && pass.length < 16) {



        if (res.test(user) || res.test(pass)) {



            window.open('./index.html')



        } else {

            alert("请检查你的账号密码")
        }


    } else {

        alert("请检查你的账号密码")
    }



})