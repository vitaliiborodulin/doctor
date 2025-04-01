var num = $(".number");
num.each(function(indx, el) {
    var max = $(el).data("max");
    var duration = 2000;
    var visibility = checkViewport(el);
    $(el).on("animeNum", function() {
        $({n: 0}).animate({n: max}, {
            easing: "linear",
            duration: duration,
            step: function(now, fx) {
                $(el).html(now | 0)
            }
        })
    }).data("visibility", visibility);
    visibility && $(el).trigger("animeNum")
});

function checkViewport(el) {
var H = document.documentElement.clientHeight,
    h = el.scrollHeight,
    pos = el.getBoundingClientRect();
    return pos.top + h > 0 && pos.bottom - h < H
}
$(window).scroll(function() {
    num.each(function(indx, el) {
        var visibility = checkViewport(el);
        el = $(el);
        var old = el.data("visibility");
        old != visibility && el.data("visibility", visibility) && !old && el.trigger("animeNum")
    })
})