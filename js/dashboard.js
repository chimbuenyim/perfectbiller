let asideContent = document.querySelector('.dashboard-section');
 
const verticalSelect = (addClass) =>{
    addClass = asideContent.classList.add('activate');
    // removeClass = asideContent.classList.remove('activate');
}

const removeClass = (removeClass) =>{
    removeClass = asideContent.classList.remove('activate');
    document.querySelector('.dashDropdown').style.display = 'block'
    document.querySelector('.dashBackdrop').style.display = 'none'
  }

document.querySelector('.dashDropdown').addEventListener('click', ()=>{
    let add = document.querySelector('.dashboard-section')
    document.querySelector('.dashDropdown').style.display = 'none'
    document.querySelector('.dashBackdrop').style.display = 'block'
    verticalSelect(add)
})

document.querySelector('.dashBackdrop').addEventListener('click', ()=>{
    let add = document.querySelector('.dashboard-section')

    removeClass(add)
})