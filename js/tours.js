$(document).ready(function () {

    console.log('starting tours');
    var currentPack = JSON.parse(localStorage.getItem('pack_basic_tanzania'));
        localStorage.setItem("currentPack", JSON.stringify(currentPack) ); 

        console.log('currentPack: ' + currentPack.name);
    
$('#basicKeniaBtn').on('click', function() {
    var currentPack = JSON.parse(localStorage.getItem('pack_basic_tanzania'));
    localStorage.setItem("currentPack", JSON.stringify(currentPack) ); 
});

});

