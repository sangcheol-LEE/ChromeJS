const images = [
  "0.jpeg",
  "1.jpeg",
  "2.jpeg",
  "3.JPG"
]

const chosenImage = images[Math.floor(Math.random() * images.length)]; 

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage); // 선택한 요소 안 가장 뒷부분에 자식 요소를 추가합니다. 
// appendChild 는 body에 html을 추가합니다.
// prepend() 는 선택한 요소 안 가장 위에 자식요소를 추가합니다.
