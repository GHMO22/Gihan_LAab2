
//  الآلة الحاسبة
let display = document.getElementById("display");

function appendValue(value) {
    display.value = display.value + value;
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    if (display.value == "") {
        return;
    }

    let check = confirm("هل تريد حساب النتيجة؟");

    if (check == true) {
        try {
            let result = eval(display.value);
            display.value = result;
        } catch (error) {
            alert("المعادلة غير صحيحة");
            display.value = "";
        }
    }
     // let result = eval(display.value);
    //        display.value = result;
}

function handleKeyPress(event) {
    if (event.key == "Enter") {
        calculateResult();
    }
}