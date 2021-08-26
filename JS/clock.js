//setInterval(sayHello, 5000); // setInterval 함수는 첫번째 인자로 실행할 함수, 두번째는 몇초마다 작동할건지
//setTimeout(sayHello2, 1000) // 첫번째 인자로 호출하려고 하는 함수, 두번째로는 얼마나 기다릴지 ms 단위로 입력
                            // setInterver 은 정해진 초마다 계속 동작하는 반면 timeout은 지정 초 뒤 한번만 동작

const clock = document.querySelector('h2#clock')

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock() // 함수를 즉시실행해서 지금 현재 시간을 바로 화면에 출력한다.
// 함수를 즉시실행 시켜주지 않으면 초기화면은 00:00:00 인 화면으로 시작할 것이다.
setInterval(getClock, 1000) // 그 이후 1초마다 함수가 계속 동작하면서 시간을 계속 보여준다.

//string을 문자 두 개로 채우는 방법. padStart => 문자열 데이터에서만 사용가능하니 참고할 것
// "1".padStart(2,0)  => "01"
// string이 가져야하는 길이를 2로 설정하고, 길이가 2가 안된다면 앞쪽에 0을 추가해주는 메소드.


