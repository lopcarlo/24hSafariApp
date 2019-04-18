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
        $('.dayList > ul').append('<li><a href="#' + (element.day == 1 ? 'description' : 'day' + (element.day -1)) + '">Day ' + element.day + ' - ' + element.name +'</a></li>')
        if (element.day % 2 === 1) {
            $('#day'+ element.day).append('<div class="dayImage left" style="background-image : url(\'' + element.image +'\')">&nbsp;</div>');
            $('#day'+ element.day).append('<div class="dayDesc right"><h3>'+ element.day +'</h3> </a> <p>' + element.description + '</p>></div>');
            

        } else {
            $('#day'+ element.day).append('<div class="dayImage right" style="background-image : url(\'' + element.image +'\')">&nbsp;</div>');
            $('#day'+ element.day).append('<div class="dayDesc left"> <h3 style="text-align:right;">'+ element.day +'</h3> <p>' + element.description + '</p>></div>');
            
        }
        $('#itinerary').append('<hr>');

    });




});