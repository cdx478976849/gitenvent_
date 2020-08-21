var baseURL = 'http://ajax.frontend.itheima.net';
$.ajaxPrefilter(function (o) {
    o.url = baseURL + o.url;

    if (o.url.indexOf('/my/') !== -1) {
        o.headers = {
            Authorization: localStorage.getItem('token') || '',
        }
    }


    o.complete = function (res) {
        console.log(res.responseJSON);
        console.log(res);
        var obj = res.responseJSON;
        if (obj.status == 1 && obj.message == "身份认证失败！") {
            localStorage.removeItem('token');
            location = '/login.html';
        }
    }
})