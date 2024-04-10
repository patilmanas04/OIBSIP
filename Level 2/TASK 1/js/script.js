let string = "";
const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display")

Array.from(buttons).forEach(function(button){
    button.addEventListener('click', function(e){
        if(e.target.innerHTML === "="){
            if(string===""){
                display.value = "";
            }
            else{
                string = eval(string);
                display.value = string;
            }
        }
        else if(e.target.innerHTML === "AC"){
            string = "";
            display.value = string;
        }
        else if(e.target.innerHTML === "C"){
            string = string.slice(0, string.length - 1);
            display.value = string;
        }
        else{
            if(e.target.innerHTML==="X"){
                string = string + "*";
                display.value = string;
            }
            else{
                string = string + e.target.innerHTML;
                display.value = string;
            }
        }
    });
});

const calc = document.querySelector(".calc")
const modeChangeButton = document.querySelector(".app-mode")
const modeImage = document.querySelector(".mode-image")
let darkMode = false
const elementNodesOfCalc = Array.from(calc.childNodes).filter(node => node.nodeType === Node.ELEMENT_NODE)
modeChangeButton.addEventListener("click", (e) => {
    elementNodesOfCalc.forEach((element) => {
        element.classList.toggle("dark-mode")
        calc.classList.toggle("dark-mode")
        darkMode = !darkMode
    })
    modeImage.src = `./images/${(darkMode)?"dark":"light"}.png`
})