// Dropdown Menu
function mobiledropdown() {
    let x = document.getElementById("mobilenav");
    if (x.className === "nav-list") {
        x.className += " responsiveNav";
    } else {
        x.className = "nav-list";
    }
}
// Page linking


// Dynamic Payment Modal

function switchPage(event, payname) {

    let i, payWith, pagelinks; 
       payWith = document.getElementsByClassName('paywith')
    for (i = 0; i < payWith.length; i++) {
        payWith[i].style.display = "none";
    }

    pagelinks = document.getElementsByClassName('pagelinks');
    for (i = 0; i < pagelinks.length; i++) {
        pagelinks[i].className = pagelinks[i].className.replace(" active", "");
    }

    document.getElementById(payname).style.display = "flex";
    event.currentTarget.className += " active";

}
document.getElementById("default").click();


// Pay with card Authorize payment pages 

function contCardPay(event, name){
    let i, cardPin, contPayment;

    cardPin=document.getElementsByClassName('card-payment')
    for (i = 0; i < cardPin.length; i++) {
        cardPin[i].style.display = "none";
    }
    contPayment = document.getElementsByClassName('continue-payment');
    for (i = 0; i < contPayment.length; i++) {
        contPayment[i].className= contPayment[i].className.replace(" active", "");   
    }
    document.getElementById(name).style.display = "block";
    event.currentTarget.className += " active";
}

document.getElementById("card-details-page").click();
