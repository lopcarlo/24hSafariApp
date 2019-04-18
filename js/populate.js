$(document).ready(function () {

    var accommodation_type = ["Tent", "Small Lodge"];
    var safari_name = ["Kuishi Safari", "Mtafiti Safari"];
    var food_type = ["Bugs", "All you can eat buffet"];
    var flight_type = ["Amazing Low Cost, no space for legs", "First Class", "Coach"];
    var survival_kit = ["Shovel", "Bug repellent", "Protein bar", "Bottle of water", "A roll of toilet paper"];
    var premium_kit = ["Free booze", "Pool", "Spa", "Laundry service", "Wi-Fi", "24h security"];

    var basic_itinerary_tanzania = [
        {
            day: 1,
            description: "placeholder day1",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 2,
            description: "placeholder day2",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 3,
            description: "placeholder day3",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 4,
            description: "placeholder day4",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 5,
            description: "placeholder day5",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 6,
            description: "placeholder day6",
            image: "../resources/tours_specific/tours.jpg"
        },
    ];

    var premium_itinerary_tanzania = [
        {
            day: 1,
            description: "placeholder day1",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 2,
            description: "placeholder day2",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 3,
            description: "placeholder day3",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 4,
            description: "placeholder day4",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 5,
            description: "placeholder day5",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 6,
            description: "placeholder day6",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 7,
            description: "placeholder day7",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 8,
            description: "placeholder day8",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 9,
            description: "placeholder day9",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 10,
            description: "placeholder day10",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 11,
            description: "placeholder day11",
            image: "../resources/tours_specific/tours.jpg"
        },
    ];


    var basic_itinerary_quenia = [
        {
            day: 1,
            description: "placeholder day1",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 2,
            description: "placeholder day2",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 3,
            description: "placeholder day3",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 4,
            description: "placeholder day4",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 5,
            description: "placeholder day5",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 6,
            description: "placeholder day6",
            image: "../resources/tours_specific/tours.jpg"
        },
    ];


    var premium_itinerary_quenia = [
        {
            day: 1,
            description: "placeholder day1",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 2,
            description: "placeholder day2",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 3,
            description: "placeholder day3",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 4,
            description: "placeholder day4",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 5,
            description: "placeholder day5",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 6,
            description: "placeholder day6",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 7,
            description: "placeholder day7",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 8,
            description: "placeholder day8",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 9,
            description: "placeholder day9",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 10,
            description: "placeholder day10",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 11,
            description: "placeholder day11",
            image: "../resources/tours_specific/tours.jpg"
        },
    ];



    var pack_basic_tanzania = {
        id: 'tanzaniaBasic',
        description: 'Basic tanzania: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum justo leo, nec feugiat ligula maximus eu. Ut sagittis magna at eros efficitur, sed imperdiet magna scelerisque. Proin auctor justo dolor, quis viverra nibh fermentum ac. Donec at erat et lectus convallis mollis. In ac erat libero. Ut vehicula, lacus at ullamcorper cursus, ipsum turpis consectetur libero, nec dignissim purus justo at dui. Sed laoreet, eros non laoreet hendrerit, libero magna venenatis felis, sed rhoncus diam risus id augue.',
        name: safari_name[0],
        days: 5,
        accommodation: {
            type: accommodation_type[0],
            price: 300
        },
        food: food_type[0],
        flight: {
            type: flight_type[0],
            price: 700
        },
        itinerary: basic_itinerary_tanzania,
        kit: survival_kit,
        price: 1000
    }


    var pack_premium_tanzania = {
        id: 'tanzaniaPremium',
        description: 'Premium tanzania: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum justo leo, nec feugiat ligula maximus eu. Ut sagittis magna at eros efficitur, sed imperdiet magna scelerisque. Proin auctor justo dolor, quis viverra nibh fermentum ac. Donec at erat et lectus convallis mollis. In ac erat libero. Ut vehicula, lacus at ullamcorper cursus, ipsum turpis consectetur libero, nec dignissim purus justo at dui. Sed laoreet, eros non laoreet hendrerit, libero magna venenatis felis, sed rhoncus diam risus id augue.',
        name: safari_name[1],
        days: 11,
        accommodation: {
            type: accommodation_type[1],
            price: 4000
        },
        food: food_type[1],
        flight: {
            type: flight_type[1],
            price: 2000
        },
        itinerary: premium_itinerary_tanzania,
        kit: premium_kit,
        price: 6000
    }


    var pack_basic_quenia = {
        id: 'queniaBasic',
        description: 'Basic quenia: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum justo leo, nec feugiat ligula maximus eu. Ut sagittis magna at eros efficitur, sed imperdiet magna scelerisque. Proin auctor justo dolor, quis viverra nibh fermentum ac. Donec at erat et lectus convallis mollis. In ac erat libero. Ut vehicula, lacus at ullamcorper cursus, ipsum turpis consectetur libero, nec dignissim purus justo at dui. Sed laoreet, eros non laoreet hendrerit, libero magna venenatis felis, sed rhoncus diam risus id augue.',
        name: safari_name[0],
        days: 5,
        accommodation: {
            type: accommodation_type[0],
            price: 300
        },
        food: food_type[0],
        flight: {
            type: flight_type[0],
            price: 700
        },
        itinerary: basic_itinerary_quenia,
        kit: survival_kit,
        price: 1000
    }


    var pack_premium_quenia = {
        id: 'queniaPremium',
        name: safari_name[1],
        description: 'premium Quenia: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum justo leo, nec feugiat ligula maximus eu. Ut sagittis magna at eros efficitur, sed imperdiet magna scelerisque. Proin auctor justo dolor, quis viverra nibh fermentum ac. Donec at erat et lectus convallis mollis. In ac erat libero. Ut vehicula, lacus at ullamcorper cursus, ipsum turpis consectetur libero, nec dignissim purus justo at dui. Sed laoreet, eros non laoreet hendrerit, libero magna venenatis felis, sed rhoncus diam risus id augue.',
        days: 11,
        accommodation: {
            type: accommodation_type[1],
            price: 4000
        },
        food: food_type[1],
        flight: {
            type: flight_type[1],
            price: 2000
        },
        itinerary: premium_itinerary_quenia,
        kit: premium_kit,
        price: 6000
    }


localStorage.setItem("pack_basic_tanzania", JSON.stringify(pack_basic_tanzania));
localStorage.setItem("pack_premium_tanzania", JSON.stringify(pack_premium_tanzania));
localStorage.setItem("pack_basic_quenia", JSON.stringify(pack_basic_quenia));
localStorage.setItem("pack_premium_quenia", JSON.stringify(pack_premium_quenia));
console.log(typeof JSON.stringify(pack_basic_tanzania));

});
