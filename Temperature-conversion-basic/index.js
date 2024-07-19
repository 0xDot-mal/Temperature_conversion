const textBOX = document.getElementById(`textBOX`);
const tofahren = document.getElementById(`toFAHRENHEIT`);
const tocel = document.getElementById(`toCELSIUS`);
const result = document.getElementById(`afterCONV`);
let TEMP;

function convert(){
    if(tofahren.checked){
        TEMP = Number(textBOX.value);
        TEMP = TEMP * 9 / 5 + 32;
        result.textContent = TEMP.toFixed(1) + "°F";
    }
    else if(tocel.checked){
        TEMP = Number(textBOX.value);
        TEMP = (TEMP - 32) * (5/9);
        result.textContent = TEMP.toFixed(1) + "°C";
    }
    else{
        result.textContent = `Select a unit!`;
    }
}