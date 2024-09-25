console.log("test")
// <h1> 요소 생성
const h1E1 = document.createElement("h1")
h1E1.textContent = "타이틀이 추가되었습니다."

// 생성된 요소를 붙이기 : 부모 요소를 탐색
const h1E1Parent = document.getElementById("root");
console.log(h1E1Parent)
h1E1Parent.appendChild(h1E1)

// container 요소의 마지막 위치에 새로운 container 추가
// 1. 요소 생성 <div class="container"><p>영역 4입니다.</p></div>
const divE1 = document.createElement('div')
divE1.className = 'container'

const pE1 = document.createElement('p')
pE1.textContent = "영역 4입니다."

// 생성된 p 요소를 생성된 div요소의 자식 요소를 붙이기
divE1.appendChild(pE1)

// 2. 추가할 위치 찾아 붙이기 -> div container의 마지막 위치 다음에 붙이기
const containers = document.getElementsByClassName('container')
const lastIndex = containers.length-1
// 원하는 요소 뒤에 붙이기
// containers[lastIndex].after(divE1)
// 원하는 요소 앞에 붙이기
containers[0].before(divE1)

// prepend() 예시
const h1E2 = document.createElement("h1")
h1E2.textContent = "타이틀2이 추가되었습니다."
// 생성된 요소를 붙이기 : 부모 요소를 탐색
// const h1E2Parent = document.getElementById("root");
// console.log(h1E2Parent)
h1E1Parent.prepend(h1E2)

// 자식 요소 붙이기
// 1. 맨 뒤에 붙이기 -> 부모요소.appendChild(자식요소)
// 2. 맨 앞에 붙이기 -> 부모요소.prepend(자식요소)

// 형제 요소 붙이기
// 1. 원하는 형제 요소 다음에 붙이기 -> 형제요소.after(붙일 요소)
// 2. 원하는 형제 요소 앞에 붙이기 -> 형제요소.before(붙일 요소)