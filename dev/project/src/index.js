// 1. root 요소 가져오기
const root = document.getElementById('root')

const inputEl = document.createElement('input')
inputEl.id = 'add-text';

const btnEl = document.createElement('button')
btnEl.id = 'add=button';
btnEl.textContent = "추가";

const container = document.createElement('div')
container.className = "container";

const pEl = document.createElement('p')
pEl.textContent="메모 목록"

const ulEl = document.createElement('ul')
ulEl.id = "memo-list"

container.appendChild(pEl);
container.appendChild(ulEl);

root.appendChild(inputEl);
root.appendChild(btnEl);
root.appendChild(container);

function addMemo() {
    const memoText = inputEl.value;

    const li = document.createElement('li')

    const memoContainer = document.createElement('div')
    const pMemo = document.createElement('p')
    pMemo.textContent = memoText
    const btnMemo = document.createElement('button')
    btnMemo.textContent = '삭제'
    btnMemo.addEventListener("click", delMemo)
    
    memoContainer.appendChild(pMemo);
    memoContainer.appendChild(btnMemo);

    li.appendChild(memoContainer)

    ulEl.appendChild(li);
}
function delMemo(event) {
    const btn = event.target;
    const li = btn.closest('li');
    if (li) {
        ulEl.removeChild(li);
    }
}

btnEl.addEventListener('click', addMemo)