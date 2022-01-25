const colors = [
  "#E0BBE4",
  "#957DAD",
  "#D291BC",
  "#FEC8D8",
  "#FFDFD3",
  "#FF9180",
  " #FFA78C",
  "#FFCB87",
  "#FFE59E",
  "#FFF4B0",
  "#FFFED9"
];
const app = document.querySelector("#ChallangeForm h2");

let stCol = Math.floor(Math.random() * colors.length);
let endCol = Math.floor(Math.random() * colors.length);

while (stCol === endCol) {
    // 중복제거 --
    endCol = Math.floor(Math.random() * colors.length);
  }
app.style.borderRadius=`10px`;
app.style.background = `linear-gradient(to left top,${colors[stCol]}, ${colors[endCol]})`;
app.style.textShadow = `-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black`;

