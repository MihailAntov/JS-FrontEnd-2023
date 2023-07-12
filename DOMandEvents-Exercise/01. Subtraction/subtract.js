function subtract() {
    let a = document.querySelector("#firstNumber").value;
    let b = document.querySelector("#secondNumber").value;
    console.log(a);
    console.log(b);
    let result = document.querySelector("#result");
    result.textContent = Number(a)-Number(b);
}