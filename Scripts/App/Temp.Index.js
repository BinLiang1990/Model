define(function (require) {
    var $ = require("jquery");
    var Common = require('common');
    require('tweenmax');

    $(".alert").click(function () {
        Common.Action.Alert();
    })

    $(".alert1").click(function () {
        Common.Action.Alert({ width: 500, state: "success", title: "I'm a winner ^-^", content: "Win~~~~ ╮(￣▽￣)╭" });
    })

    $(".alert2").click(function () {
        Common.Action.Alert({ width: 500, state: "error", title: "Error", content: "Sth is wrong" });
    })

    $(".alert3").click(function () {
        Common.Action.Alert({ width: 500, state: "notice", title: "Pay attention class", content: "超生德V5，It's a miracle" });
    })

    $(".alert4").click(function () {
        Common.Action.Alert({ width: 300, state: "notice", title: "又瘦了", content: "- -" });
    })

    $(".alert5").click(function () {
        Common.Action.Alert({ width: 500, title: "Block", backdrop: "default", content: "点黑的地方不隐藏了？" });
    })

    $(".alert6").click(function () {
        Common.Action.Alert({ width: 500, title: "Shake shake shake", backdrop: "shake", content: "I'm cold" });
    })

    $(".alert7").click(function () {
        Common.Action.Alert({ width: 500, title: "You have no idea", backdrop: "shake", content: "you have to click me", close: false });
    })

    $(".confirm").click(function () {
        Common.Action.ShowBox(true);
        Common.Action.Confirm().bind("confirm", function () {
            alert("确定");
        });
    })

    $(".changenav").click(function () {
        $(".page").hide();
        $("#alert").show();
    })

})