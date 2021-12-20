$(document).ready(function () {
    $('h1').click(function () {
        alert('This is a Header');
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
    });
})