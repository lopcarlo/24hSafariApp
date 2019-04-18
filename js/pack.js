$(document).ready(function() {

    var currentPack = JSON.parse(localStorage.getItem('currentPack'));

    console.log(currentPack)
    $('#packName').html('this is:' + currentPack.name);

    $('body').append('<div id="'+ currentPack.id +'Container"></div>');
    $(currentPack.id +"Container").append(); 

    $('#packName').html(currentPack.name);
    $('#packDescriptionText').html(currentPack.description);

    var itenerary = currentPack.itenerary;

    itenerary.forEach(function(element) {
        $('itinerary').append('<div id="day'+ element.id +'"></div>')
    });

});