
// let rechargeOne = document.querySelector("#rechargeOne");
// let rechargeTwo = document.querySelector('#rechargeTwo');
// let rechargeSuccessful = document.querySelector('#rechargeSuccessful');

// let btnOne = document.querySelector('#btnOne');
// let btnTwo = document.querySelector('#btnTwo');
// let btnPurchased = document.querySelector('#btnPurchased');

// btnOne.onclick = function () {
//     rechargeTwo.style.display = "block";
//     rechargeOne.style.display = "none"
// }

// btnTwo.onclick = function () {
//     rechargeTwo.style.display = "none";
//     rechargeSuccessful.style.display = "block"
// }

// btnPurchased.onclick = function () {
//     rechargeSuccessful.style.display = "none";
//     rechargeOne.style.display = "block"
// }
let asideContent = document.querySelector('.asideSelect');
 
const verticalSelect = (addClass) =>{
    addClass = asideContent.classList.add('activate');
    document.querySelector('.phoneRechargeDropdown').style.display = 'none'
    document.querySelector('.backdrop').style.display = 'block'
    // removeClass = asideContent.classList.remove('activate');
}
const removeClass = (removeClass) =>{
  removeClass = asideContent.classList.remove('activate');
  document.querySelector('.phoneRechargeDropdown').style.display = 'block'
  document.querySelector('.backdrop').style.display = 'none'
}

document.querySelector('.phoneRechargeDropdown').addEventListener('click', ()=>{
    let dropHamburger = document.querySelector('#phonerecharge-aside').id

    verticalSelect(dropHamburger);

})

document.querySelector('.backdrop').addEventListener('click', ()=>{
  let rmAside = document.querySelector('#phonerecharge-aside').id

  document.querySelector('.phoneRechargeDropdown').style.display = 'block'
  removeClass(rmAside)
})

// hamburger for mobile view ends here



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

