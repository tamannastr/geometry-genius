function calculateRectangleArea(){
 const rectAngleWidthInput = document.getElementById('rectangle-width');
 const rectAngleWidthText = rectAngleWidthInput.Value;
 const width = parseFloat(rectAngleWidthText);
//  height //
const rectAngleHeightInput = document.getElementById('rectangle-height');
const rectAngleHeightText = rectAngleHeightInput.value;
const height = parseFloat(rectAngleHeightText);
const area = width * height;
const textAreaInput =  document.getElementById('rectangle-area');
textAreaInput.innerText = area;

}