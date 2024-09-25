// 1. DOM 요소(element) 탐색 getElementById()
// h1 태그의 ID 기준으로 텍스트 변경하기

console.log("test");
//1. h1 태그의 ID 기준으로 텍스트 변경하기
const h1E1 = document.getElementById("header");
h1E1.textContent = "새로운 제목입니다.";


//2. 클래스 이름으로 요소탐색
// 클래스가 container인 첫번째 요소의 텍스트를 변경
const containers = document.getElementsByClassName("container")
containers[0].textContent = "첫번째 컨테이너 입니다."
containers[containers.length-1].style.backgroundColor = 'lightblue'

//css 선택자로 요소 탐색
//3. 첫번째 container 요소의 배경색 변경
const firstContainer = document.querySelector(".container")
firstContainer.style.backgroundColor = 'green';

//4. 모든 동일 요소를 탐색
const paragraphs = document.querySelectorAll('p')
// for (i=0; i<paragraphs.length; i++){
//     paragraphs[i].textContent = `문단${i+1}입니다`
// }
paragraphs.forEach((p, index)=>{p.textContent = `문단${index + 1}`})

//5. 부모 요소 탐색
//특정요소(.container p)의 부모 요소에 테두리 추가
const pE1 = document.querySelector('.container p')
const pE1Parent = pE1.parentElement
pE1Parent.style.border = '2px solid red'

//6. 자식 요소 탐색
// container 요소의 첫번째 자식 요소 텍스트 변경
const container2 = document.getElementsByClassName("container2")
const container2Childs = container2[0].children
container2Childs[0].textContent = "첫번째 자식요소"

//7. 태그이름으로 요소 찾기
//마지막 div를 찾아서 배경색을 바꾸기
const divs = document.getElementsByTagName('div')
console.log(divs.length)
divs[divs.length-1].style.backgroundColor = 'skyblue'