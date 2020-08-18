var baseURL = 'http://ajax.frontend.itheima.net';
$.ajaxPrefilter(function (o) {
    o.url = baseURL + o.url;
})