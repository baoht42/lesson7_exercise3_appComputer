
function plus(){
    let num1= +document.getElementById('num1').value;
    let num2= +document.getElementById('num2').value;
    minus= num1 + num2;
    document.getElementById('result').innerText= 'Result is: ' + minus;
}
function subtract(){
    let num1= +document.getElementById('num1').value;
    let num2= +document.getElementById('num2').value;
    sub= num1 - num2;
    document.getElementById('result').innerText= 'Result is: ' + sub;
}
function multiplicate(){
    let num1= +document.getElementById('num1').value;
    let num2= +document.getElementById('num2').value;
    multi= num1 * num2;
    document.getElementById('result').innerText= 'Result is: ' + multi;
}
function division(){
    let num1= +document.getElementById('num1').value;
    let num2= +document.getElementById('num2').value;
    divi= num1 / num2;
    document.getElementById('result').innerText= 'Result is: ' + divi;
}
