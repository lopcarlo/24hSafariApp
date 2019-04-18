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
        $('#itinerary').append('<div id="day'+ element.day +'" class="dayContainer">  </div>');
        console.log(element.description);
        if (element.day % 2 === 1) {
            $('#day'+ element.day).append('<div class="dayImage left"><img src="' + element.image + '"></div>');
            $('#day'+ element.day).append('<div class="dayDesc right"> <p>' + element.description + '</p>></div>');
        } else {
            $('#day'+ element.day).append('<div class="dayImage right"><img src="' + element.image + '"></div>');
            $('#day'+ element.day).append('<div class="dayDesc left"> <p>' + element.description + '</p>></div>');
        }

    });




});