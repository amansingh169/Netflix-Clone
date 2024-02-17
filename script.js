$(document).ready(function () {
    $('.que-title').click(function () {
        // Close all answers
        $('.que-ans').not($(this).next('.que-ans')).slideUp();
        $('.bx-plus').not($(this).find('.bx-plus')).removeClass('focused');

        // Toggle the display of the clicked question's answer
        $(this).next('.que-ans').slideToggle();
        $(this).find('.bx-plus').toggleClass('focused');
    });
});