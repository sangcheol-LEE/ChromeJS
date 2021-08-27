const quotes = [
  {
    quote: "나는 유능하고 가치있는 사람이다.",
    author: "LEE",
  },
  {
    quote: "나는 나를 진심으로 사랑한다.",
    author: "LEE",
  },
  {
    quote: "나는 온전한 존재이다.",
    author: "LEE",
  },
  {
    quote: "내가 작아질 때 이새끼 또왔네라고 의인화 해서 보내버린다.",
    author: "LEE",
  },
  {
    quote: "지금의 시기가 영원하지 않을 것, 현재에 집중하자.",
    author: "LEE",
  },
  {
    quote: "원하는 것이 되고 원하는 것을 이뤄도 생각처럼 되지 않을 것이다. 현재에 행복하자.",
    author: "LEE",
  },
  {
    quote: "외모가 전부는 아니다 내면을 채우자.",
    author: "LEE",
  },
  {
    quote: "조금 내려놓고, 나 답게 행동하고 편안한 매력을 보여주자.",
    author: "LEE",
  },
  {
    quote: "너무 힘주면서 살지말고 최대한 본인의 모습을 드러내려고 노력하자.",
    author: "LEE",
  },
  {
    quote: "나는 강한 멘탈을 갖고 있다. 포기하지 말자.",
    author: "LEE",
  },

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// Math.random() 을 이용하면 0~1 까지 무작위로 숫자가 나오는데 
// Math.random() * 10 // 곱하기 10을 해주면 0~10 까지 숫자 중 랜덤으로 나온다.

// 하지만 결과 값은 1.096077886 이런식으로 나오는데 우리는 정수만 필요하기 때문에 
// 3가지 메소드를 사용할 수 있다.

// 1. Math.round() => 입력 값을 반올림한 수와 가장 가까운 정수 값을 반환합니다.
// Math.round(1.3) => 1  ,  Math.round(2.6) => 3 , Math.round(5.3) => 5

// 2. Math.ceil() => 소수점 이하를 올림합니다.
// Math.ceil(0.3) => 1 , Math.ceil(4.2) => 5 , Math.ceil(6.7) => 7 

// 3. Math.floor() =>  소수점 이하를 버림합니다.
// Math.floor(3.5) => 3, Math.floor(5.8) => 5, Math.floor(9.2) => 9
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)]; 
// 명언이 추가 되면 값도 추가해줘야 하기 때문에 그 숫자를 일일히 세는게 아니라 배열의 길이만큼 곱해줄 수 있게 length 사용

quote.innerText = todayQuote.quote; // div 안에 있는 첫번째 span에 텍스트로 키quote에 value 입력. 
author.innerText = todayQuote.author;// div 안에 있는 첫번째 span에 텍스트로 키author에 value 입력. 




