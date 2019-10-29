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

let cta = document.getElementById("cta-img");
cta.setAttribute('src', siteContent["cta"] ["img-src"])

let mid = document.getElementById("middle-img");
mid.setAttribute('src', siteContent["main-content"]["middle-img-src"])


// Nav items
let navA = document.querySelectorAll("a");
navA[0].textContent = siteContent['nav']["nav-item-1"];

navA[1].textContent = siteContent['nav']["nav-item-2"];

navA[2].textContent = siteContent['nav']["nav-item-3"];

navA[3].textContent = siteContent['nav']["nav-item-4"];

navA[4].textContent = siteContent['nav']["nav-item-5"];

navA[5].textContent = siteContent['nav']["nav-item-6"];

navA.forEach( element => {
  element.style.color = "green"; 
});
//end nav

// main header
let mainTitle = document.querySelector('.cta h1');
mainTitle.innerHTML = siteContent ["cta"]["h1"].replace(/ /g, '<br>')

document.querySelector('button').textContent = "Get Started"

//mid section

let midHeaders = document.getElementsByTagName('h4');
midHeaders[0].textContent = siteContent['main-content']['features-h4']

midHeaders[1].textContent = siteContent['main-content']['about-h4']

midHeaders[2].textContent = siteContent['main-content']['services-h4']

midHeaders[3].textContent = siteContent['main-content']['product-h4']

midHeaders[4].textContent = siteContent['main-content']['vision-h4']

let midText = document.getElementsByTagName('p');
midText[0].textContent = siteContent ['main-content']['features-content']

midText[1].textContent = siteContent ['main-content']['about-content']

midText[2].textContent = siteContent ['main-content']['services-content']

midText[3].textContent = siteContent ['main-content']['product-content']

midText[4].textContent = siteContent ['main-content']['vision-content']

// end mid section

//contact
let contactInfo = document.querySelectorAll('contact');
contactInfo[0].textContent = siteContent ['contact']['contact-h4']

contactInfo[1].textContent = siteContent ['contact']['address']

contactInfo[2].textContent = siteContent ['contact']['phone']

contactInfo[3].textContent = siteContent ['contact']['email']

// "contact": {
//   "contact-h4" : "Contact",
//   "address" : "123 Way 456 Street Somewhere, USA",
//   "phone" : "1 (888) 888-8888",
//   "email" : "sales@greatidea.io",

newNavItem1.textContent = "FAQ";

const fifthNav = document.querySelector('nav');
fifthNav.prepend(newNavItem1);

newNavItem2.textContent = "Complain";

const sixthNav = document.querySelector('nav');
sixthNav.prepend(newNavItem2);


// newContent.textContent = "Ugly website design by Christina Gorton 🙈";
// const secondaryContent = document.querySelector('body');

// secondaryContent.prepend(newContent);