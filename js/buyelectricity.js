let asideContent = document.querySelector('.buyelectricity-aside');
 
const verticalSelect = (addClass) =>{
    addClass = asideContent.classList.add('activate');
    document.querySelector('.buyElectDropdown').style.display = 'none'
    document.querySelector('.buyElectBackdrop').style.display = 'block'
    // removeClass = asideContent.classList.remove('activate');
}
const removeClass = (removeClass) =>{
  removeClass = asideContent.classList.remove('activate');
  document.querySelector('.buyElectDropdown').style.display = 'block'
  document.querySelector('.buyElectBackdrop').style.display = 'none'
}

document.querySelector('.buyElectDropdown').addEventListener('click', ()=>{
    let dropHamburger = document.querySelector('.buyelectricity-aside')

    verticalSelect(dropHamburger);

})

document.querySelector('.buyElectBackdrop').addEventListener('click', ()=>{
  let rmAside = document.querySelector('.buyelectricity-aside')

  removeClass(rmAside)
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