//This function clear all the values
function clearscreen(){
    document.getElementById(result).values=c;
}
//This function displayee values
function display(value){
    document.getElementById(result).value+=value;
}
//This function evaluates the expression and returns result
function calculate(){
    var p=getElementById(result).values;
    var q=eval(p);
    document.getElementById(result).value=q;
}




