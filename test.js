 // Animation for skill bars
 $(document).ready(function() {
    $('.skill-bar').each(function() {
        var width = $(this).attr('aria-valuenow');
        $(this).css('width', width + '%');
    });
});


