// var  arr = [];
// arr[0] = 9;
// arr[1] = "hello";
// arr[2] = true;

// arr.push(9);
// arr.push("world");
// arr.push("hello");
// arr.push(21);
//
// for (var i = 0; i < arr.length;i++){// duyệt mảng
// //    arr[i]
//     console.log(arr[i]);
// }

//Jackpot
// Sinh ra 6 số ngẫu nhiên từ 1 -> 55:

var rd = [];
while (rd.length < 6){
    // sinh ra 1 so ngau nhien
    var x = parseInt(Math.random()*54+1);
    /*// kiem tra xem da co trong mang rd hay chua
    var f = false;
    for (var i =0;i<rd.length;i++){
        if (x == rd[i]){
            f = true;
        }
    }
    // neu chua co thi them vao mang
    if (f == false){
        rd.push(x);
    }*/
    if (!rd.includes(x)){
        rd.push(x);
    }
}
console.log(rd);
