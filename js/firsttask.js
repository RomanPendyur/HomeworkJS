"use strict"


let wievResult = document.querySelector(".wiev_result__style");
let songList = document.querySelector(".song_list__style");

let playList = [
  { author: "LED ZEPPELIN", song: "STAIRWAY TO HEAVEN" },
  { author: "QUEEN", song: "BOHEMIAN RHAPSODY" },
  { author: "LYNYRD SKYNYRD", song: "FREE BIRD" },
  { author: "DEEP PURPLE", song: "SMOKE ON THE WATER" },
  { author: "JIMI HENDRIX", song: "ALL ALONG THE WATCHTOWER" },
  { author: "AC/DC", song: "BACK IN BLACK" },
  { author: "QUEEN", song: "WE WILL ROCK YOU" },
  { author: "METALLICA", song: "ENTER SANDMAN" },
];
wievResult.addEventListener("click", function () {
  for (let i = 0; i < playList.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = `${playList[i].author} - ${playList[i].song}`;
    songList.appendChild(li);
  }
});