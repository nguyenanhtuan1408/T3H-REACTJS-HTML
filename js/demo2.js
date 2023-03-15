// alert("Cảnh báo,  nơi này cấm người dưới 18 tuổi");//Hiển thị cảnh báo
// var f = confirm("Bạn chắc chắn muốn...?");//Hiển thị xác nhận
// console.log(f);

/**
 * var t = prompt("Vui lòng nhập số tuổi của bạn: ");//hiển thị người dùng nhập,
 * console.log(t);//Trả về dữ liệu chuỗi
 * t = parseInt(t);//Chuyển đổi kiểu dữ liệu từ chuỗi thành số
 * console.log(t);//Trả về dữ liệu số
 */

/**
 * 18 => 18
 * 18a => 18
 * 18a2 => 18
 * a18 => NaN : not a number => isNaN()
 */

/**
 * Yêu cầu người dùng nhập tên và tuổi của mình, nếu từ 18 trở lên thì thông báo: Chào mừng...!
 * Ngược lại thì thông báo: Yêu cầu rời khỏi nơi này!
 */

/**
 * var ten = prompt("Vui lòng nhập tên của bạn: ");
 * var tuoi = prompt("Vui lòng nhập tuổi của bạn: ");
 * tuoi = parseInt(tuoi)
 * if (tuoi >= 18){
 *     alert("Chào mừng " + ten + " đã tham gia với chúng tôi");
 * }else {
 *     alert("Yêu cầu rời khỏi nơi này!");
 * }
 */

// var tuoi = prompt("Vui lòng nhập tuổi của bạn: ");
// tuoi = parseInt(tuoi);
// while(isNaN(tuoi)){ //Vòng lặp
//     tuoi = prompt("Vui lòng cho biết tuổi của bạn");
//     tuoi = parseInt(tuoi);
// }
// alert("Chúc mừng bạn trả lời đúng");


// setTimeout Tạo độ trễ hiển thị cho người dùng
// setTimeout(function (){
//     var tuoi = prompt("Vui lòng nhập tuổi của bạn: ");
//     tuoi = parseInt(tuoi);
//     while(isNaN(tuoi)){ //Vòng lặp
//         tuoi = prompt("Vui lòng cho biết tuổi của bạn");
//         tuoi = parseInt(tuoi);
//     }
//     alert("Chúc mừng bạn trả lời đúng");
// },5000);

// var r = parseInt(Math.random()*100);//Giá trị từ 0->1: 0.314159 ->
// console.log(r);

/**
 * Viết chương trình con số may mắn (Lucky number)
 * Sinh ra ngẫu nhiên 1 số từ 0->99
 * Cho người chơi 5 lượt nhập số
 * Kiểm tra xem có trúng giải thưởng hay ko
 * Trò chơi kết thúc khi hết 5 lượt hoặc người chơi đoán trúng số may mắn
 */

// var r = parseInt(Math.random()*100);
// var slc = 5;
// while (slc >0){
//     slc--;
//     var t = prompt("Vui lòng nhập số may mắn của bạn từ 0->99: ");
//     if (t < 0 ){
//         t = NaN;
//     }else if (t > 99){
//         t = NaN;
//     }
//     while (isNaN(t)){
//         var t =prompt("Vui lòng nhập số từ 1 -> 99: ");
//         t = parseInt(t);
//         if (t<0){
//             t = NaN;
//         }else if (t > 99){
//             t = NaN;
//         }
//     }
//     if (r == t){
//         alert("Chúc mừng bạn đã chiến thắng !");
//         slc = -1;
//     }else{
//         alert("Chúc bạn may mắn vào ngày mai.");
//     }
// }
// if (slc == 0){
//     alert("Rất tiếc, bạn đã hết lượt chơi.");
// }

var min = 10;
var sec = 0;
var t = setInterval(function (){
    console.log(min+":"+sec);
    sec--;
    if (sec < 0){
        sec = 59;
        min--;
    }
    if (min == 0 && sec == 0){
        clearInterval(t);
    }
},1);





