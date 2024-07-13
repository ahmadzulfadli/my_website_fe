var nama = document.getElementById("formName");
var email = document.getElementById("formEmail");
var message = document.getElementById("formMessage");

var btnSubmit = document.getElementById("btn_submit");

if (nama && email && message && btnSubmit) {
    btnSubmit.addEventListener('click', function(){

        var formdata = '{'
        formdata += '"name":"' + nama.value + '",'
        formdata += '"email":"' + email.value + '",'
        formdata += '"message":"' + message.value +'"'
        formdata += '}'

        $.ajax({
            url: 'http://{url}/api/v1/message/send',
            type: 'post',
            contentType: 'application/json',
            data: formdata,
            success: function (data) {
                if (data.status === "failed") {
                    alert("failed");
                } else {
                    setTimeout(function(){
                        nama.value = "";
                        email.value = "";
                        message.value = "";
            
                        location.reload();
                    }, 3000);
                }
            }
        });
    });
}else{
    console.log("Element tidak ditemukan");
}