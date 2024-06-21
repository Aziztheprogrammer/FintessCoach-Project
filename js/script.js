// Coach Info
let coachInfo = {
    coachName: "Aziz Berhouma",
    coachIg: "",
    coachFb: "",
}

// Loading Screen
let loadingScreen = document.getElementsByClassName('loading-screen')[0];
document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
        loadingScreen.style.visibility = "visible";
    } else if (state == 'complete') {
        setTimeout(function(){
            loadingScreen.style.visibility="hidden";
           document.body.style.visibility="visible";
        },2000);
    }
}

// Coach Dynamic Name
let loadingScreenName = document.querySelector(".loading-screen .text");
loadingScreenName.textContent = coachInfo.coachName.toUpperCase();


let headerLogo = document.getElementsByClassName("header__logo")[0];
headerLogo.textContent = coachInfo.coachName;

let heroParagraph = document.querySelector(".hero-section__text p");
heroParagraph.textContent = coachInfo.coachName + " Provides An Elite Fitness Coaching for Personalized Training and Support to Transform Your Body and Unlock Your Full Potential in Health and Fitness.";

// Offers Object 
let offers = [
    {
        title: "Nutrition Guidance",
        desc: "Expert advice on healthy eating habits and meal planning to support fitness goals."
    },
    {
        title: "Personalized Workout Plans",
        desc: "Customized exercise routines tailored to individual fitness goals and abilities."
    },
    {
        title: "Ongoing Support",
        desc: "Regular check-ins, motivation, and accountability to help clients stay on track and achieve success."
    }
];

let offersTitles = document.querySelectorAll(".offers-section__offer > h2");
let offersDesc = document.querySelectorAll(".offers-section__offer > p");

offersTitles.forEach((title, i) => {
    title.textContent = offers[i].title;
});

offersDesc.forEach((desc, i) => {
    desc.textContent = offers[i].desc;
});
