window.onload = () => {
    const equationBody = {
        num1: "",
        num2: "",
        operation: "",
    }
    const equation = document.querySelector("#equation");
    const total = document.querySelector("#total");
    const clearButton = document.querySelector("#clear");
    const deleteButton = document.querySelector("#delete");
    const numbers = document.querySelectorAll(".number");
    const operators = document.querySelectorAll(".operator");
    const dot = document.querySelector(".dot");
    const equals = document.querySelector("#equals");

    const add = (a, b) => {
        equationBody.num1 = `${a + b}`;
        if(equationBody.num1.length > 13) equationBody.num1 = equationBody.num1.slice(0, 13);
        equationBody.operation = "";
        equationBody.num2 = "";
        printEquation();
        printTotal();
    }
    const subtract = (a, b) => {
        equationBody.num1 = `${a - b}`;
        if(equationBody.num1.length > 13) equationBody.num1 = equationBody.num1.slice(0, 13);
        equationBody.operation = "";
        equationBody.num2 = "";
        printEquation();
        printTotal();
    }
    const multiply = (a, b) => {
        equationBody.num1 = `${a * b}`;
        if(equationBody.num1.length > 13) equationBody.num1 = equationBody.num1.slice(0, 13);
        equationBody.operation = "";
        equationBody.num2 = "";
        printEquation();
        printTotal();
        }
    const divide = (a, b) => {
        equationBody.num1 = `${a / b}`;
        if(equationBody.num1.length > 13) equationBody.num1 = equationBody.num1.slice(0, 13);
        equationBody.operation = "";
        equationBody.num2 = "";
        printEquation();
        printTotal();
        }

    const calculate = () => {
        if(equationBody.operation === "÷" && equationBody.num2 === "0") {
            alert("Oh, what's happening? My code is desintegrating! Noooooooo!");
            alert("Hahaha, just kidding");
        clear();
        }
        if(equationBody.num1 && equationBody.operation && equationBody.num2 && Number(equationBody.num2) !== 0){
            switch(equationBody.operation){
                case "+":
                    add(Number(equationBody.num1), Number(equationBody.num2));
                    break;
                case "-":
                    subtract(Number(equationBody.num1), Number(equationBody.num2));
                    break;
                case "×":
                    multiply(Number(equationBody.num1), Number(equationBody.num2));
                    break;
                case "÷":
                    divide(Number(equationBody.num1), Number(equationBody.num2));
                    break;
            }
    }
    }
    
    const deleteThis = () => {
        if (!equationBody.num1) {
            printEquation();
            printTotal();
        } else if (equationBody.num2) {
            equationBody.num2 = equationBody.num2.slice(0, -1);
            printEquation();
            printTotal();
        } else if (equationBody.operation) {
            equationBody.operation = "";
            printEquation();
            printTotal();
        } else {
            equationBody.num1 = equationBody.num1.slice(0, -1);
            printEquation();
            printTotal();
        }
    }
    
    const clear = () => {
        equationBody.num1 = "";
        equationBody.operation = "";
        equationBody.num2 = "";
        printEquation();
        printTotal();
    }

    const printEquation = function() {
        if (!equationBody.num1) equation.textContent = "";
        else if(equationBody.num2) equation.textContent = equationBody.num2;
        else if(equationBody.num1) equation.textContent = equationBody.num1;
    }

    const printTotal = function() {
        if(!equationBody.num1) total.textContent = "";
        else if(equationBody.num2) total.textContent = `${equationBody.num1} ${equationBody.operation} ${equationBody.num2}`;
        else if(equationBody.operation) total.textContent = `${equationBody.num1} ${equationBody.operation}`;
        else if(equationBody.num1) total.textContent = equationBody.num1;
    }

    const selectOperator = function() {
        if (equationBody.num1 && equationBody.operation && equationBody.num2) {
            calculate();
        }
        switch (this.id) {
            case "addition":
                equationBody.operation = "+";
                break;
            case "subtraction":
                equationBody.operation = "-";
                break;
            case "multiplication":
                equationBody.operation = "×";
                break;
            case "division":
                equationBody.operation = "÷";
                break;
        }
        printEquation();
        printTotal();
    }

    clearButton.addEventListener("click", clear)
    deleteButton.addEventListener("click", deleteThis)


    numbers.forEach(button => button.addEventListener("click", () => {
        if(equationBody.operation && equationBody.num2.length <= 13) equationBody.num2 += button.id;
        else if(equationBody.num1.length <= 13 && !equationBody.operation) equationBody.num1 += button.id;
        printEquation();
        printTotal();
    }));

    operators.forEach(button => button.addEventListener("click", selectOperator));

    dot.addEventListener("click", () => {
        if (equationBody.operation) {
            if(!equationBody.num2) {
                equationBody.num2 = "0."
            } else if (!equationBody.num2.includes(".")) {
                equationBody.num2 += ".";
            } 
        } else {
            if(!equationBody.num1){
                equationBody.num1 = "0."
            } else if(!equationBody.num1.includes(".")) {
                equationBody.num1 += ".";
            }
        }
        printEquation();
        printTotal();
    });
    equals.addEventListener("click", calculate);
}