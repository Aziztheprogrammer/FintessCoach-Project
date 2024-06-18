// Coach Info
let coachInfo = {
    coachName: "Aziz Berhouma",
}


// Coach Dynamic Name
let headerLogo = document.getElementsByClassName("header__logo")[0];
headerLogo.textContent = coachInfo.coachName;

let heroParagraph = document.querySelector(".hero-section__text p");
heroParagraph.textContent = coachInfo.coachName + " Provides An Elite Fitness Coaching for Personalized Training and Support to Transform Your Body and Unlock Your Full Potential in Health and Fitness."; 