//Создание переменных
let correct=0;
let mistake=0;
let min=1;
let max=10;

//Проверка ответов
function checkanswer(correctanswer,useranswer){
    if(correctanswer==useranswer){
        correct++;
        alert("Ты прав")
    }
    else{
        mistake++
        alert("Ты не прав")
    }
}

//Функция рандом
function random(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

//Блок с кнопками
document.querySelector(".add").onclick=function(){
    let numA=random(min,max); 
    let numB=random(min,max);
    let answer=numA+numB;
    let useranswer=prompt(numA+"+"+numB+"=","");
    checkanswer(answer,useranswer)
}
document.querySelector(".sub").onclick=function(){
    let numA=random(min,max); 
    let numB=random(min,max);
    let answer=numA-numB;
    let useranswer=prompt(numA+"-"+numB+"=","");
    checkanswer(answer,useranswer)
}
document.querySelector(".mult").onclick=function(){
    let numA=random(min,max); 
    let numB=random(min,max);
    let answer=numA*numB;
    let useranswer=prompt(numA+"*"+numB+"=","");
    checkanswer(answer,useranswer)
}
document.querySelector(".div").onclick=function(){
    let numA=random(min,max); 
    let numB=random(min,max);
    let answer=numA/numB;
    answer=Math.round(answer);
    let useranswer=prompt(numA+"/"+numB+"=","");
    checkanswer(answer,useranswer)
}

//Кнопки статистики
document.querySelector(".stat").onclick=function(){
    alert("Правильных ответов: "+correct+"\n Неправильных ответов: "+mistake);
}
document.querySelector(".reset").onclick=function(){
    correct=0;
    mistake=0;
}


//Выбор уровня
document.querySelector("select").onchange=function(){
    let value=document.querySelector("select").value;
    switch(value){
        case"easy":{
            min=1; max=10;
            break;
        }
        case"middle":{
            min=10; max=100;
            break;
        }
        case"hard":{
            min=100; max=1000;
            break;
        }
    }
}