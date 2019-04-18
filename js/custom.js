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
            description: "Tanzania",
            price: 4000
        },
        {
            description: "Kenya",
            price: 5000
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
            description: "5 days, 4 nights",
            price: 40
        },
        {
            description: "9 days, 8 nights",
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


    $("#step2").on("click", function (event) {
        customPackage = {
            country: $("#menu-country").val(),
            flight: $("#menu-flight").val(),
            stay: $("#menu-stay").val(),
            food: $("#menu-food").val()
        }
        persist();
        event.preventDefault();
    })

    function persist() {
        destination.forEach(element => {
            if(element.description === customPackage.country){
                price = element.price;
                console.log(element.price);
            }
        })

        flight_type_custom.forEach(element => {
            if (element.description === customPackage.flight) {
                price += element.price;
                console.log("1st element" + element.price);
            }
        });
        days_available.forEach(element => {
            if (element.description === customPackage.stay){
                price += element.price;
                console.log("elemenet" + element.price);
                console.log("total" + price);
            }
        })
        food_type_custom.forEach(element => {
            if (element.description === customPackage.food){
                price += element.price;
                console.log(price);
            }
        })
        $(".itineraryChoice").append("<p><b>Total cost = € " + price + ",00</b></p>");
    }




});