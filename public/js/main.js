// $(window).on('message', function(e) {
//     window.e = e;
//     alert('e');
// });

$(function() {
    $(window).click(function(e) {
        alert($(window).width());
    });
});