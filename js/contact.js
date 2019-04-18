$(document).ready(function () {

    function init() {
        ccFormAction();

        $("#ccform").submit(function (e) {
            e.preventDefault();
        });

    }
    init();



    function ccFormAction() {
        $("#ccbtn").click(function () {
            console.log("teste");
            


        })

    }





});