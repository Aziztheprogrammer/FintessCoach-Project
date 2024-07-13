// Coach Info
let coachInfo = {
    coachName: "Wassim Ben Aziza",
    coachImg: "assets/images/coach-img.webp",
    coachAbout: "Elite Fitness Coaching for Personalized Training and Support to Transform Your Body and Unlock Your Full Potential in Health and Fitness.",
    coachIg: "https://www.instagram.com/wassimbenaziza/",
    coachFb: "https://www.facebook.com",
    coachLocation: "Tunisia, Tunis",
    coachPhone: "+216 12 345 678",
    coachEmail: "mail@gmail.com"
}

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

// Gallery Images Object 
let gallery = [
    {
        src: "assets/images/gallery-1.webp",
        alt: "Gallery Image"
    },
    {
        src: "assets/images/gallery-2.webp",
        alt: "Gallery Image"
    },
    {
        src: "assets/images/gallery-3.webp",
        alt: "Gallery Image"
    },
    {
        src: "assets/images/gallery-4.webp",
        alt: "Gallery Image"
    },
    {
        src: "assets/images/gallery-5.webp",
        alt: "Gallery Image"
    },
    {
        src: "assets/images/gallery-6.webp",
        alt: "Gallery Image"
    },
];

// Why-us Object 
let whyUs = [
    {
        title: "#1 Experienced Coach",
        desc: "With 8 years of coaching experience, I specialize in empowering individuals to achieve their personal goals with empathy and strategies."
    },
    {
        title: "#2 Personalized Workout Plans",
        desc: "Offering personalized workout plans, I tailor each program to fit your goals, ensuring effective and sustainable fitness results."
    },
    {
        title: "#3 Nutrition Guidance",
        desc: "Providing personalized nutrition guidance, I craft plans tailored to your needs, fostering healthy habits and optimal wellness."
    },
    {
        title: "#4 Ongoing Support",
        desc: "Committed to your success, I offer continuous support, ensuring you stay motivated and achieve your goals every step of the way."
    }
];

let reviews = [
    {
        review: "Working with You has been life-changing! Their personalized coaching helped me achieve my fitness goals faster than I ever thought possible.",
        clientName: "Client Name",
        clientImg: "https://cdn.pixabay.com/photo/2016/03/27/07/08/man-1282232_1280.jpg"
    },
    {
        review: "Working with You has been life-changing! Their personalized coaching helped me achieve my fitness goals faster than I ever thought possible.",
        clientName: "Client Name",
        clientImg: "https://cdn.pixabay.com/photo/2016/03/27/07/08/man-1282232_1280.jpg"
    },
    {
        review: "Working with You has been life-changing! Their personalized coaching helped me achieve my fitness goals faster than I ever thought possible.",
        clientName: "Client Name",
        clientImg: "https://cdn.pixabay.com/photo/2016/03/27/07/08/man-1282232_1280.jpg"
    }
];

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

// Page Title
document.title = `${coachInfo.coachName} - Personal Fitness Coach`;

// Burger Menu 
let burgerIcon = document.querySelector(".header__burger-menu");
let headerLinks = document.querySelector(".header__links > ul");

burgerIcon.addEventListener("click", () => {
    headerLinks.classList.toggle("opened");
})


// Coach Dynamic Name
let loadingScreenName = document.querySelector(".loading-screen .text");
loadingScreenName.textContent = coachInfo.coachName.toUpperCase();


let headerLogo = document.getElementsByClassName("header__logo")[0];
headerLogo.textContent = coachInfo.coachName;

let heroParagraph = document.querySelector(".hero-section__text p");
heroParagraph.textContent = coachInfo.coachName + " Provides An Elite Fitness Coaching for Personalized Training and Support to Transform Your Body and Unlock Your Full Potential in Health and Fitness.";

// Dynamic About Us Section
let aboutUsTitle = document.querySelector(".about-us-section__content > h3");
let aboutUsPar = document.querySelector(".about-us-section__content > p");
let aboutUsImage = document.querySelector(".about-us-section > img");

aboutUsTitle.textContent = `Coach ${coachInfo.coachName}`;
aboutUsPar.textContent = coachInfo.coachAbout;
aboutUsImage.src = coachInfo.coachImg;
aboutUsImage.alt = `${coachInfo.coachName} Image`;

// Dynamic Gallery Section
let galleryContent = document.getElementsByClassName("gallery-section__content")[0];
for (let i = 0; i < gallery.length; i++) {
    let img = document.createElement("img");
    img.src = gallery[i].src;
    img.alt = gallery[i].alt;
    galleryContent.append(img);
}

// Dynamic Why Us Section
let services = document.getElementsByClassName("why-us-section__service");
[...services].forEach((service, i) => {
    let serviceTitle = document.createElement("h3");
    serviceTitle.textContent = whyUs[i].title;
    let serviceDesc = document.createElement("p");
    serviceDesc.textContent = whyUs[i].desc;
    service.append(serviceTitle, serviceDesc);
});

// Dynamic Offers Section 
let offersTitles = document.querySelectorAll(".offers-section__offer > h2");
let offersDesc = document.querySelectorAll(".offers-section__offer > p");

offersTitles.forEach((title, i) => {
    title.textContent = offers[i].title;
});

offersDesc.forEach((desc, i) => {
    desc.textContent = offers[i].desc;
});

// Dynamic Reviews Section
let reviewsContainer = document.getElementsByClassName("reviews-section__content")[0];
reviews.forEach((review) => {
    // Create Review Div
    let reviewDiv = document.createElement("div");
    reviewDiv.classList.add("review");
    // Create Review Paragraph
    let reviewPar = document.createElement("p");
    reviewPar.textContent = review.review;
    reviewDiv.append(reviewPar);
    // Create Client Info Div
    let clientInfoDiv = document.createElement("div");
    clientInfoDiv.classList.add("client-info");
    // Add Client Image
    let clientImage = document.createElement("img");
    clientImage.src = review.clientImg;
    clientImage.alt = `${review.clientName} Image`;
    clientInfoDiv.append(clientImage);
    // Create Text Div
    let infoText = document.createElement("div");
    infoText.classList.add("text");
    // Client Name & Type
    let clientNameSpan = document.createElement("span");
    let clientSmall = document.createElement("small");
    clientNameSpan.textContent = review.clientName;
    clientSmall.textContent = "Client";
    infoText.append(clientNameSpan, clientSmall);
    clientInfoDiv.append(infoText);
    reviewDiv.append(clientInfoDiv);
    reviewsContainer.append(reviewDiv);
});

// Dynamic Contact Section
let coachLocation = document.querySelector("div.location > span");
let phone = document.querySelector("div.phone > span");
let email = document.querySelector("div.email > span");

coachLocation.textContent = coachInfo.coachLocation;
phone.textContent = coachInfo.coachPhone;
email.textContent = coachInfo.coachEmail;

// Dynamic Footer Section 
let coachNameFooter = document.querySelector(".footer__about-coach > h2");
coachNameFooter.textContent = coachInfo.coachName;

let coachAboutFooter = document.querySelector(".footer__about-coach > p");
coachAboutFooter.textContent = coachInfo.coachAbout;

// Instagram links 
let igLinks = document.getElementsByClassName("instagram-link");
[...igLinks].forEach((link) => {
    link.href = coachInfo.coachIg;
    link.target = "_blank";
})

// Facebook links 
let fbLinks = document.getElementsByClassName("facebook-link");
[...fbLinks].forEach((link) => {
    link.href = coachInfo.coachFb;
    link.target = "_blank";
})