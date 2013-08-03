$(function() {
    $(window).click(function() {
        console.log('posting message...');
        parent.postMessage({ green: 'day' }, '*');
    });
});

$(function() {
    $(window).click(function(e) {
        alert($(window).width());
    });
});