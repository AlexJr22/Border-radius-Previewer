const borderPreviwer = document.getElementById('borderPreviwer').style;

// inputs 
let borderTLEFT = document.getElementById('borderTLEFT'); // top left
let borderTLEFT2 = document.getElementById('borderTLEFT2');

let borderTRIGHT = document.getElementById('borderTRIGHT'); // top right
let borderTRIGHT2 = document.getElementById('borderTRIGHT2');

let borderBLEFT = document.getElementById('borderBLEFT');// botton left
let borderBLEFT2 = document.getElementById('borderBLEFT2');

let borderBRIGHT = document.getElementById('borderBRIGHT'); //botton right
let borderBRIGHT2 = document.getElementById('borderBRIGHT2');

this.onload = borderPreviwer.borderRadius = '50% 17% 30% 73%'

// top left
borderTLEFT.addEventListener("change", (event) => {
  borderPreviwer.borderTopLeftRadius = `${event.target.value}% \ ${borderTLEFT2.value}%`
  console.log("TL", event.target.value, borderTLEFT2.value)
});
borderTLEFT2.addEventListener("change", (event) => {
  borderPreviwer.borderTopLeftRadius = `${borderTLEFT.value}% \ ${event.target.value}% `
  console.log("TL", borderTLEFT.value, event.target.value)
});

// top right
borderTRIGHT.addEventListener("change", (event) => {
  borderPreviwer.borderTopRightRadius = `${event.target.value}% \ ${borderTRIGHT2.value}%`
  console.log("TR", event.target.value, borderTRIGHT2.value)
});
borderTRIGHT2.addEventListener("change", (event) => {
  borderPreviwer.borderTopRightRadius = `${borderTRIGHT.value}% \ ${event.target.value}% `
  console.log("TR", borderTRIGHT.value, event.target.value)
});

// botton left
borderBLEFT.addEventListener("change", (event) => {
  borderPreviwer.borderBottomLeftRadius = `${event.target.value}% \ ${borderBLEFT2.value}%`
  console.log("TR", event.target.value, borderBLEFT2.value)
});
borderBLEFT2.addEventListener("change", (event) => {
  borderPreviwer.borderBottomLeftRadius = `${borderBLEFT.value}% \ ${event.target.value}% `
  console.log("TR", borderBLEFT.value, event.target.value)
});

//botton right
borderBRIGHT.addEventListener("change", (event) => {
  borderPreviwer.borderBottomRightRadius = `${event.target.value}% \ ${borderBRIGHT2.value}%`
  console.log("TR", event.target.value, borderBRIGHT2.value)
});
borderBRIGHT2.addEventListener("change", (event) => {
  borderPreviwer.borderBottomRightRadius = `${borderBRIGHT.value}% \ ${event.target.value}% `
  console.log("TR", borderBLEFT.value, event.target.value)
});
