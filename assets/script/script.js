$(document).ready(function(){
    // $(".outfit-selection").click(function(){
    //     $(".outfit").hide();
    //     $("#body").hide();
    //     $("#o".concat($(this).attr('id').slice(1))).show();
    //
    // })
    // $("#strip-button").click(function(){
    //     $(".outfit").fadeOut();
    //     $("#body").fadeIn();
    // })
    var elem = (document.compatMode === "CSS1Compat") ? document.documentElement:document.body;
    var windowheight = elem.clientHeight;
    var windowwidth = elem.clientWidth;
    $(".circleimg").css("height", windowheight*.75);
    $(".bigring").css("height", windowheight*.75);
    $(".tabimg").css("height", windowheight);
    document.body.classList.add('js-loading');
    window.addEventListener("load", showPage);
    function showPage() {
        document.body.classList.remove('js-loading');
    }
});
