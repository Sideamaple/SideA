(function($) {
    $(document).ready(function () {
        $('.popup-window').on('click', function () {
            console.log($(this));
            console.log('Link ' + $(this).attr('id') + ' clicked');

            var name = $(this).data('name');
            console.log('Name: ' + name);
            var popup = $('#' + name + '-info');
            popup.css({display: 'block'});
            $('body').css({overflow: 'hidden'});
        });
        $('.popup').on('click', function () {
            $(this).css({display: 'none'});
            $('body').css({overflow: 'auto'});
        });
    });
})(jQuery);