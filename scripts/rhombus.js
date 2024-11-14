function calculateRhombusArea(){
    const base = getInputValueById('rhombus-d1');
    const height = getInputValueById('rhombus-d1');
    const area = 0.5 * base * height;
    setInnerTextById('rhombus-area',area);
}
function getInputValueById(inputIdValue){
    const inputValueId = document.getElementById(inputIdValue);
    const inputValueText = inputValueId.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}
function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}