$(document).ready(function () {
    $('h1').click(function () {
        $('img').fadeOut(4000, function () {
            $('#p1').text('Our cow has disappeared');
            $('#p2').text('Our Goat has also Disappeared');
        });
    });

    $('.clickable').click(function () {
        //alert('This is a paragraph');
        // $('img').show();
        $('.cow-showing').toggle();
        $('.cow-hidden').toggle();
        // $(this).text('This is a beautiful Cow!');
    });

    $('img').click(function () {
        //$(this).hide();
        // $('#p1').text('Our Cow has disappeared.');
        //$('#p2').text('There is no cow: ');
        $('.cow-showing').fadeToggle();
        $('.cow-hidden').fadeToggle();
        $('.cow').fadeToggle();
    });
})

