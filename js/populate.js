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
            description: "RANGIRE NATIONAL PARK" +
           "We will pick you up from your hotel at 8am and take you to a very special national park. Tarangire is famous for its diverse landscape with nine different vegetation zones. The park is particularly known for the abundance of Ancient Baobab trees (the largest trees in the continent) which fill the landscape and dwarf the animals next to them. The river of the park is full of wildlife ranging from a large variety of birds to lions, leopards, zebras, giraffes, buffaloes, antelopes and, of course, elephants. In fact, the park has the largest concentration of elephants in the whole country and provides unique chances to observe the interaction between elephant families. The lunch area is fascinating, boasting an observatory with amazing views to the river and wildlife (with good chances of seeing a hunt while having your picnic). In the afternoon we will still do a game drive before continuing to your accommodation",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 2,
            name:"SERENGETI NATIONAL PARK",
            description: "After an early breakfast, depart towards the most famous National park in the World, the Serengeti. The driving itself, although long, is spectacular. You will drive up the crater highlands, making a quick stop at the rim for an out of this world view of Ngorongoro Crater. This will be an unforgettable moment for anyone seeing it for the first time. As you progress well into the Serengeti, you will see why the name means, in local language, 'endless plains'. The park has 6,900 sq. mile (18,000 sq. km) and for most of it, the plains will stretch to the horizon defying your senses and perception of distances. It is the home of the Great Migration and to 2 million wildebeests, hundreds of thousands of zebras and all kinds of antelopes including the abundant impalas and Thomson's gazelles. As for Big Cats and large predators, it's the place of choice to look out for lions, cheetahs, leopards, hyenas, with many television scenes like the famous river crossings having been filmed in this park. Smaller animals like foxes, mongoose, honey badgers, jackals, monkeys, baboons, rock hyrax and African hares, together with more than 500 species of birds, also inhabit this park.",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 3,
            name:"ERENGETI NATIONAL PARK",
            description:"Full day in the Serengeti National Park. We are completely flexible with your preferences and this day will be organized according to your wishes. On every day of the safari, your guide will discuss with you the best timings for you, including the game drives and the wake up time. For example, on this day, you could do a morning game drive, return to the camp for lunch and relaxation and finish with an afternoon game drive, or you could do a full day game drive with picnic lunch.",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 4,
            name:"NGORONGORO CONSERVATION AREA",
            description:"On this day we suggest a very early wake up in order to do an early morning game drive (when the animals are more active) and see one of the best sunrises you'll ever witness. It's really one of the most beautiful experiences to have. After the game drive, we return to the camp for a rewarding brunch and then we'll proceed to Ngorongoro, the 8th wonder of the Natural World. The crater spreads for 102 sq. miles and has 2.000 ft high walls, making it virtually a Noah's ark and inhabiting almost every species of wildlife that is indigenous to East Africa. It's one of the very rare locations in the whole continent where you can witness the black Rhino. The concentration of African wildlife if the greatest in the continent. The crater has a river, several swamps, a soda lake with a great concentration of flamingos, a forest and open plains. It's also famous for its elephants which are the largest in the world and have huge tusks. This is due to the rich mineral content of the volcanic soil and its grasses. Ngorongoro Crater is truly a Wonder of the Natural World.You will reach Ngorongoro in time for a sundowner.",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 5,
            name:"NGORONGORO CRATER - LAKE NATRON",
            description:"We will start the day very early and descend into the crater floor for an incredible morning of wildlife in one of the most stunning places on Earth. After the game drive, transfer to singular Lake Natron (4h) with picnic lunch. Visit to lake and surroundings. ",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 6,
            name:"LAKE NATRON",
            description:"After a wake up call with coffee and cookies, you will take early morning walks to the lake flats to observe flamingos. Located at the base of Africa’s only active volcano (Oldonyo Lengai) and between Ngorongoro Highlands and Serengeti plains, Lake Natron lies in a dry and desolated area also inhabited by Maasai. Untouched, distant, mysterious, this Lake is one of the most alkaline lakes in the world and special shelter to millions of tiny crustaceans, attracting literally thousands of Lesser flamingos. After breakfast, trek to local waterfalls. Beautiful and surrounded by lush vegetation, these waterfalls break the yellow coloured pattern found in the savannah. Transfer to Arusha.",
            image: "../resources/tours_specific/tours.jpg"
        },
    ];

    var premium_itinerary_tanzania = [
        {
            day: 1,
            name:"AKE NAKURU NATIONAL PARK",
            description:"Early morning pick up in Nairobi and then drive to Lake Nakuru National Park, across the equator, where lies the rift valley’s most famous lake. Known all over the world for itsflamingoes, it's alkaline and is recognized as being one of the natural wonders of the world. Lake Nakuru is now a rhino sanctuary, harboring a population of over 40 black and over 60 white rhinos, but the flamingos, of course, have always been the main attraction. At times there may be almost 2 million flamingos in residence, forming a stunningly beautiful deep pink band around the edge ofthe lake shore. Arrival in time for lunch then afternoon game drive. Dinner and overnight at campsite or lodge.",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 2,
            name:"MAASAI MARA NATIONAL RESERVE",
            description:"An early morning drive to Maasai Mara National Reserve. It holds on as one of the few places left on earth where wildlife still lives comparatively undisturbed, in the numbers that once roamed the plains and forests of Africa. As the northern tip of the vast Serengeti ecosystem, the Mara hosts the spectacular seasonal migration of many thousands of Wildebeest, Zebras and attendant predators. Arrive in time for lunch followed by an afternoon game drive. Dinner and overnight at tented camp or lodge.",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 3,
            name:"MAASAI MARA NATIONAL RESERVE",
            description:"One full day in the Maasai Mara with flexible schedule and unlimited mileage. After breakfast, we have a full day game drive with packed lunch provided. The reserve is well known for its black-manned lions as well as its abundant resident wildlife and it’s one of the few places where it's possible to see the Big Five during a morning's game drive. Many of the cheetahs are so tame they seek shelter from the hot sun under one's vehicle and several even climb onto the roof to get better view of prospective prey. For the bird enthusiast, almost 500 species have been recorded: among these, 16 species of eagle, plus many hawks and falcons, 6 species of vultures, 8 species of storks, 4 of bustard (including the Kori bustard, the world's heaviest flying bird), and 9 species of sun birds. Dinner and overnight at campsite or lodge.",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 4,
            name:"FROM MAASAI MARA TO SERENGETI NATIONAL PARK",
            description:"We will initiate the day with an early morning game drive in Maasai Mara while driving out of the National reserve. After border formalities, drive to the Serengeti National Park in Tanzania. It will be a long day of driving but the game drives in and out of the parks can be surprisingly incredible. However, we always recommend to fly from one park to the other so that you can have more time to go on Safari. Alternatively, you can add an extra day to visit Lake Victoria, half way between the two parks. Dinner and overnight at tented camp or lodge.",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 5,
            name:"SERENGETI NATIONAL PARK",
            description:"Two full days in the Serengeti with flexible schedule and unlimited mileage. As you crest the hillside, spread out before you, as far as the eyes can see, is the vast Serengeti. Serengeti mean 'endless plains' in Kiswahili and this 6,900 sq. mile (18,000 sq. km) park is inhabited by more than 2 million large animals including more than a million wildebeest, hundreds of thousands of plains zebras, and Thomsons gazelles. Large predators including lions, cheetahs, and hyenas are drawn to the area by this abundance of prey which migrate throughout the park",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 6,
            name:"SERENGETI NATIONAL PARK",
            description:"Many smaller animals like rock hyrax, bat eared foxes, mongoose, honey badger, jackals, monkeys, baboons and African hares also inhabit the area along with nearly 500 species of birds.On the way into the Serengeti, option to stop at the famous Olduvai Gorge, where Dr. Louis and Mary Leakey made their discovery of the first man that walked the earth. After attending a short lecture describing the archeological digs and geology of the gorge, you'll have time to visit the small museum. Afternoon game drive en-route to campsite.Dinner and overnight at public campsite or private tented camp or lodge.",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 7,
            name:"SERENGETI NP TO NGORONGORO CONSERVATION AREA",
            description:"In the morning, transfer to Ngorongoro, the 8th natural wonder of the world. Stop for a picnic lunch, afternoon descent down to the crater floor for a day of wildlife viewing in one of the most incredible places on Earth. With walls 2,000 ft high and a crater floor that spreads for 102 sq. miles, the crater is a virtual Noah's Ark, inhabited by almost every species of wildlife indigenous to East Africa including the rare black rhino. In fact, the crater has the greatest concentration of wild life in the planet. It contains a river, several swamps, a soda lake that, from the top, looks like steam, full of flamingoes, a forest and open plains. Drive up the steep road out of the crater and transfer toyour accommodation for overnight.",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 8,
            name:"NGORONGORO CRATER TO LAKE MANYARA NATIONAL PARK",
            description:"Depart after breakfast and drive across the Great Rift Valleyto Lake Manyara National Park for a full day game drive. Although only 205 sq. miles in size this enchanting park is noted for its beauty and incredibly lush acacia forest of giant fig and mahogany trees, which are home to troops of baboons and blue monkeys. The park is also home to a large numbers of buffalos, giraffes, elephants, impalas and a Hippo lake, where large numbers of hippos usually gather. Well known for its birds (over 400 different species), Lake Manyara is one of the few places where you'll be able to see the Ground Hornbill and the Crested Eagle. This park has become famous for the the climbing lions and the flamingos in the lake shore. The landscapes of these park are absolutely stunning, very different from the Serengeti for example. The game drives are done along the shore of the lake, providing incredible views of giraffes and buffalos in the foreground with the lake, flamingos and flat plains in the horizon. Great photo opportunities. Dinner and overnight at private tented camp / lodge.",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 9,
            name:"LAKE MANYARA NATIONAL PARK TO AMBOSELI NATIONAL PARK",
            description:"Early morning start and drive to Amboseli National Park, check in at your accommodation and afternoon rest or game drive, as you prefer. Amboseli National Park is situated South of Nairobi, most of the park consisting of a dry ,ancient lake bed and fragile grassland with patches of acacia woodland, while in the southern area there is a number of small rocky volcanic hills. Around the swamp s Ol Okenya, Ol Tukai and Enkongo Narok, the vegetation is lush with yellow barked acacias and phoenix palms. Dinner and overnight at campsite or lodge.",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 10,
            name:"AMBOSELI NATIONAL PARK",
            description:"Early rise for good views of Mount Kilimanjaro before clouds build up over the summit with packed lunch provided. Despite its changing habitat, Amboseli National Park is possibly the best wildlife area in the whole Africa to experience elephants at close range. Left unharassed by poachers, elephants feeding and bathing in the swamps must form the highlights of any Safari. Dinner and overnight at campsite or lodge.",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 11,
            name:"AMBOSELI NATIONAL PARK TO NAIROBI",
            description:"Morning game drive in Amboseli. An optional visit to a Maasai village can be planned also. A visit reveals the singing and dancing that are part of their daily lives and sacred rituals. A glimpse into their homes and social structure is a poignant experience. Early afternoon drive to Nairobi. Transfer to your hotel or the airport.",
            image: "../resources/tours_specific/tours.jpg"
        },
    ];


    var basic_itinerary_quenia = [
        {
            day: 1,
            name:"HELL'S GATE / LAKE NAIVASHA NATIONAL PARK",
            description:"We start our safari by driving to Hell's Gate National Park, which is mainly, comprised of savannah ecosystem harbours a wide variety of wildlife. There are over 100 species of birds in the park, including vultures, Verreaux's Eagles, augur buzzard, and swifts. African buffalo, zebra, eland, hartebeest, Thomson's gazelle, and baboons are also common. Depart in the afternoon to Lake Naivasha which it is the highest and the most beautiful of the Rift Valley lakes. Naivasha is yet another area popular for bird watching (over 400 species have been recorded). It is also a favorite weekend retreat for Nairobi residents, who come here to sail, water ski and fish. There are no crocodiles in the lake as the water is too cold for them, due to altitude but there are a number of hippos. Along the lake shore, vineyards produce grapes for the country's fledging wine industry. Dinner and overnight at campsite or lodge.",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 2,
            name:"LAKE NAKURU NATIONAL PARK",
            description:"An early morning pick up then drive to Lake Nakuru National Park, across the equator, southwards of Bogoria, lies the rift valleys most famous Lake Nakuru. Known all over the world for its flamingos, it's alkaline and is recognised as being one of the natural wonders of the world. Lake Nakuru is now a rhino sanctuary, harbouring a population of over 40 black and over 60 white rhinos, but the flamingoes, of course, have always been the main attraction. At times there may be almost 2 million flamingoes in the residence, forming a stunningly beautiful deep pink band around the edge of the lake shore. Arrive in time for lunch then have an afternoon game drive. Dinner and overnight at campsite or lodge.",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 3,
            name:"MAASAI MARA NATIONAL RESERVE",
            description:"An early morning drive to Masai Mara National Reserve, it holds on as one of the few places left on earth where wildlife still lives comparatively undisturbed, in the numbers that once roamed the plains and forests of Africa. As the northern tip of the vast Serengeti ecosystem, the Mara hosts the spectacular seasonal migration of many thousands of Wildebeest, Zebras and attendant predators. Arrive in time for lunch then have an afternoon game drive. Dinner and overnight at campsite or lodge.",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 4,
            name:"MAASAI MARA NATIONAL RESERVE",
            description:"After breakfast we have a full day dame drive, with packed lunch provided. The reserve is well known for its black-manned lion, as well as its abundant resident wildlife and its one of the few places where it's possible to see the big five during a morning's game drive. Many of the cheetahs are so tame they seek shelter from the hot sun under one's vehicle and several even climb onto the roof to get better view of prospective prey. For the bird enthusiast, almost 500 species have been recorded: among these 16 species of eagle, plus many hawks and falcons, 6 species of vultures, 8 species of storks 4 of bustard (including the Kori bustard, the world's heaviest flying bird), and 9 species of sun birds. Dinner and overnight at campsite or lodge.",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 5,
            name:"MAASAI MARA NATIONAL RESERVE",
            description:"Morning game drive in Mara and depart late in the morning to Nairobi, arriving at about 5pm. Lunch en route. End of our services.",
            image: "../resources/tours_specific/tours.jpg"
        }
    ];


    var premium_itinerary_quenia = [
        {
            day: 1,
            name:"TSAVO WEST NATIONAL PARK",
            description:"We depart by road for Tsavo West National Park. Arrive in time for lunch then an optional afernoon or evening game drive. Tsavo West is the most visited section in Tsavo National Park, ofering many attractions apart from its wildlife. The foremost is the famous Mzima Springs where up to 227.3 million liters of cool crystal clear water flows out of the ground through porous volcanic rocks. The water is believed to originate from Chuyulu Hills, via an underground river. Dinner and overnight at campsite or lodge.",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 2,
            name:"TSAVO WEST NATIONAL PARK",
            description:" After breakfast, we have a full day game drive, packed lunch provided. Other interesting places to visit are the Roaring Rocks, which get their name from the wind that hurtles through them. From here there are wonderful views over Tsavo from the top of a 98m rock face; similar views can be experienced from the poachers lookout. The volcanic Chaimu Crater, less Than 200years old and composed of black coke, is worth visiting and can be climbed if one is intersted. The area is a good place to look out for klipspringer, a small antelope that's as agile as its swahili name mbuzi mawe(mountain goat). In the south west corner of Tsavo West is Lake Jipe, which has the Kenyan-Tanzanian border running through it. Dinner and overnight at campsite or lodge.",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 3,
            name:"AMBOSELI NATIONAL PARK",
            description:"Early Morning start and drive to Amboseli National Park, check in at your accomodation, day spent at leisure. Amboseli National Park is situated due south of Nairobi, Most of the park consist of a dry ,ancient lake bed and fragile grassland with patches of acacia woodland, while in the southern area there is a number of small ,rocky,volcanic hills. Around the swamps Ol Okenya, Ol Tukai and Enkongo Narok, the vegetation is lush with yellow barked acacias and phoenix palms. Dinner and overnight at campsite or lodge.",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 4,
            name:"AMBOSELI NATIONAL PARK",
            description:"Rising early for good views of Mount Kilimanjaro before clouds build up over the summit with packed lunch provided, an Optional visit to a Masai village can be planned after breakfast. A visit reveals the singing and dancing that are part of their daily lives and sacred rituals. A glimpse into their homes and social structure is a poignant experience. Despite its changing habitat, Amboseli National Park is possibly the best wildlife area In the whole of Africa to experience elephants at close range. Left unharassed by poachers, elephants feeding and bathing in the swamps must form the highlights of any Safari. Dinner and overnight at campsite or lodge.",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 5,
            name:"LAKE NAIVASHA",
            description:"An early morning drive to Lake Naivasha, it is the highest and the most beautiful of the Rif Valley lakes. At 1910m (6200f), the water is fresh and the lake is fringed with dense clumps of papyrus (ancient Egyptian once used this to make paper). Kingfishers use the papyrus as a perch, herons hide in it while searching for food. Naivasha is yet another area popular for bird watching (over 400species have been recorded). It is also a favorite weekend retreat for Nairobi residents, who come here to sail, water ski and fish. There are no crocodiles in the lake as the water is too cold for them, due to altitude but there are a number of hippos. Along the lake shore, vineyards produce grapes for the country's fledging wine industry. Dinner and overnight at campsite or lodge.",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 6,
            name:"MAASAI MARA NATIONAL RESERVE",
            description:"An early morning drive to Maasai Mara National Reserve, it holds on as one of the few places left on earth where wildlife still lives comparatively undisturbed, in the numbers that once roamed the plains and forests of Africa. As the northern tip of the vast Serengeti ecosystem, the Mara hosts the spectacular seasonal migration of many thousands of Wildebeest, Zebras and attendant predators. Arrive in time for lunch then have an afternoon game drive. Dinner and overnight at campsite or lodge.",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 7,
            name:"MAASAI MARA NATIONAL RESERVE",
            description:"After breakfast we have a full day dame drive, with packed lunch provided. The reserve is well known for its black-manned lion, as well as its abundant resident wildlife and its one of the few places where it's possible to see the big five during a morning's game drive. Many of the cheetahs are so tame they seek shelter from the hot sun under one's vehicle and several even climb onto the roof to get better view of prospective prey. For the bird enthusiast, almost 500 species have been recorded: among these 16 species of eagle, plus many hawks and falcons, 6 species of vultures, 8 species of storks 4 of bustard (including the Kori bustard, the world's heaviest flying bird), and 9 species of sun birds. Dinner and overnight at campsite or lodge.",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 8,
            name:"LAKE NAKURU",
            description:"An early morning pick up then drive to Lake Nakuru National Park, across the equator, southwards of Bogoria, lies the Rift Valley most famous Lake Nakuru. Known all over the world for its flamingoes, it's alkaline and is recognized as being one of the natural wonders of the world. Lake Nakuru is now a rhino sanctuary, harboring a population of over 40 black and over 60 white rhinos, but the flamingoes, of course, have always been the main attraction. At times there may be almost 2million flamingoes in the residence, forming a stunningly beautiful deep pink band around the edge of the lake shore. Arrive in time for lunch then have an afternoon game drive. Dinner and overnight at campsite or lodge.",
            image: "../resources/tours_specific/tours.jpg"
        },
        {
            day: 9,
            name:"LAKE NAKURU",
            description:"Depart for a morning game drive after breakfast. Depart to Nairobi late in the morning. Lunch en route.",
            image: "../resources/tours_specific/tours.jpg"
        }
    ];



    var pack_basic_tanzania = {
        id: 'tanzaniaBasic',
        description: 'This is a fascinating adventure through some of the most emblematic parks in northern Tanzania, like Serengeti, Tarangire and Ngorongoro, but also including a day at the bizarre Lake Natron.',
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
        description: 'Tanzania in a heart accelerating journey through Nakuru, Masai Mara, Serengeti, Ngorongoro, Manyara and Amboseli.',
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
        description: 'Take the most out of 5 days in Kenya. Explore Lake Naivasha with its famous Hell’s Gate, enjoy Lake Nakuru’s regal birdlife and then have the full safari experience in the Mara National Reserve’s amazing setting.',
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
        description: 'he tour of a lifetime. Immerse yourself in Kenya for 9 days. Begin your journey with the parks of the coast, Tsavo West and Amboseli, with 2 night in each of them. Marvel at the huge elephants under the gazing Kilimanjaro. Take a relaxing break as you go west, and enjoy Lake Naivasha with its flamingos and hippos. Go on to The Great Mara and use those 3 nights to forge memories and images of the Big 5 that will last forever. Why not take a balloon safari? As you go back to Nairobi, stop for a night at the gorgeous Lake Nakuru.',
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
