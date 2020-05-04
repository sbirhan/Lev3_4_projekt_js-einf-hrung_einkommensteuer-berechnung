var berecehnung2020 = [9408, 14532, 57051, 270500, 972.87, 212.02, 972.79, 8963.74, 17078.74]; //first 4 value are income ranges
var berecehnung2019 = [9168, 14254, 55960, 265326, 980.14, 216.16, 965.58, 8780.90, 16740,68]; //last 5 value are parameters in formulas
var berecehnung2018 = [9000, 13996, 54949, 260532, 997.80, 220.13, 948.49, 8621.75, 16437.70];
var berechnung = berecehnung2020;
var income = 0;
var state2 = 0;
var tax = 0;

function initialization(){
    document.getElementById("lbl-income2").style.visibility = "hidden";
    document.getElementById("income-2").style.visibility = "hidden";
    document.getElementById("income-1").value = "0";
    document.getElementById("income-2").value = "0";
}

function changePerson(){
    if (document.getElementById("numPerson").value == "2"){
        console.log(document.getElementById("numPerson").value);
        document.getElementById("lbl-income2").style.visibility = "visible";
        document.getElementById("income-2").style.visibility = "visible";
        state2 = 1;
    }
    else{
        document.getElementById("lbl-income2").style.visibility = "hidden";
        document.getElementById("income-2").style.visibility = "hidden";
        state2 = 0;
        document.getElementById("income-2").value = "0";
    }
}

function changeYear(){
    switch (document.getElementById("year").value) {
        case "year2020":
            berechnung = berecehnung2020;
            break;
        case "year2019":
            berechnung = berecehnung2019;
            break;
        case "year2018":
            berechnung = berecehnung2018;
            break;
    }
}

function changeIncome() {
    if (document.getElementById("income-1").value == "0" && document.getElementById("income-2").value != "0") {
        document.getElementById("income-1").value = document.getElementById("income-2").value;
        document.getElementById("income-2").value = "0"
    } 
}


function count(){
    var income = (state2 < 1) ? parseInt(document.getElementById("income-1").value):((parseInt(document.getElementById("income-1").value) + parseInt(document.getElementById("income-2").value))/2);
    if (income < berechnung[0]) {
        tax = 0;
    }
    if (income > berechnung[0] && income <= berechnung[1]) {
        tax = ((income - berechnung[0])/10000) * ((((income - berechnung[0])/10000) * berechnung[4]) + 1400);
    }
    if (income > berechnung[1] && income <= berechnung[2]) {
        tax = ((income - berechnung[1])/10000) * ((((income - berechnung[1])/10000) * berechnung[5]) + 2397) + berechnung[6];
    }
    if (income > berechnung[2] && income <= berechnung[3]) {
        tax = 0.42 * income - berechnung[7];
    }
    if (income > berechnung[3]) {
        tax = 0.45 * income - berechnung[8];
    }
    document.getElementById("result").innerHTML = " Tax : " + tax.toFixed(2);
}

