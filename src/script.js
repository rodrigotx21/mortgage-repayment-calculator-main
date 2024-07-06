let type = null;

function select(selected) {
    let repayment = document.getElementById("repayment");
    let interest = document.getElementById("interest");
    if (selected == "repayment") {
        type = "repayment";
        repayment.checked = true;
        interest.checked = false;
    } else if (selected == "interest") {
        type = "interest";
        repayment.checked = false;
        interest.checked = true;
    }
}

function switch_right () {
    document.getElementsByClassName("initial")[0].classList.add("hidden");
    document.getElementsByClassName("results")[0].classList.remove("hidden");
}

function calculate(event) {
    event.preventDefault();

    let amount = parseInt(document.getElementById("amount").value);
    let n = parseInt(document.getElementById("term").value) * 12;
    let r = parseFloat(document.getElementById("rate").value) / 100 / 12;
    
    let repayment;
    
    if (type === 'repayment') {
        repayment = amount * (r * ((1 + r) ** n)) / (((1 + r) ** n) - 1);    
    } else {
        repayment = amount * (parseFloat(document.getElementById("rate").value) / 100) / 12;
    }
    
    document.getElementById("result").innerHTML = repayment.toFixed(2);
    document.getElementById("total").innerHTML = (repayment * n).toFixed(2);
    switch_right();
}