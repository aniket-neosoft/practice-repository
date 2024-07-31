$(document).ready(function() {
    $('#name, #email, #password, #confirm_password').css({
        'padding': '10px',
        'margin-bottom': '15px',
        'border': '1px solid #ccc',
        'border-radius': '4px'
    });

    $('#name, #email, #password, #confirm_password').focus(function() {
        $(this).css('border-color', '#333');
    });

    $('#name, #email, #password, #confirm_password').blur(function() {
        $(this).css('border-color', '#ccc');
    });
});
