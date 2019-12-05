let allButtons = document.getElementsByTagName("button");   // gets all buttons in the document 
let equation = "";

for (let i = 0; i < allButtons.length; i++){               // define variable; length of running time or loops (alwatys less than total); counts up (i-- would count back)

    let button = allButtons[i];
    let buttonValue = button.innerHTML;

    if ( buttonValue === "=" ){                             // checks if button value
        button.addEventListener("click", function(){
        let answer = Calculator.calculate(equation);
        Calculator.setDisplayValue(answer);                 // displays answer
    });
}
    else if (buttonValue === "DEL"){                        // checks if button value 
        button.addEventListener("click", function(){
        equation = equation.substr(0, equation.length - 1); // -1 takes off last character as this is the delete function
        Calculator.setDisplayValue(equation);
    });
}
    else if (buttonValue === "AC"){                         // checks if button value
        button.addEventListener("click", function(){
            equation = ""
            Calculator.clearDisplay();                      // clears screen
        });
    }
    else if (buttonValue === "×"){                          // checks if button value 
        button.addEventListener("click", function(){
             equation += "*"
             Calculator.setDisplayValue(equation);          // shows symbol on display screen
        });
        
    }

    else if (buttonValue === "÷"){                          // checks if button value 
        button.addEventListener("click", function(){
            equation += "/"
            Calculator.setDisplayValue(equation);          // shows symbol on display screen
        });
    }

    else if (buttonValue === "+"){
        button.addEventListener("click", function(){
            equation += "+"
            Calculator.setDisplayValue(equation);
        });
    }

    else if (buttonValue === "-"){
        button.addEventListener("click", function(){
            equation += "-"
            Calculator.setDisplayValue(equation);
        });
    }

    
    else{                                                   // otherwise
        button.addEventListener("click", function(){
        equation += buttonValue;
        Calculator.setDisplayValue(equation);
    });
}
    
}






