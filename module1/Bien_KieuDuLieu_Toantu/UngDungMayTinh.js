function cong() {
    var a = document.getElementById("sohang1").value;
    var a1 = parseInt(a);
    var b = document.getElementById("sohang2").value;
    var b1 = parseInt(b);
    var c = a1 + b1;
    document.getElementById("demo").innerHTML = "Tổng 2 số là:"+  c;
}
function tru() {
    var a = document.getElementById("sohang1").value;
    var a1 = parseInt(a);
    var b = document.getElementById("sohang2").value;
    var b1 = parseInt(b);
    var d = a1 - b1;
    document.getElementById("demo").innerHTML = "Hiệu 2 số là:"+  d;

}
function nhan() {
    var a = document.getElementById("sohang1").value;
    var a1 = parseInt(a);
    var b = document.getElementById("sohang2").value;
    var b1 = parseInt(b);
    var e = a1 * b1;
    document.getElementById("demo").innerHTML = "Tích 2 số là:"+  e;

}
function chia() {
    var a = document.getElementById("sohang1").value;
    var a1 = parseInt(a);
    var b = document.getElementById("sohang2").value;
    var b1 = parseInt(b);
    var f = a1 / b1;
    document.getElementById("demo").innerHTML = "Thương 2 số là:"+  f;

}