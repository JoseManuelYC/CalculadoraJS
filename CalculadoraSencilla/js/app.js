
//Las coloco como constantes por ser valores que no van a cambiar
const btnNum=document.getElementsByName('data-number');
const btnOp=document.getElementsByName('data-op');
const btnIgual=document.getElementsByName('data-igual')[0];
const btnDel=document.getElementsByName('data-delete')[0];
//Como el resultado si puede cambiar dependiend la operacion, la coloco en una variable
var res=document.getElementById('res');



//Variables para hacer calculos

var opActual='';
var opAnterior='';
var operacion= undefined;




//Agregando los eventos

btnNum.forEach(function(btn){
    btn.addEventListener('click', function(){
        aggnum(btn.innerText);
    })
    
});

btnOp.forEach(function(btn){
    btn.addEventListener('click',function(){
        selOp(btn.innerText);
    })

});

btnIgual.addEventListener('click',function(){
    calc();
    actdisplay();
});

btnDel.addEventListener('click',function(){
    clearScreen();
    actdisplay();
});

//Agregando metodos

function selOp(op){
    if(opActual==='') return;
    if(opAnterior!==''){
        calc();
    }
    operacion=op.toString();
    opAnterior=opActual;
    opActual='';
}

function calc(){
    var calculo;
    const ant=parseFloat(opAnterior);
    const act=parseFloat(opActual);

    if(isNaN(ant)||isNaN(act)) return;
    switch(operacion){
        case '+':
            calculo= ant+act;
            break;
        case '-':
            calculo=ant-act;
            break;
        case 'x':
            calculo=ant*act;
            break;
        case '/':

            calculo=ant/act;   
            break;
        default:
            return;

    }
    opActual=calculo;
    operacion= undefined;
    opAnterior='';
}

function aggnum(num){
    opActual=opActual.toString()+num.toString();
    actdisplay();
}

function clearScreen(){
    opActual='';
    opAnterior='';
    operacion=undefined;

}

function actdisplay(){
    res.value=opActual;
}

clearScreen();