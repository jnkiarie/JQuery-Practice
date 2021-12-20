$(document).ready(function () {
    $('h1').click(function () {
        alert('This is a Header');
    });

    $('p').click(function () {
        //alert('This is a paragraph');
        $('img').show();
    });

    $('img').click(function () {
        $(this).hide();
        $('#p1').text('Our Cow has disappeared.');
        $('#p2').text('There is no cow: ');
    });
})