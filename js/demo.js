var x = 10; //Number String Boolean Array Object Function
x = x + 5;
x = x + 5;
x = x + 5;
x = x + 5;
x = x + 5;
x = x + 5;
console.log(x);
var x = "world!";
console.log(x)
var pi = 3.15231;
var y = "Hello world!";
/*
var z = 'Xin chao cac ban';
var k = `Hello everybody`;
var t = "it's me!";
 */
var f = true;// true - false (co-khong)
console.log(pi);
console.log(y);

var tq = 15;
tq = tq +10; //25
tq = tq + "5";//"255"
x = "5" + 10;// 510
y = y + "abc";

var a = 18;
if(a >= 18){
    console.log("Ban duoc phep truy cap");
}else{
    console.log("Rat tiec, ban phai quay tro lai!");
}

/* Quy ước đặt tên biến
1. Không dấu, ko khoảng cách
2. ko ký tự đặc biệt (trừ dấu _ )
3. bắt đầu bằng chữu cái (a1,a2 ...) nhưng 1a 2a thì ko được
4. có phân biệt hoa - thường (x khác X)
5. gợi ý: nên đặt tên theo tính năng sử dụng
*/

var kq = 10;
if(kq >= 10){
    console.log("A");
}else if (kq >= 5){
    console.log("B");
}else if (kq < 5){
    console.log("C");
}else {
    console.log(D);
}

kq++;// kq = kq + 1;
kq--;// kq = kq - 1;
kq+=5;// kq = kq + 5;
kq-=2;// kq = kq - 2;
kq*=3;// kq = kq * 3;
kq/=10;// kq = kq / 10;

//Function
function tinhTong(a,b){
    var c = a + b;
    return c;
}

var h = tinhTong(10,20);

function ktSoLe(a){
    if(a %2 ==1){
        return true;
    }else {
        return false;
    }
}
var f = ktSoLe(17);//true;
var g = ktSoLe(18);//false;