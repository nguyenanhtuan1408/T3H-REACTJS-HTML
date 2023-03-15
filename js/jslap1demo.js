// Sinh ra 6 số ngẫu nhiên từ 1 -> 55:
var x1=0,x2=0,x3=0,x4=0,x5=0,x6=0;
x1 = parseInt(Math.random()*54+1);
while (x2 == x1 || x2 == 0){
    x2 = parseInt(Math.random()*54+1);
}
while (x3 == x2 || x3 == x1 || x3 == 0){
    x3 = parseInt(Math.random()*54+1);
}
while (x4 == x3 || x4 == x2 || x4 == x1 || x4 == 0){
    x4 = parseInt(Math.random()*54+1);
}
while (x5 == x4 || x5 == x3 || x5 == x2 || x5 == x1 || x5 == 0){
    x5 = parseInt(Math.random()*54+1);
}
while (x6 == x5 || x6 == x4 || x6 == x3 || x6 == x2 || x6 == x1 || x6 == 0){
    x6 = parseInt(Math.random()*54+1);
}
var a1=0,a2=0,a3=0,a4=0,a5=0,a6=0;
while (a1 == 0 || a1 > 55 || a1 < 1 || isNaN(a1)){
    a1 = prompt("Chọn số thứ nhất:")
    a1 = parseInt(a1)
}
while (a2 == 0 || a2 > 55 || a2 < 1 || isNaN(a2) || a2 == a1){
    a2 = prompt("Chọn số thứ hai:")
    a2 = parseInt(a2)
}
while (a3 == 0 || a3 > 55 || a3 < 1 || isNaN(a3) || a3 == a2 || a3 == a1){
    a3 = prompt("Chọn số thứ ba:")
    a3 = parseInt(a3)
}
while (a4 == 0 || a4 > 55 || a4 < 1 || isNaN(a4) || a4 == a3 || a4 == a2 || a4 == a1){
    a4 = prompt("Chọn số thứ tư:")
    a4 = parseInt(a4)
}
while (a5 == 0 || a5 > 55 || a5 < 1 || isNaN(a5) || a5 == a4 || a5 == a3 || a5 == a2 || a5 == a1){
    a5 = prompt("Chọn số thứ năm:")
    a5 = parseInt(a5)
while (a6 == 0 || a6 > 55 || a6 < 1 || isNaN(a6) || a6 == a5 || a6 == a4 || a6 == a3 || a6 == a2 || a6 == a1){
    a6 = prompt("Chọn số thứ sáu:")
    a6 = parseInt(a6)
}
var gt = 0;
if (a1 == x1 || a1 == x2 || a1 == x3 || a1 == x4 || a1 == x5 || a1 == x6){
    gt++;
}
if (a2 == x1 || a2 == x2 || a2 == x3 || a2 == x4 || a2 == x5 || a2 == x6){
    gt++;
}
if (a3 == x1 || a3 == x2 || a3 == x3 || a3 == x4 || a3 == x5 || a3 == x6){
    gt++;
}
if (a4 == x1 || a4 == x2 || a4 == x3 || a4 == x4 || a4 == x5 || a4 == x6){
    gt++;
}
if (a5 == x1 || a5 == x2 || a5 == x3 || a5 == x4 || a5 == x5 || a5 == x6){
    gt++;
}
if (a6 == x1 || a6 == x2 || a6 == x3 || a6 == x4 || a6 == x5 || a6 == x6){
    gt++;
}

if (gt == 6){
//jackpoy}
}else if (gt == 5){
//giai 5 so}
} else if (gt == 4){
//giai 4 so}
}else if (gt == 3){
//giai 3 so
}else {
//chuc may man lan sau
}