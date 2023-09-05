/* globale console, prompt, alert */

let change = document.getElementById("change")

change.onchange = function () {

    let amount = document.getElementById('money').value,

        result = amount * change.value,

        message = document.getElementById('message');

    if (amount === "0") {

        message.innerHTML = " the value must not be zero ";
    }
    else if (amount === "") {

        message.innerHTML = " the value must not be empty ";
    }

    else if (isNaN(amount)) {

        message.innerHTML = " the value must be a number ";
    }
    else if (amount < 0) {

        message.innerHTML = " the value must not be negative ";
    }
    else if (amount > 0 && amount <= 10000) {
        message.innerHTML = amount + " is " + result + " EGP and you will follow Plan 1 ";
    }
    else if (amount > 10000 && amount <= 20000) {
        message.innerHTML = amount + " is " + result + " EGP and you will follow Plan 2 ";
    }
    else if (amount > 20000 && amount <= 100000) {
        message.innerHTML = amount + " is " + result + " EGP and you will follow Plan 3 ";
    }

    else {
        message.innerHTML = " No  Plan For This Amount ";
    }
}





