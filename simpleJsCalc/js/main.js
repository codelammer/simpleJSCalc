function $value(el){
    return document.getElementById(el).value;
}

function $(el){
    return document.getElementById(el);
}
const display = $('displayBox');




const input1 = $value('inputItem1');
const input2 = $value('inputItem2');
const input3 = $value('inputItem3');
const input4 = $value('inputItem4');
const input5 = $value('inputItem5');
const input6 = $value('inputItem6');
const input7 = $value('inputItem7');
const input8 = $value('inputItem8');
const input9 = $value('inputItem9');
const input10 = $value('inputItem10');
const formCalc = $('formCalc');
const answerDiv = $('answerDiv'); 
const clearAll = $('clearAll'); 





clearAll.addEventListener('click', function(){
    display.value = "";
    answerDiv.innerHTML = "";
});






function evaluateString() {
    if (display.value != "") {
        var answer = eval (display.value);
        answerDiv.innerHTML = Math.round( answer * 10000 + Number.EPSILON ) / 10000;        
    }
}

function backSpace() {
    if (display.value != "") {
        var ansVal = $value('displayBox');
        //console.log (display.value.length);
        display.value = "";
        for (var i=0; i<ansVal.length; i++){
            if (i<ansVal.length-1) {
               display.value += ansVal[i];
            }
        }
        //console.log (ansVal[ansVal.length-1]);
    }
}
formCalc.onsubmit = function(event){
    event.preventDefault();
    evaluateString();
}

function appendString(valueArg) {
    if (display.value == "") {
        display.value = valueArg;
    }else{
        display.value += valueArg;
    }
}
