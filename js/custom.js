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


    $("#menu-country").on("change", event => {
        var countryChosen = event.target[event.target.selectedIndex].value;
        console.log(countryChosen);
        var teste = destination.filter(element => {
            console.log(element);
            if (countryChosen === element) {
                console.log(element);
                console.log(countryChosen);
                return element;
            }
        })
        console.log(teste);
    })


});