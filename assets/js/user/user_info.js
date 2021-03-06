$(function () {
    var form = layui.form;
    form.verify({
        nickname: function (value) {
            if (value.length > 6) {
                return "昵称长度为1-6位之间"
            }
        }
    })


    initUser();
    var layer = layui.layer;
    function initUser() {
        $.ajax({
            method: 'GET',
            url: '/my/userinfo',
            success: function (res) {
                if (res.status !== 0) {
                    return layer.msg(res.message);
                }
                form.val('formUserInfo', res.data);
            }
        })
    }

    $('#btnReset').on('click', function (e) {
        e.preventDefault;
        initUser();
    })

    //修改信息
    $('.layui-form').on('submit', function (e) {
        e.preventDefault;
        $.ajax({
            method: 'POST',
            url: '/my/userinfo',
            data: $(this).serialize(),
            success: function (res) {
                if (res.status !== 0) {
                    return layer.msg(res.message);
                }
                layer.msg('恭喜您,修改用户信息成功! ');
                window.parent.getUserInfo();
            }

        })
    })

})