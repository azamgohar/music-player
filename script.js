var arr = [
    {songName: "Baarish - Atif Aslam", url: "./songs/Baarish.mp3", img: "./images/baarish.jpg", duration: "5:35"},
    {songName: "Pehle Bhi Main - Animal", url: "./songs/Pehle Bhi Main.mp3", img: "./images/animal.jpeg", duration: "4:08"},
    {songName: "Kabhi to paas mere aao - Atif Aslam", url: "./songs/Kabhi Toh Paas Mere Aao.mp3", img: "./images/kabhi to paas mere aao.jpg", duration: "4:07"},
    {songName: "Tu Jaane Na - Atif Aslam", url: "./songs/Tu Jaane Na.mp3", img: "./images/tu jaane na.jpeg", duration: "5:37"}
]
var all_songs = document.querySelector("#all_songs");
var poster = document.querySelector("#left");

var forward = document.querySelector("#forward");
var play = document.querySelector("#play");
var backward = document.querySelector("#backward");

var audio = new Audio()
var selectedSong = 0;

var flag = 0;

function handlingSongCards() {
    var clutter = "";
    arr.forEach(function(elem, index) {
        clutter += `<div class="song_card" id="${index}">
                        <div class="part1">
                            <img src="${elem.img}" alt="pehle bhi main | full song">
                            <h2>${elem.songName}</h2>
                        </div>
                        <h6>${elem.duration}</h6>
                    </div>`
    })

    all_songs.innerHTML = clutter;

    audio.src = arr[selectedSong].url
    poster.style.backgroundImage = `url("${arr[selectedSong].img}")`
}

handlingSongCards();

all_songs.addEventListener("click",  function(dets) {
    // play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
    // selectedSong = dets.target.id;
    // handlingSongCards();
    // audio.play();
    var card = dets.target.closest(".song_card");
    if(!card) return;

    selectedSong = card.id;
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
    handlingSongCards();
    audio.play();
    flag = 1;

})


play.addEventListener("click", function() {
    if(flag === 0) {
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
        // handlingSongCards();
        audio.play();
        flag = 1;
    }else {
        play.innerHTML = `<i class="ri-play-mini-fill"></i>`;
        // handlingSongCards();
        audio.pause();
        flag = 0;
    }
})

backward.addEventListener("click", function() {
    if (selectedSong < arr.length - 1) {
        selectedSong++;
        audio.src = arr[selectedSong].url;
        poster.style.backgroundImage = `url("${arr[selectedSong].img}")`;
        audio.play();

        // Reset both button opacities
        forward.style.opacity = 1;
        backward.style.opacity = 1;
    } else {
        backward.style.opacity = 0.4;
    }
});

forward.addEventListener("click", function() {
    if (selectedSong > 0) {
        selectedSong--;
        audio.src = arr[selectedSong].url;
        poster.style.backgroundImage = `url("${arr[selectedSong].img}")`;
        audio.play();

        // Reset both button opacities
        forward.style.opacity = 1;
        backward.style.opacity = 1;
    } else {
        forward.style.opacity = 0.4;
    }
});
