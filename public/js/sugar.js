$(function() {
    $(window).click(function() {
        console.log('posting message...');
        parent.postMessage({ green: 'day' }, '*');
    });
})