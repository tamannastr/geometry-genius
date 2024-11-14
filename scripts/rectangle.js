function calculateRectangleArea(){
    //rectangle width///
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText);
    //rectangle height///
    const rectangleHeightInput = document.getElementById('rectangle-height');
    const rectangleHeightText = rectangleHeightInput.value;
    const height = parseFloat(rectangleHeightText);
    //rectangle area////
    const area = width * height;
    const textAreaSpan = document.getElementById('rectangle-area');
    textAreaSpan.innerText = area;
}
function getInputValueById(inputIdValue){
    const inputValueId = document.getElementById(inputIdValue);
    const inputValueText = inputValueId.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}