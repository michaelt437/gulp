$(document).ready(function() {
    $('.calendar-table td').click(function() {
        if ($('.date')[0]) {
            $('.date').removeClass('date');
            $(this).addClass('date');
        } else {
            $(this).addClass('date');
        }
    })
});