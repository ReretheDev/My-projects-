let btn = document.querySelector("button");
let loader = document.querySelector("#loader");

let inputText = document.querySelector("#input-text");
let result = document.querySelector("#result");
btn.addEventListener("click", () => {
  const text = inputText.value.trim();
  if(text.length == 0) {
    alert("Input field can not be empty");
    return;
  }
  const cleanText = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  
  const isPalindrome = cleanText === cleanText.split("").reverse("").join("");
const message = isPalindrome ? `<span>Yes.</span> It is a palindrome!` :
`<span>No.</span> It is not a palindrome!` ;
result.innerHTML = message;
result.classList.remove("error", "success");
setTimeout( () =>{
  result.classList.add(isPalindrome ? "success" : "error" )
},10)
});
window.addEventListener("load", function(){
 setTimeout(()=>{
   loader.style.display ="none"
 },4000)
})