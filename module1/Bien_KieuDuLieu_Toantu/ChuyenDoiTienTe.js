function convert() {
    let a = document.getElementById("amount").value;
    let a1 = parseInt(a);
    let vi = document.getElementById("vietnam").value;
    if(vi === "VietNam"){
        let b = a1/25000;
        document.getElementById("demo").innerHTML = "Result:"+ b;
    }
    else {
        let c = a1/107;
        document.getElementById("demo").innerHTML = "Result:"+ c;
    }


}