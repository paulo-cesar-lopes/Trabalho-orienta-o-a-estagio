


const buttonClean = document.querySelector("#clean")
const buttonSend = document.querySelector("#send");
const inputC = document.querySelector("#c");
const inputF = document.querySelector("#f");
const inputK = document.querySelector("#k");



const result = () => {
    let transformFfromC = (inputF.value - 32) * 5/9;
    let transformKfromC = inputK.value - 273;
    let transformCfromF = (inputC.value * 9/5) + 32;
    let transformKfromF = (inputK.value - 273) * (9 / 5) + 32;
    let transformCfromK = inputC.value * 1 + 273;
    let transformFfromK = (inputF.value - 32) * (5 / 9) + 273;

    if (inputC.value){
        inputF.value = transformCfromF;
        inputK.value = transformCfromK;
    }else if (inputF.value) {
        inputC.value = transformFfromC;
        inputK.value = transformFfromK;
    }else {
        inputC.value = transformKfromC;
        inputF.value = transformKfromF;
    }
}

buttonSend.addEventListener("click", result);
    
const clean = () => {
    if (document.getElementById('c').value!="") {
        document.getElementById('c').value="";
        document.getElementById('f').value="";
        document.getElementById('k').value="";
    }
}

buttonClean.addEventListener("click", clean);

