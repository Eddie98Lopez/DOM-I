const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Nav
const navLinks = document.querySelectorAll("nav a");


for ( let i=0; i<6; i++){
  navLinks[i].textContent = siteContent.nav[`nav-item-${i+1}`];
  navLinks[i].style.color = "green"
}

const newLink1 = document.createElement('a')
const newLink2 = document.createElement('a')

newLink1.textContent = 'link 1'
newLink2.textContent = 'link 2'

const nav = document.querySelector('nav')

nav.appendChild(newLink1)
nav.appendChild(newLink2)

newLink1.style.color="green"
newLink2.style.color="green"

//-=--------------------------------------------------------------------------

let h1Tag = document.querySelector("h1");
h1Tag.textContent=siteContent.cta["h1"];

let ctaButton = document.querySelector("div .cta-text button");
ctaButton.textContent = siteContent.cta["button"];

const ctaImg= document.querySelector(".cta img");
ctaImg.src = siteContent.cta["img-src"];

//-----------------------------------------------------MAIN CONTENT

const textContents = document.querySelectorAll('.text-content')
const arrayHeadings = ['features','about','services','product','vision']

for(let i=0; i<5; i++){
  textContents[i].children[0].textContent = siteContent['main-content'][`${arrayHeadings[i]}-h4`]
  textContents[i].children[1].textContent = siteContent['main-content'][`${arrayHeadings[i]}-content`]
}

//-------MAIN CONTENT IMG
const mainContImg = document.getElementById("middle-img");

mainContImg.src = siteContent['main-content']["middle-img-src"];

//------------------------------------------------------

//Contact 

const contactH4 = document.querySelector(".contact h4")
contactH4.textContent = siteContent.contact["contact-h4"];

const contactPs = document.querySelectorAll(".contact p");

contactPs[0].textContent = siteContent.contact.address;
contactPs[1].textContent = siteContent.contact.phone;
contactPs[2].textContent = siteContent.contact.email;

//footer

const footerP = document.querySelector("footer p");
footerP.textContent = siteContent.footer.copyright;



