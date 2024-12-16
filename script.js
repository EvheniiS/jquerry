import $ from "jquery";

// or alternatively:
$(document).ready(function() {
    $('.list-item:first').hover(function () { 
        $(this).toggleClass();
    });

    $('.list-item:eq(2)').on('click', () => {
        $('.image:even').fadeToggle('slow');
    })

    $('.list-item:eq(4)').on('click', () => {
        $('.image:odd').animate(
            {
                opacity: 'toggle',
                height: 'toggle'
            }, 2000 )
    })

});
