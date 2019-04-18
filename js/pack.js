$(document).ready(function() {

    var currentPack = JSON.parse(localStorage.getItem('currentPack'));

    console.log(currentPack)
    $('#packName').html('this is:' + currentPack.name);

    var container = $('body').append('<div id="'+ currentPack.id +'Container"></div>');
    container.append();

});