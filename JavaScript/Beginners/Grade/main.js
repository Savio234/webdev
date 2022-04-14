var btn = document.querySelector(".button");
btn.addEventListener("click", grading)

    if (document.getElementsByTagName("input").value == "") {
        alert("Please enter some value")
    };

function grading() {

    var math = document.getElementById("math");
    var chem = document.getElementById("chemistry");
    var phy = document.getElementById("physics");
    var comp = document.getElementById("computer");
    var cPro = document.getElementById("cprogramming");


    var total = Number(math.value) + Number(chem.value) + Number(phy.value) + Number(comp.value) + Number(cPro.value);
    var percentage = parseFloat(total/5);


    if (percentage >= 90) {
        document.getElementById("grade").innerText = "A+";
    } else if (percentage >= 70) {
        document.getElementById("grade").innerText = "A";
    } else if (percentage >= 60) {
        document.getElementById("grade").innerText = "B";
    } else if (percentage >= 50) {
        document.getElementById("grade").innerText = "C";
    } else if (percentage >= 45) {
        document.getElementById("grade").innerText = "D";
    } else {
        document.getElementById("grade").innerText = "F";
    }

    

    document.getElementById("percentage").innerText = percentage;
    document.getElementById("total").innerText = total;
}

