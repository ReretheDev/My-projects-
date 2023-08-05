let kgRef = document.getElementById("kg");
let ozRef = document.getElementById("oz");
let lbRef = document.getElementById("lb");
let convertFromKg = () => {
  let kg = kgRef.value;
  lbRef.value = (kg * 2.205).toFixed(2);
  ozRef.value = (kg * 35.274).toFixed(2);
};
let convertFromLb = () => {
  let lb = lbRef.value;
  kgRef.value = (lb / 2.205).toFixed(2);
  ozRef.value = (lb * 16).toFixed(2);
};
let convertFromOz = () => {
  let oz = ozRef.value;
  kgRef.value = (oz / 35.274).toFixed(2);
  lbRef.value = (oz / 16).toFixed(2);
};

kgRef.addEventListener("input", convertFromKg);
lbRef.addEventListener("input", convertFromLb);
ozRef.addEventListener("input", convertFromOz);


let loader = document.querySelector("#loader");
window.addEventListener("load", function() {
  convertFromKg();
  setTimeout(() => {
    loader.style.display = "none"
  },4000)
});
