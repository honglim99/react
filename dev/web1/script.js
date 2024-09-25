document.addEventListener("DOMContentLoaded", function() {
    // 1. <p> 요소 생성
    var pEle = document.createElement("p");
    // 2. <p> 요소에 텍스트 내용을 추가
    pEle.textContent = "Hello, React!!!";
    // 3. id가 'pop'인 div 요소 가져오기
    var divId = document.getElementById('pop');
    // 4. div 요소에 p 요소를 붙이기
    divId.appendChild(pEle);
    // 1. 새로운 요소 생성
    var pEle2 = document.createElement("i");
    // 2. <p> 요소에 텍스트 내용을 추가
    pEle2.textContent = "Welcome, React!!!";
    // 3. id가 'pop'인 div 요소 가져오기
    var divId = document.getElementById('h1pop');
    // 4. div 요소에 p 요소를 붙이기
    divId.appendChild(pEle2);
})