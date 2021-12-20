const quotes = [
    {
        quote: "Failure comes when you stay where you have fallen.",
        author:"Socrates",
    },
    {
        quote: "실패란, 넘어지는 것이 아니라 넘어진 자리에 머무는 것이다.",
        author:"소크라테스",
    },
    {
        quote: "단지 성취에 걸리는 시간 때문에 꿈을 포기하지는 말아라. 어짜피 시간은 지나가게 되어있다.",
        author:"스티븐존슨",
    },
    {
        quote: "Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.",
        author:"Stevens-Johnson",
    },
    {
        quote: "TAKE WHAT YOU NEED.",
        author:"anonymous",
    },
    {
        quote: "The time will pass anyway.",
        author:"anonymous",
    },
    {
        quote: "확실한 건, 확실한 게 아무것도 없다는 사실 하나뿐",
        author:"신경끄기의 기술 책 중에서",
    },
    {
        quote: "사건이 실제로 일어나기 전까지 확실한 건 아무것도 없다. 실제로 일어난 사건조차도 논쟁의 여지가 있다.",
        author:"신경끄기의 기술 책 중에서",
    },
];


const quote = document.querySelector("#quotes span:first-child")
const author = document.querySelector("#quotes span:last-child")

const todaysNumber = Math.floor(Math.random() * quotes.length);
const todaysQuote = quotes[todaysNumber];

console.log(   `today's number ${todaysNumber}`)

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
 