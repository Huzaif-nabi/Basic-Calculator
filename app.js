let string = "";
let memory = 0;
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        try{
            if(e.target.innerHTML == '='){
                string = eval(string);
                document.querySelector('input').value = string;
            }
            else if(e.target.innerHTML == 'C'){
                string = "";
                document.querySelector('input').value = string;
            }
            else if (e.target.innerHTML === 'M+') {
                try {
                    memory += parseFloat(string || "0");
                    console.log(`Memory updated (M+): ${memory}`);
                } catch (error) {
                    console.error("Invalid input for M+: ", error.message);
                }
            } else if (e.target.innerHTML === 'M-') {
                try {
                    memory -= parseFloat(string || "0"); 
                    console.log(`Memory updated (M-): ${memory}`);
                } catch (error) {
                    console.error("Invalid input for M-: ", error.message);
                }
            }
            else if(e.target.innerHTML == 'DEL'){
                string = string.slice(0, -1);
                document.querySelector('input').value = string;
            }
            else if(e.target.innerHTML == 'MR'){
                string = memory.toString();
                document.querySelector('input').value = string;
            }
            else{
                console.log(e.target);
                string = string + e.target.innerHTML;
                document.querySelector('input').value = string;
            }
        }
        catch(error){
            console.error("An error occurred:", error.message);
            document.querySelector('input').value = "Error!";
            string = "";
        }
        });
});

let body = document.querySelector('body');
body.addEventListener('keydown', (e)=>{
    const validKeys = "0123456789+-*/.%()";
    try{
        if(e.key == '=' || e.key == 'Enter'){
            e.preventDefault();
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.key == 'c' || e.key == 'C'){
                string = "";
                document.querySelector('input').value = string;
            }
        else if(validKeys.includes(e.key)){
                string = string + e.key;
                document.querySelector('input').value = string;
        }
        else if (e.key === 'Backspace') {
            string = string.slice(0, -1);
            document.querySelector('input').value = string;
        }
    }
    catch(error){
        console.error("An error occurred:", error.message);
        document.querySelector('input').value = "Error!";
        string = "";
    }
});

let popUp = document.querySelector('.pop-up');
let infoButton = document.querySelector('.info-button');

infoButton.addEventListener('click', (e)=>{
    if(popUp.style.display === 'none' || popUp.style.display === ''){
        popUp.style.display = 'flex';
    }
    else{
        popUp.style.display = 'none';
    }
})
