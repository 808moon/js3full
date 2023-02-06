/*let calcSalary=document.querySelector("button.click")
calcSalary.addEventListener("click",function(){
    let fullName = document.querySelector("input[name=fullName]").value
    let tax = Number(document.querySelector("input[name=tax]").value)/100
    let perHour = Number(document.querySelector("input[name=perHour]").value)
    let degree = document.querySelector("select[name=degree").value
    let salaryPure
    let taxSalary
    let salary
    if(degree==="phd"){
        salaryPure=perHour*100000
        taxSalary=(perHour*100000)*tax
        salary=salaryPure-taxSalary
    }else if(degree==="master"){
        salaryPure=perHour*80000
        taxSalary=(perHour*80000)*tax
        salary=salaryPure-taxSalary
    }else if(degree==="bachelor"){
        salaryPure=perHour*50000
        taxSalary=(perHour*50000)*tax
        salary=salaryPure-taxSalary
    }else if(degree==="hidiploma"){
        salaryPure=perHour*40000
        taxSalary=(perHour*40000)*tax
        salary=salaryPure-taxSalary
    }else{
        salaryPure=perHour*30000
        taxSalary=(perHour*30000)*tax
        salary=salaryPure-taxSalary
    }
    let root=document.querySelector("div#root")
    root.innerHTML=`<h2>fullName :${fullName}<br/>salary :${salary}<br/>tax :${taxSalary}<br/>salaryPure :${salaryPure}</h2>`
})

let x=Number(prompt("x..!"))
switch(x){
    case 1:{
        console.log("shanbe");
        break
    }
    case 2:{
        console.log("1-shanbe");
        break

    }
    case 3:{
        console.log("2-shanbe");
        break

    }
    case 4:{
        console.log("3-shanbe");
        break

    }
    case 5:{
        console.log("4-shanbe");
        break

    }
    case 6:{
        console.log("5-shanbe");
        break

    }
    default:{
        console.log("nothings")
    }
}

let x=Number(prompt("x :"))
let y=Number(prompt("y :"))
let op =prompt("operand :")
switch(op){
    case "+":{
        console.log(x+y);
        break;
    }
    case "-":{
        console.log(x-y);
        break;
    }
    case "*":{
        console.log(x*y);
        break;
    }
    case "/" :{
        console.log(x/y);
        break;
    }
    default:{
        console.log("wrong...!!");
    }
}
let x=10;
let y=11;
let result=x>y>z?"x more than y":"y more than x"
console.log(result);


//ternary operator:
let x=10;
let y=11;
let result=x>y??""
console.log(result);

//ternary operator:
let x=10;
let y=null;
let result=x>y??"";
console.log(result);

for(let i=1;i<=10;i++){
    console.log("hi");
}


for(let i=1;i<=10;i+=2){
    console.log("hi");
}


for(let i=1;i<=10;i+=3){
    console.log("hi");
}


for(let i =1;i<=20;++i){
    if(i%2===0){
        console.log(`even:${i}`);
    }else{
        console.log(`odd :${i}`);
    }
}

let x =Number(prompt("x :"))
for(let i=1;i<=x;++i){
   if(i%2===0){
    document.write(`<div class="even">${i}</div>`)
   }else{
    document.write(`<div class="odd">${i}</div>`)
}
}

let x =Number(prompt("x :"))
for(let i=1;i<=x;++i){
   if(i%3===0){
    document.write(`<div class="even">${i}</div>`)
   }else{
    document.write(`<div class="odd">${i}</div>`)
}
}


let x =Number(prompt("x :"))
for(let i=1;i<=x;++i){
   if(i%4===0){
    document.write(`<div class="even">${i}</div>`)
   }else{
    document.write(`<div class="odd">${i}</div>`)
}
}


let x =Number(prompt("x :"))
for(let i=1;i<=x;++i){
   if(i%25===0){
    document.write(`<div class="even">${i}</div>`)
   }else{
    document.write(`<div class="odd">${i}</div>`)
}
}


let x =Number(prompt("x :"))
for(let i=1;i<=x;++i){
   if(i%6===0){
    document.write(`<div class="even">${i}</div>`)
   }else{
    document.write(`<div class="odd">${i}</div>`)
}
}


let x =Number(prompt("x :"))
for(let i=1;i<=x;++i){
   if(i%7===0){
    document.write(`<div class="even">${i}</div>`)
   }else{
    document.write(`<div class="odd">${i}</div>`)
}
}


let x =Number(prompt("x :"))
for(let i=1;i<=x;++i){
   if(i%8===0){
    document.write(`<div class="even">${i}</div>`)
   }else{
    document.write(`<div class="odd">${i}</div>`)
}
}


let x =Number(prompt("x :"))
for(let i=1;i<=x;++i){
   if(i%9===0){
    document.write(`<div class="even">${i}</div>`)
   }else{
    document.write(`<div class="odd">${i}</div>`)
}
}


let x =Number(prompt("x :"))
for(let i=1;i<=x;++i){
   if(i%10===0){
    document.write(`<div class="even">${i}</div>`)
   }else{
    document.write(`<div class="odd">${i}</div>`)
}
}
let x=+prompt("x :")
let s=0
for(let i=x;i>=1;i--){
    s+=i
} console.log(s);

let fullName=prompt("Enter your fullName :")
let countCourse=+prompt("Enter your countCourse :")
let s=0
let m=0
for(let i=1;i<=countCourse;i++){
    let points=+prompt("Enter your points :")
    let mul=+prompt("Enter your multiple :")
    s+=points*mul
    m+=mul
}console.log(`fullName :${fullName}\nAverage :${s/m}`);


let fullName=prompt("Enter your fullName :")
let countCourse=+prompt("Enter your countCourse :")
let s=0
let m=0
let i=1
while(i<=countCourse){
    let points=+prompt("Enter your points :")
    let mul=+prompt("Enter your multiple :")
    s+=points*mul
    m+=mul
    i++
}console.log(`fullName :${fullName}\nAverage :${s/m}`);


//infinite loop:
for(;;){
    let fullName=prompt("fullName :")
    console.log(fullName);
}

let i=1
for(;;){
    let fullName=prompt("fullName :")
    console.log(fullName);
    if (i===5) {
        break;
    }
    i++
}
console.log("Hello World!");


let x=+prompt("x :")
for(let i=2;i<x;++i){
    if(x%i===0){
        console.log(`not prime: ${x}`);
    }else{
        console.log(`prime: ${x}`);
    }
}


let x=+prompt("x :")
let flag=0
for(let i=1;i<=x;++i){
    if(x%i===0){
        flag++
        console.log(i);
    }
}
console.log("*********************************");
if(flag===2){
    console.log(`prime: ${x}`);
}else{
    console.log(`not prime: ${x}`);
}*/


let x=+prompt("x :")
let flag=0
let i=1
while(i<=x){
    if(x%i===0){
        flag++
        console.log(i);
    }
    ++i
}
console.log("*********************************");
if(flag===2){
    console.log(`prime: ${x}`);
}else{
    console.log(`not prime: ${x}`);
}