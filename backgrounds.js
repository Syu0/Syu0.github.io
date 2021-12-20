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
    "leeplay_night_city_river.jpg",
    "leeplay_one_person.jpg",
    "leeplay_paris_night_clouds.jpg",
]

const choosenImage = images[Math.floor(Math.random() * images.length)]
const imgtag = document.querySelector("#randomBgs")

const pointer =  "img/" + images[Math.floor(Math.random() * images.length)].toString() ;

// 배경이미지 경로
imgtag.src= pointer;
// // 배경이미지 반복안함
// imgtag.style.backgroundRepeat = "no-repeat";
// // 배경이미지 가로폭 브라우저에 맞춤
// imgtag.style.backgroundSize = "cover";
// // 배경이미지 꽉차게,
// imgtag.style.height= "100vh";

