$('#toursBtn').on('click', function() {
    var currentPack = JSON.parse(localStorage.getItem('pack_basic_quenia'));
    localStorage.setItem("currentPack", JSON.stringify(currentPack) ); 
});
