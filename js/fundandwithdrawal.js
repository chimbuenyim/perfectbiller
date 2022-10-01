// The aside toggler for mobile views

let asideContent = document.querySelector('.fundAndWithdrawal-aside');
 
const verticalSelect = (addClass) =>{
    addClass = asideContent.classList.add('activate');
    document.querySelector('.fundDropdown').style.display = 'none'
    document.querySelector('.fundBackdrop').style.display = 'block'
    // removeClass = asideContent.classList.remove('activate');
}
const removeClass = (removeClass) =>{
  removeClass = asideContent.classList.remove('activate');
  document.querySelector('.fundDropdown').style.display = 'block'
  document.querySelector('.fundBackdrop').style.display = 'none'
}

document.querySelector('.fundDropdown').addEventListener('click', ()=>{
    let add = document.querySelector('.fundAndWithdrawal-aside')

    verticalSelect(add)
})

document.querySelector('.fundBackdrop').addEventListener('click', ()=>{
    let add = document.querySelector('.fundAndWithdrawal-aside')

    removeClass(add)
})
// The toggler ends here
const toogleTabs = (tabName,contentId) =>{
let tabs = document.querySelectorAll(".tab")
let tabContent = document.querySelectorAll(".tab-content")

tabs.forEach((tab)=>{
    if(tab.textContent === tabName){
        tab.classList.add("isactive")
    }else{
        tab.classList.remove("isactive")
    }
})

tabContent.forEach((content)=>{
    if(content.id === contentId){
        content.classList.add("show-content")
    }else{
        content.classList.remove("show-content")
    }
})

};

const HandleHideAndShow = (hide, show) => { 
    document.querySelector(`#${hide}`).style = "display:none";
    document.querySelector(`#${show}`).style = "display:block";
  };

document.querySelector(".continue-fund").addEventListener('click', () => {
    let stepOne = document.querySelector("#tab1-section1").id;
    let stepTwo = document.querySelector('#tab1-section2').id;

    HandleHideAndShow(stepOne, stepTwo)
})

document.querySelector('.selectFund').addEventListener('click', () => {
    let stepOne = document.querySelector('#tab1-section2').id;
    let stepTwo = document.querySelector('#tab1-section3').id;

    HandleHideAndShow(stepOne, stepTwo);
})


document.querySelector('.fundWallet-button').addEventListener('click', ()=>{
    let stepOne = document.querySelector('#tab1-section3').id;
    let stepTwo = document.querySelector('#tab1-section4').id;

    HandleHideAndShow(stepOne, stepTwo);
})

document.querySelector('.confirmFund').addEventListener('click', () =>{
    let stepOne = document.querySelector('#tab1-section4').id;
    let stepTwo = document.querySelector('#tab1-section1').id;

    HandleHideAndShow(stepOne, stepTwo)
})

document.querySelector("#tabTwoBtnOne").addEventListener("click", ()=>{
    let stepOne = document.querySelector('#tab2-section1').id
    let stepTwo = document.querySelector('#tab2-section2').id

    HandleHideAndShow(stepOne, stepTwo)
})

document.querySelector("#tabTwoProceedBtn").addEventListener("click", ()=>{
    let stepOne = document.querySelector('#tab2-section2').id
    let stepTwo = document.querySelector('#tab2-section3').id

    HandleHideAndShow(stepOne, stepTwo)
})