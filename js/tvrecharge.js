/////  Vertical side bar on moblile view
let hamburger = document.querySelector(".dropdown-menu");
let tvRechargeScreen = document.querySelector(".tvrecharge-screen");
let phoneRechargeScreen = document.querySelector(".phonerecharge-screen");
let buyElectricity=document.querySelector(".buyelectricity-screen");
let backdrop = document.querySelector(".backdrop");

// TV recharge screen
hamburger.addEventListener('click', function () {
  tvRechargeScreen.classList.add('active');
  hamburger.style.display = "none"
  backdrop.style.display = "block"
})
backdrop.addEventListener("click", function () {
  tvRechargeScreen.classList.remove('active');
  hamburger.style.display = "block"
  backdrop.style.display = "none"
})


//the function helps to remove or hide one section and replace with another section
const HandleHideAndShow = (hide, show) => { 
  document.querySelector(`#${hide}`).style = "display:none";
  document.querySelector(`#${show}`).style = "display:block";
};

document.querySelector("#btnOne").addEventListener("click", () => {
 
  let buttonOne = document.querySelector("#rechargeOne").id
  let buttonTwo = document.querySelector("#rechargeTwo").id

  HandleHideAndShow(buttonOne, buttonTwo);
});

document.querySelector("#btnTwo").addEventListener('click', () =>{

  let stepOne = document.querySelector("#rechargeTwo").id;
  let stepTwo = document.querySelector("#rechargeSuccessful").id;

  HandleHideAndShow(stepOne, stepTwo);
})


document.querySelector("#btnPurchased").addEventListener('click', () =>{

  let stepOne = document.querySelector("#rechargeSuccessful").id;
  let stepTwo = document.querySelector("#rechargeOne").id;

  HandleHideAndShow(stepOne, stepTwo);
})