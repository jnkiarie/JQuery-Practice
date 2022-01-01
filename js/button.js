$(document).ready(function () {
    $('button#red').click(function () {
        $('body').removeClass();
        //$('body').addClass('redb');
        $('ul#left').children().first().remove();

    });
    $('button#green').click(function () {
        $('body').removeClass();
        //$('body').addClass('greenb');
        $('ul#left').append('<li>New data Added</li>')
        $('ul#right').append('<li>Opposite data Added</li>')

    });
    $('button#yellow').click(function () {
        $('body').removeClass();
        // $('body').addClass('yellowb');
    });
    $('ul#left').click(function(){
        //$('li').first().remove();
    })
});