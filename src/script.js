let type = null;

function select(selected) {
    let repayment = document.getElementById("repayment");
    let interest = document.getElementById("interest");
    let inputs = document.getElementsByClassName("radio_input");
    if (selected == "repayment") {
        type = "repayment";
        repayment.checked = true;
        interest.checked = false;
        inputs[0].classList.add("radio_input_active");
        inputs[1].classList.remove("radio_input_active");
    } else if (selected == "interest") {
        type = "interest";
        repayment.checked = false;
        interest.checked = true;
        inputs[1].classList.add("radio_input_active");
        inputs[0].classList.remove("radio_input_active");
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


/* Input Focus */
[["amount", 0], ["term", 1], ["rate", 2]].forEach(([input, index]) => {
    document.getElementById(input).addEventListener("focus", function() {
        document.getElementsByClassName("input")[index].classList.add("input_focus");
        document.getElementsByClassName("icon_text")[index].classList.add("icon_text_focus");
    });
    
    document.getElementById(input).addEventListener("blur", function() {
        document.getElementsByClassName("input")[index].classList.remove("input_focus");
        document.getElementsByClassName("icon_text")[index].classList.remove("icon_text_focus");
    });
});