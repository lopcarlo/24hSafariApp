$(document).ready(function() {

    var currentPack = JSON.parse(localStorage.getItem('currentPack'));

    console.log(currentPack)
    $('#packName').html('this is:' + currentPack.name);

    $('body').append('<div id="'+ currentPack.id +'Container"></div>');
    $(currentPack.id +"Container").append(); 

    $('#packName').html(currentPack.name);
    $('#packDescriptionText').html(currentPack.description);

    console.log(currentPack.itinerary);
    
    var itinerary = currentPack.itinerary;
    console.log(itinerary);
    
    itinerary.forEach(function(element) {
        $('#itinerary').append('<div id="day'+ element.day +'" class="dayContainer"> <p>' + element.description + '</p> </div>');
        console.log(typeof element.image);
        
            $('day'+ element.day).append('<div class="dayImage"><img src="' + element.image + '"></div>');
        

    });




});