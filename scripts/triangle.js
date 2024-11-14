function calculateTriangleArea(){
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    // console.log(base)
  //triangle height 
  const triangleHeightInput = document.getElementById('triangle-height');
  const triangleHeightText = triangleHeightInput.value;
  const height = parseFloat(triangleHeightText);
//   console.log(height)
const area = 0.5 * base * height;
 const textAreaSpan = document.getElementById('triangle-area');
 textAreaSpan.innerText = area;
}