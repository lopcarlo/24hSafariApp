$(document).ready(function () {

    function populate(responce) {

        responce.forEach(function(country) {
            
            var countryName = country.name;
            var countryDesc = country.countryDesc;

            var body = $('body');

            body.append ('<div id="' + countryName + 'Content" class="content"><div>');



            



        });

    }

    
})