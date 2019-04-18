$(document).ready(function () {
    var accommodation_type_custom = [
        {
            description: "Tent",
            price: 20
        },
        {
            description: "Small Lodge",
            price: 49
        },
        {
            description: "Big Ass Lodge",
            price: 100
        }
    ];

    var destination = [
        {
            description: "Tanzania"

        },
        {
            description: "Kenya"

        }
    ]
    var safari_custom_name = "Hakuna Batata Safari";

    var food_type_custom = [
        {
            description: "Bugs",
            price: 0
        },
        {
            description: "All you can eat buffet",
            price: 100
        },
        {
            description: "Vegan",
            price: 0
        },
        {
            description: "Sushi",
            price: 80
        }
    ];

    var flight_type_custom = [
        {
            description: "Amazing Low Cost, no space for legs",
            price: 20
        },
        {
            description: "First Class",
            price: 150
        },
        {
            description: "Choach",
            price: 50
        }
    ];
    var custom_kit = [
        {
            description: "Shovel",
            price: 25
        },
        {
            description: "Bug repellent",
            price: 10
        },
        {
            description: "Protein bar",
            price: 15
        },
        {
            description: "Bottle of water",
            price: 40
        },
        {
            description: "A Roll of toilet paper",
            price: 35
        },
        {
            description: "Free booze",
            price: 80
        },
        {
            description: "Pool",
            price: 70
        },
        {
            description: "Spa",
            price: 75
        },
        {
            description: "Laundry service",
            price: 60
        },
        {
            description: "WI_FI",
            price: 75
        },
        {
            description: "24h security",
            price: 85
        },
        {
            description: "Artisinal booby traps",
            price: 30
        },
        {
            description: "Over 9000 rolls of toilet paper",
            price: 50
        },
        {
            description: "Transfers",
            price: 60
        }

    ];
    var days_available = [
        {
            description: "6 days, 5 nights",
            price: 40
        },
        {
            description: "11 days, 10 nights",
            price: 80
        }
    ];



    var pack_custom = {
        destination: destination,
        name: safari_custom_name,
        days: days_available,
        accommodation: accommodation_type_custom,
        food: food_type_custom,
        flight: flight_type_custom,
        //itinerary: premium_itinerary_tanzania,
        kit: custom_kit,
        price: ""
    }

    var customPackage = {};
    var price;
    

    $("#step2").on("click", function(event) {
        customPackage = {
            country: $("#menu-country").val(),
            flight: $("#menu-flight").val(),
            stay: $("#menu-stay").val(),
            food: $("#menu-food").val()
        }
        event.preventDefault();
        console.log(customPackage);
    }) 

    flight_type_custom.forEach(element => {
        console.log("description" + element.description);
        console.log("flight:" + customPackage.flight);
        if(element.description === customPackage.flight){
            console.log("teste2");
        }
    });
    if(customPackage.flight === flight_type_custom.description){
        console.log("teste");
        price = flight_type_custom.price;
        console.log(flight_type_custom[0].price);
    }



    /*localStorage.setItem("custom_package", JSON.stringify(customPackage));
    var custom = JSON.parse(localStorage.getItem("custom_package"));
    console.log("object" + custom.flight);*/


    /*flight_type_custom.forEach(element => {

        console.log(customPackage.flight);
        console.log(element.description);
        if (element.description === customPackage.flight){
            console.log(element.description);
        }
    });*/


    


});