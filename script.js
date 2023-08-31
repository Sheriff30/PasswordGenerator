const slider = document.querySelector(".range");
const sliderVal = document.querySelector(".charsetOutput");

slider.addEventListener("mousemove", function () {
  // Progress bar
  const x = ((this.value - this.min) / (this.max - this.min)) * 100;
  console.log(x);
  const color = `linear-gradient(90deg , rgb(164,255,175) ${x}% , rgb(24,23,31) ${x}%)`;
  this.style.background = color;
  // value change
  sliderVal.textContent = this.value;
});
slider.addEventListener("click", function () {
  // Progress bar
  const x = ((this.value - this.min) / (this.max - this.min)) * 100;
  console.log(x);
  const color = `linear-gradient(90deg , rgb(164,255,175) ${x}% , rgb(24,23,31) ${x}%)`;
  this.style.background = color;
  // value change
  sliderVal.textContent = this.value;
});
