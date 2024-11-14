function calculatePentagonArea(){
    const perimeter = getInputValueById('pentagon-perimeter');
    const apothem= getInputValueById('pentagon-apothem');
    const area = 0.5 * perimeter * apothem;
    setInnerTextById('pentagon-area', area);
 }
function getInputValueById(inputId){
    const inputTextField = document.getElementById(inputId);
    const inputValueText = inputTextField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}
function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}