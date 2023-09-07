
let number = parseInt(prompt("Введите цифру:"));

for (let i = 0; i < number; i++) {
    let block = document.createElement('div');
    block.classList.add('block');
    block.textContent = 'Блок ' + (i+1);
    document.body.appendChild(block);
}
