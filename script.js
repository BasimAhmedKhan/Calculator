var val = "";
var result = document.getElementById("result");
var buttons = document.querySelectorAll(".btn");
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click", (e)=>{
        if(e.target.innerText == "="){
            val = eval(val);
            result.innerText = eval(val);
            val = 0;
        }
        else if(e.target.innerText == "C"){
            result.innerText = 0;
            val = 0;
        }
        else if(e.target.innerText == '⟵'){
            val = val.substring(0, val.length-1);
            result.innerText = val;
        }
        else{
            result.innerText = "";
            val += e.target.innerText;
            result.innerText = val;
        }
    })
}); 
