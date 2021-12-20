const images = [
    "heals_clouds_woods.jpg",
    "leeplay_heals_car.jpg",
    "room_lights.jpg",
    "sea_sky_cloud.jpg",
    "sky_clouds.jpg",
    "snoopy_friends.png",
    "stars_night_woods_winter.jpg",
    "leeplay_benithings.jpg",
    "leeplay_fall_tree_park.jpg",
    "leeplay_Firenze.jpg",
    "leeplay_good_night.jpg",
    "leeplay_night_city_river.jpg",
    "leeplay_one_person.jpg",
    "leeplay_paris_night_clouds.jpg",
]

const choosenImage = images[Math.floor(Math.random() * images.length)]


const bgImage = document.createElement("img");
bgImage.src = `img/${choosenImage}`

document.body.appendChild(bgImage);
console.log(bgImage.src)