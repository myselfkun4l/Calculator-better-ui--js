function addvalue(value){
    document.getElementById("result").value += value;
}
function calculate(){
    let res = eval(document.getElementById("result").value);
    document.getElementById("result").value = res;
}
function empty(){
    document.querySelector("#result").value = '';
}
function remvalue(){
    let num= document.getElementById("result").value;
    document.getElementById("result").value = document.getElementById("result").value.slice(0,-1);
}
