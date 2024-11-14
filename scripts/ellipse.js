function calculateEllipseArea(){
    const majorRadius = getInputValueById('major-radius');
    const minorRadius = getInputValueById('minor-radius');
    const area = 3.1416 * majorRadius * minorRadius;
    setInnerTextById('ellipse-area',area);
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