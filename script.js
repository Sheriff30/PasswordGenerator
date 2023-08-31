const slider = document.querySelector(".range");
const sliderVal = document.querySelector(".charsetOutput");
const submitBTN = document.querySelector(".submit");
const uppercase = document.querySelector(".uppercase");
const lowercase = document.querySelector(".lowercase");
const numbers = document.querySelector(".numbers");
const symbols = document.querySelector(".symbols");
const checkbox = document.querySelectorAll(".checkbox");
const strengthChart = document.querySelector(".strengthChart");
const pw = document.querySelector(".password");
const copybtn = document.querySelector(".copybtn");
const copy = document.querySelector(".copy");
let charset = "";
let password = "";

const sliderEvent = function () {
  // Progress bar
  const x = ((this.value - this.min) / (this.max - this.min)) * 100;
  const color = `linear-gradient(90deg , rgb(164,255,175) ${x}% , rgb(24,23,31) ${x}%)`;
  this.style.background = color;
  // value change
  sliderVal.textContent = this.value;
  let Svalue = slider.value;

  if (Svalue <= 4) strengthChart.src = "assets/images/tooweak.svg";
  if (Svalue > 4 && Svalue <= 6) strengthChart.src = "assets/images/weak.svg";
  if (Svalue > 6 && Svalue <= 8)
    strengthChart.src = "assets/images/medium.svg";
  if (Svalue > 8 && Svalue <= 12)
    strengthChart.src = "assets/images/strong.svg";

  strengthChart.style.width = "16.65rem";
};

////////////////////////////////
const reset = function () {
  copy.classList.add("hide");
  slider.value = 0;
  const x = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
  sliderVal.textContent = "0";
  strengthChart.style.width = "6.35rem";
  strengthChart.src = "/assets/images/empty.svg";
  slider.style.background = `linear-gradient(90deg , rgb(24,23,31) ${x}% , rgb(24,23,31) ${x}%)`;
  checkbox.forEach((e) => {
    e.checked = false;
  });
  charset = "";
};

////////////////////////////
slider.addEventListener("mousemove", sliderEvent);
slider.addEventListener("touchmove", sliderEvent);

submitBTN.addEventListener("click", function () {
  checkbox.forEach((e) => {
    if (slider.value === "0" || !e.checked) return;
    if (uppercase.checked) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase.checked) charset += "abcdefghijklmnopqrstuvwxyz";
    if (numbers.checked) charset += "0123456789";
    if (symbols.checked) charset += "!@#$%^&*()_-+=<>?";
    pw.textContent = "";
    password = "";

    for (let i = 0; i < slider.value; i++) {
      let random = Math.floor(Math.random() * charset.length);

      password += charset[random];
      pw.textContent = password;
    }

    //////////////////////////////////reset/////////////////////
    reset();
  });
});

copybtn.addEventListener("click", function () {
  copy.classList.remove("hide");
  navigator.clipboard.writeText(password);
});
