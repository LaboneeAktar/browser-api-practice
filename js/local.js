/*
let initialValue = 1;
document.getElementById('btn-increase').addEventListener('click', function () {
    const value = document.getElementById('value');
    // console.log(initialValue);
    // value.innerText = initialValue++;

    window.localStorage.setItem('value', value.innerText = initialValue++);
})
*/
let initialValue = 0;
const increaseValue = () => {
    let value = document.getElementById('value');
    value.innerText = initialValue++;
    localStorage.setItem('value', value.innerText);
}

// increaseValue();

const getValueFromLS = () => {
    let saveValue = localStorage.getItem('value');
    let value = {};
    if (saveValue) {
        value = JSON.parse(saveValue);
    }
    return value;
}

const displayValue = () => {
    const storedValue = getValueFromLS();
    value.innerText = storedValue;
}
displayValue();