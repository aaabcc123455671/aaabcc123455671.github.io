const btn=document.querySelector(".button");
const feedback=document.querySelector(".feedback-container");
btn.addEventListener("click",()=>{
  feedback.innerHTML=<h1>Thank You For Your Feedback</h1>;
});