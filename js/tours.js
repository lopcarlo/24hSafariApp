$(document).ready(function () {

    console.log('starting tours');
    var currentPack = JSON.parse(localStorage.getItem('pack_basic_tanzania'));
        localStorage.setItem("currentPack", JSON.stringify(currentPack) ); 

        console.log('currentPack: ' + currentPack.name);
    
$('#basicQueniaBtn').on('click', function() {
    var currentPack = JSON.parse(localStorage.getItem('pack_basic_quenia'));
    localStorage.setItem("currentPack", JSON.stringify(currentPack) ); 
});

$('#premiumQueniaBtn').on('click', function() {
    var currentPack = JSON.parse(localStorage.getItem('pack_premium_quenia'));
    localStorage.setItem("currentPack", JSON.stringify(currentPack) ); 
});

$('#basicTanzaniaBtn').on('click', function() {
    var currentPack = JSON.parse(localStorage.getItem('pack_basic_tanzania'));
    localStorage.setItem("currentPack", JSON.stringify(currentPack) ); 
});

$('#premiumTanzaniaBtn').on('click', function() {
    var currentPack = JSON.parse(localStorage.getItem('pack_premium_tanzania'));
    localStorage.setItem("currentPack", JSON.stringify(currentPack) ); 
});


});

