let billAmount = 0, tipPercent = 0, numberOfPeople = 0, prevTipButton = null;

function calculate() {  
    if(billAmount == 0 || numberOfPeople == 0 ||
        billAmount == undefined || tipPercent == undefined || numberOfPeople == undefined ||
        Number.isNaN(billAmount) || Number.isNaN(tipPercent) || Number.isNaN(numberOfPeople)) {
    document.getElementById("tip-amount").innerText = "$0.00";
    document.getElementById("bill-amount").innerText = "$0.00";
    document.getElementById("reset").style.backgroundColor = "hsl(186, 14%, 43%)";
    }     
    else {
    document.getElementById("tip-amount").innerText = "$"+((tipPercent / 100 * billAmount) / numberOfPeople).toFixed(2);
    document.getElementById("bill-amount").innerText = "$"+((billAmount + (tipPercent / 100 * billAmount)) / numberOfPeople).toFixed(2);
    document.getElementById("reset").style.backgroundColor = "hsl(172, 67%, 45%)";
    }      
}

document.getElementById("bill").oninput = (e) => {
    billAmount = parseFloat(e.target.value);
    calculate();
};

let tipPercentButtons = document.getElementsByClassName("tip-percent");
for(let i = 0; i < tipPercentButtons.length; i++) {
    tipPercentButtons[i].onclick = (e) => {
    tipPercentButtons[i].style.backgroundColor = "hsl(172, 67%, 45%)";
    tipPercentButtons[i].style.color = "hsl(183, 100%, 15%)"; 
    if (prevTipButton != null) {
        prevTipButton.style.backgroundColor = "hsl(183, 100%, 15%)";
        prevTipButton.style.color = "hsl(189, 41%, 97%)";
    }
    prevTipButton = tipPercentButtons[i];
    tipPercent = parseInt(e.target.value);
    calculate();
    };
}

document.getElementById("tip-x").onfocus = (e) => {
    if (prevTipButton != null) {
    prevTipButton.style.backgroundColor = "hsl(183, 100%, 15%)";
    prevTipButton.style.color = "hsl(189, 41%, 97%)";
    }
    prevTipButton = null;
}

document.getElementById("tip-x").oninput = (e) => {
    tipPercent = parseInt(e.target.value);
    calculate();
}

document.getElementById("no-of-ppl").oninput = (e) => {
    numberOfPeople = parseInt(e.target.value);
    if (numberOfPeople == 0) {
    e.target.style.outlineColor = "red";
    document.getElementById("validation").style.visibility = "visible";
    }
    else {
    e.target.style.outlineColor = "hsl(172, 67%, 45%)";
    document.getElementById("validation").style.visibility = "hidden";
    }
    calculate();
};

document.getElementById("reset").onclick = (e) => {
    document.getElementById("form").reset();
    if (prevTipButton != null) {
        prevTipButton.style.backgroundColor = "hsl(183, 100%, 15%)";
        prevTipButton.style.color = "hsl(189, 41%, 97%)";
    }
    billAmount = 0;
    tipPercent = 0;
    numberOfPeople = 0;
    prevTipButton = null;
    calculate();
};