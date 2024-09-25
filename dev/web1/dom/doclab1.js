const h1E1 = document.getElementById("header")
h1E1.textContent = "새로운 DOM 탐색 제목입니다."

const containers = document.getElementsByClassName("container")
containers[0].style.border = '4px solid red'
containers[0].style.backgroundColor = 'lightgray'
containers[1].style.backgroundColor = 'lightgray'

const container1 = document.getElementsByClassName("container")
const container1Childs = container1[0].children
const container2Childs = container1[1].children
container1Childs[0].style.color = "blue"
container1Childs[0].textContent = "변경된 첫 번째 문단입니다."
container1Childs[1].textContent = "이것은 첫 번째 컨테이너의 두 번째 자식입니다."
container1Childs[1].style.color = "green"
container2Childs[0].style.color = "blue"
container2Childs[1].style.color = "green"