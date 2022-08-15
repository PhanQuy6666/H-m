// khai bao ham
// function <ten ham>(<danh sach tham so>){
    //cach trien khai cua ham
// }
function isDivisibleBy3(number){
    if (number%3==0){
        return true;
    }
    else{
        return false;
    }
}
function demo1(number){   // có return
    return number*number; // trả về kết quả, có thẻ sử dụng trong biểu thức so sánh tính toán, có thể gán dữ liệu
}
function demo2(number){
    alert(number*number);   // không có return
}                           // không trả về kết quả
