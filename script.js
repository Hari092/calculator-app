document.addEventListener("DOMContentLoaded", function() {
    const buttons = Array.from(document.querySelectorAll("button"));
    const display = document.querySelector(".display");
    const operators = ["+", "-", "*", "/", "%", "="];
    let output = "";

    buttons.forEach((btn) => { 
        btn.addEventListener("click", (e) => {
            calVal(e.target.dataset.value);
        });
    });

    function calVal(val) {
        // display.focus();
        console.log(val);
        if (val === "=" && output !== "") {
            output = eval(output.replace("%", "/100"));
        } else if (val === "AC") {
            output = "";
        } else if (val === "DEL") {
            output = output.toString().slice(0, -1);
        }else {
            if (output === "" && operators.includes(val)) return;
            output += val;
          }
        display.value = output;
        console.log(output);
    }
    

    console.log(output)
});
