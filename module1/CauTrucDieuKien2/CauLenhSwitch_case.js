
function soNgayTrongThang() {
    let sothang = document.getElementById("thang").value*1;
    switch (sothang) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 9:
        case 11:
            document.getElementById("demo").innerHTML = "Tháng" + " "+ sothang + " "+"có 31 ngày";
            break;
        case 2:
            document.getElementById("demo").innerHTML = "Tháng" + " "+ sothang +" "+ "có 28 hoặc 29 ngày";
            break;
        case 4:
        case 6:
        case 8:
        case 10:
        case 12:
            document.getElementById("demo").innerHTML = "Tháng" +" "+ sothang+" " +"có 30 ngày";
                  break;
        default:
            document.getElementById("demo").innerHTML = "Vui lòng nhập tháng từ 1 tới 12";

    }

}

