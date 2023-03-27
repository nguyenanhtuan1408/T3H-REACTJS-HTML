var a1=0,a2=0,a3=0,a4=0,a5=0,a6=0;
while(a1 == 0 || a1>55 || a1<1 || isNaN(a1)){
    a1 = prompt("Chọn số thứ nhất:");
    a1 = parseInt(a1);
}

while(a2 == 0 || a2>55 || a2<1 || isNaN(a2) || a2 == a1){
    a2 = prompt("Chọn số thứ hai:");
    a2 = parseInt(a2);
}

while(a3 == 0 || a3>55 || a3<1 || isNaN(a3) 
    || a3 == a1 || a3 == a2){
    a3 = prompt("Chọn số thứ ba:");
    a3 = parseInt(a3);
}

while(a4 == 0 || a4>55 || a4<1 || isNaN(a4) 
    || a4 == a1 || a4 == a2 || a4 == a3){
    a4 = prompt("Chọn số thứ tư:");
    a4 = parseInt(a4);
}

while(a5 == 0 || a5>55 || a5<1 || isNaN(a5) 
    || a5 == a1 || a5 == a2 || a5 == a3 || a5 == a4){
    a5 = prompt("Chọn số thứ năm:");
    a5 = parseInt(a5);
}

while(a6 == 0 || a6>55 || a6<1 || isNaN(a6) 
    || a6 == a1 || a6 == a2 || a6 == a3 
    || a6 == a4 || a6 == a5){
    a6 = prompt("Chọn số thứ sáu:");
    a6 = parseInt(a6);
}
arr = [
    a1,
    a2,
    a3,
    a4,
    a5,
    a6
];
slc = document.getElementsByClassName("soluachon");
for (var i = 0; i < slc.length; i++){
    slc[i].innerHTML = arr[i];
}
// slc.style.backgroudColor = "red";
somayman = [];
while (somayman.length < 6){
    // t = setInterval(()=> {
    var   j = parseInt(Math.random()*54)+1;
//     if(somayman.length ==6){
//         clearInterval(t);
//     }
// },2000)
    if(!somayman.includes(j)){
        somayman.push(j);
    }
}

smm = document.getElementsByClassName("somayman");
for (var i = 0; i < smm.length; i++){
    smm[i].innerHTML = somayman[i];
}
// console.log(somayman);
var gt = 0;
for (var i = 0; i < somayman.length; i++){
    if(arr[i] == somayman[i]){
        gt++;
    }
};
if(gt == 6){
    alert("Bạn đã trúng thưởng giải jackbot 100.000.000.000");
}else if(gt==5){
    alert("Bạn đã trúng thưởng giải nhất 50.000.000");
}else if(gt == 4){
    alert("Bạn đã trúng thưởng giải nhì 10.000.000");
}else if(gt == 3){
    alert("Bạn đã trúng thưởng giải ba 500.000");
}else{
    alert("Chuc ban may man lan sau")
}
h2 = document.getElementsByTagName("h2");
h2.style.color = "red";
h2.style.backgroundColor = "red";