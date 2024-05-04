

document.getElementById("hire-me-btn").addEventListener("click", function() {
   
    var gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=isidora.s.dev@gmail.com&su=Hiring%20Inquiry";
    
    window.open(gmailUrl, '_blank');
});

document.getElementById("hire-me-btn-mobile").addEventListener("click", function() {
   
    var gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=isidora.s.dev@gmail.com&su=Hiring%20Inquiry";
    
    window.open(gmailUrl, '_blank');
});



document.getElementById("hire-me-btn-tablet").addEventListener("click", function() {
   
    var gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=isidora.s.dev@gmail.com&su=Hiring%20Inquiry";
    
    window.open(gmailUrl, '_blank');
});


const linkedin = document.getElementById("linkedin");

linkedin.addEventListener("click",()=>{
    window.open("https://www.linkedin.com/in/isidora-stanisavljevska/");
});


const X = document.getElementById("X");

X.addEventListener("click",()=>{
    window.open("https://twitter.com/Isidora_993");
});

const discord = document.getElementById("discord");

discord.addEventListener("click",()=>{
    window.open("https://discord.gg/U4Aj7Tc9Rj");
});


//for the footer:

const linkedinFooter = document.getElementById("linkedin-footer");

linkedinFooter.addEventListener("click",()=>{
    window.open("https://www.linkedin.com/in/isidora-stanisavljevska/");
});


const XFooter = document.getElementById("X-footer");

XFooter.addEventListener("click",()=>{
    window.open("https://twitter.com/Isidora_993");
});

const discordFooter = document.getElementById("discord-footer");

discordFooter.addEventListener("click",()=>{
    window.open("https://discord.gg/U4Aj7Tc9Rj");
});



//Scroll to view:

const aboutLink = document.getElementById("about");

const aboutContainer = document.getElementById("about-me");

aboutLink.addEventListener("click", ()=>{
    aboutContainer.scrollIntoView({behavior:"smooth"})
});



const skillsLink = document.getElementById("skills");

const skillsBlock = document.getElementById("skills-block");

skillsLink.addEventListener("click",()=>{
    skillsBlock.scrollIntoView({behavior:"smooth"})
});

const projectsLink = document.getElementById("projects");

const projectsBlock = document.getElementById("projects-block");

projectsLink.addEventListener("click", ()=>{
    projectsBlock.scrollIntoView({behavior:"smooth"})
});


const contactLink = document.getElementById("contact");

const contactBlock = document.getElementById("contact-block");

contactLink.addEventListener("click",()=>{
    contactBlock.scrollIntoView({behavior:"smooth"});
})

//Mobile menu


const burgerIcon = document.getElementById("burger-icon");
const menuMobile = document.getElementById("menu-mobile");
const menuContainer = document.getElementById("menu-container");
const aboutMobileLink = document.getElementById("about-mobile-link");
const skillsMobileLink = document.getElementById("skills-mobile-link");
const projectsMobileLink = document.getElementById("projects-mobile-link");

burgerIcon.addEventListener("click",()=>{
    if(menuMobile.style.display = "none" || menuMobile.style.display === ""){
        menuMobile.style.display = "block"
    }
})


document.addEventListener("click",(event)=>{
    if(event.target !== menuMobile && event.target !==  burgerIcon && event.target !== menuContainer && event.target !== aboutMobileLink
        && event.target !== skillsMobileLink && event.target !== projectsMobileLink){
        menuMobile.style.display = "none";
    }
})


//Scroll to view mobile:


const aboutLinkMobile = document.getElementById("about-mobile-link");

const aboutContainerMobile = document.getElementById("about-block-mobile");

aboutLinkMobile.addEventListener("click", ()=>{
    aboutContainerMobile.scrollIntoView({behavior:"smooth"})
});



const skillsLinkMobile = document.getElementById("skills-mobile-link");

const skillsBlockMobile = document.getElementById("skills-block-mobile");

skillsLinkMobile.addEventListener("click",()=>{
    skillsBlockMobile.scrollIntoView({behavior:"smooth"})
});

const projectsLinkMobile = document.getElementById("projects-mobile-link");

const projectsBlockMobile = document.getElementById("projects-block-mobile");

projectsLinkMobile.addEventListener("click", ()=>{
    projectsBlockMobile.scrollIntoView({behavior:"smooth"})
});


const contactLinkMobile = document.getElementById("contact-mobile-link");

const contactBlockMobile = document.getElementById("contact-block-mobile");

contactLinkMobile.addEventListener("click",()=>{
    contactBlockMobile.scrollIntoView({behavior:"smooth"});
});

//Change of the projects:


const btnNextMobile= document.getElementById("btn-next-mobile");

const btnBackMobile = document.getElementById("btn-back-mobile");

const firstProjectMobile = document.getElementById("first-project-mobile");

const secondProjectMobile = document.getElementById("second-project-mobile");

const thirdProjectMobile = document.getElementById("third-project-mobile");

const fourthProjectMobile = document.getElementById("fourth-project-mobile");

const fifthProjectMobile = document.getElementById("fifth-project-mobile");

const sixthProjectMobile = document.getElementById("sixth-project-mobile");

const projectsArray = [firstProjectMobile,secondProjectMobile,thirdProjectMobile,fourthProjectMobile,fifthProjectMobile,sixthProjectMobile];

let currentProjectIndex = 0;

btnNextMobile.addEventListener("click",() =>{

    projectsArray[currentProjectIndex].style.display = "none";

    currentProjectIndex = (currentProjectIndex + 1) % projectsArray.length;

    projectsArray[currentProjectIndex].style.display = "block";

});

btnBackMobile.addEventListener("click",()=>{
    projectsArray[currentProjectIndex].style.display = "none";
    currentProjectIndex = (currentProjectIndex - 1 + projectsArray.length) %projectsArray.length;

    projectsArray[currentProjectIndex].style.display = "block";
});



//Change of the projects  desktop:

const arrowBackDesktop = document.getElementById("arrow-back-desktop");

const arrowNextDesktop = document.getElementById("arrow-next-desktop");


const firstBlockProjects = document.getElementById("first-block-projects");

const secondBlockProjects = document.getElementById("second-block-projects");


arrowNextDesktop.addEventListener("click",()=>{
    if(secondBlockProjects.style.display = "none"){
        secondBlockProjects.style.display = "flex";
        firstBlockProjects.style.display = "none";
    }
});

arrowBackDesktop.addEventListener("click",()=>{
    if( firstBlockProjects.style.display = "none");
    firstBlockProjects.style.display = "flex";
    secondBlockProjects.style.display = "none";
});


//Change of the projects  tablet:

const arrowBackTablet = document.getElementById("arrow-back-tablet");

const arrowNextTablet = document.getElementById("arrow-next-tablet");


const firstBlockProjectsTablet = document.getElementById("first-block-projects-tablet");

const secondBlockProjectsTablet = document.getElementById("second-block-projects-tablet");


arrowNextTablet.addEventListener("click",()=>{
    if(secondBlockProjectsTablet.style.display = "none"){
        secondBlockProjectsTablet.style.display = "flex";
        firstBlockProjectsTablet.style.display = "none";
    }
});

arrowBackTablet.addEventListener("click",()=>{
    if( firstBlockProjectsTablet.style.display = "none");
    firstBlockProjectsTablet.style.display = "flex";
    secondBlockProjectsTablet.style.display = "none";
});

//Social media mobile:|


const linkedinMobile = document.getElementById("linkedin-mobile");

linkedinMobile.addEventListener("click",()=>{
    window.open("https://www.linkedin.com/in/isidora-stanisavljevska/");
});


const XMobile = document.getElementById("X-mobile");

XMobile.addEventListener("click",()=>{
    window.open("https://twitter.com/Isidora_993");
});

const discordMobile = document.getElementById("discord-mobile");

discordMobile.addEventListener("click",()=>{
    window.open("https://discord.gg/U4Aj7Tc9Rj");
});









//Scroll to view:

const aboutLinkTablet = document.getElementById("about-tablet");

const aboutContainerTablet = document.getElementById("about-me-tablet");

aboutLinkTablet.addEventListener("click", ()=>{
    aboutContainerTablet.scrollIntoView({behavior:"smooth"})
});



const skillsLinkTablet = document.getElementById("skills-tablet");

const skillsBlockTablet = document.getElementById("skills-block-tablet");

skillsLinkTablet.addEventListener("click",()=>{
    skillsBlockTablet.scrollIntoView({behavior:"smooth"})
});

const projectsLinkTablet = document.getElementById("projects-tablet");

const projectsBlockTablet = document.getElementById("projects-block-tablet");

projectsLinkTablet.addEventListener("click", ()=>{
    projectsBlockTablet.scrollIntoView({behavior:"smooth"})
});


const contactLinkTablet = document.getElementById("contact-tablet");

const contactBlockTablet = document.getElementById("contact-block-tablet");

contactLinkTablet.addEventListener("click",()=>{
    contactBlockTablet.scrollIntoView({behavior:"smooth"});
});



//Socials tablet:


const linkedinTablet = document.getElementById("linkedin-tablet");

linkedinTablet.addEventListener("click",()=>{
    window.open("https://www.linkedin.com/in/isidora-stanisavljevska/");
});


const XTablet = document.getElementById("X-tablet");

XTablet.addEventListener("click",()=>{
    window.open("https://twitter.com/Isidora_993");
});

const discordTablet = document.getElementById("discord-tablet");

discordTablet.addEventListener("click",()=>{
    window.open("https://discord.gg/U4Aj7Tc9Rj");
});


//for the footer:

const linkedinFooterTablet = document.getElementById("linkedin-footer-tablet");

linkedinFooterTablet.addEventListener("click",()=>{
    window.open("https://www.linkedin.com/in/isidora-stanisavljevska/");
});


const XFooterTablet = document.getElementById("X-footer-tablet");

XFooterTablet.addEventListener("click",()=>{
    window.open("https://twitter.com/Isidora_993");
});

const discordFooterTablet = document.getElementById("discord-footer-tablet");

discordFooterTablet.addEventListener("click",()=>{
    window.open("https://discord.gg/U4Aj7Tc9Rj");
});


//Linked projects for desktop:


const firstProjectCodeDesktopBtn = document.getElementById("first-project-code-desktop");

const firstProjectPageDesktopBtn = document.getElementById("first-project-page-desktop");




firstProjectCodeDesktopBtn.addEventListener("click",()=>{
    window.open("https://github.com/moonrose93/Sunnyside-agency-landing-page.git");
});

firstProjectPageDesktopBtn.addEventListener("click",()=>{
    window.open("https://stupendous-gnome-6a9313.netlify.app/");
});


const secondProjectCodeDesktopBtn = document.getElementById("second-project-code-desktop");

const secondProjectPageDesktopBtn = document.getElementById("second-project-page-desktop");

secondProjectCodeDesktopBtn.addEventListener("click",()=>{
    window.open("https://github.com/moonrose93/moonrose93-the-creator-landing-page.git");
});

secondProjectPageDesktopBtn.addEventListener("click",()=>{
    window.open("https://frolicking-boba-63177b.netlify.app/");
});


const thirdProjectCodeDesktopBtn = document.getElementById("third-project-code-desktop");

const thirdProjectPageDesktopBtn = document.getElementById("third-project-page-desktop");

thirdProjectCodeDesktopBtn.addEventListener("click",()=>{
    window.open("https://github.com/moonrose93/FAQ-accordion-built-with-React.git");
});

thirdProjectPageDesktopBtn.addEventListener("click",()=>{
    window.open("https://snazzy-palmier-0c89af.netlify.app/");
});


const fourthProjectCodeDesktopBtn = document.getElementById("fourth-project-code-desktop");

const fourthProjectPageDesktopBtn = document.getElementById("fourth-project-page-desktop");

fourthProjectCodeDesktopBtn.addEventListener("click",()=>{
    window.open("https://github.com/moonrose93/Interactive-rating-component-React.js.git");
});

fourthProjectPageDesktopBtn.addEventListener("click",()=>{
    window.open("https://sunny-gingersnap-fc6343.netlify.app/");
});


const fifthProjectCodeDesktopBtn = document.getElementById("fifth-project-code-desktop");

const fifthProjectPageDesktopBtn = document.getElementById("fifth-project-page-desktop");

fifthProjectCodeDesktopBtn.addEventListener("click",()=>{
    window.open("https://github.com/moonrose93/movie-app-react.git");
});

fifthProjectPageDesktopBtn.addEventListener("click",()=>{
    window.open("https://sage-flan-4c8d1d.netlify.app/");
});


const sixthProjectCodeDesktopBtn = document.getElementById("sixth-project-code-desktop");

const sixthProjectPageDesktopBtn = document.getElementById("sixth-project-page-desktop");

sixthProjectCodeDesktopBtn.addEventListener("click",()=>{
    window.open("https://github.com/moonrose93/advice-generator-app-main.git");
});

sixthProjectPageDesktopBtn.addEventListener("click",()=>{
    window.open("https://funny-brigadeiros-ed6c53.netlify.app/");
});

//Linked Projects Tablet:


const firstProjectCodeTabletBtn = document.getElementById("first-project-code-tablet");

const firstProjectPageTabletBtn = document.getElementById("first-project-page-tablet");




firstProjectCodeTabletBtn.addEventListener("click",()=>{
    window.open("https://github.com/moonrose93/Sunnyside-agency-landing-page.git");
});

firstProjectPageTabletBtn.addEventListener("click",()=>{
    window.open("https://stupendous-gnome-6a9313.netlify.app/");
});


const secondProjectCodeTabletBtn = document.getElementById("second-project-code-tablet");

const secondProjectPageTabletBtn = document.getElementById("second-project-page-tablet");

secondProjectCodeTabletBtn.addEventListener("click",()=>{
    window.open("https://github.com/moonrose93/moonrose93-the-creator-landing-page.git");
});

secondProjectPageTabletBtn.addEventListener("click",()=>{
    window.open("https://frolicking-boba-63177b.netlify.app/");
});


const thirdProjectCodeTabletBtn = document.getElementById("third-project-code-tablet");

const thirdProjectPageTabletBtn = document.getElementById("third-project-page-tablet");

thirdProjectCodeTabletBtn.addEventListener("click",()=>{
    window.open("https://github.com/moonrose93/FAQ-accordion-built-with-React.git");
});

thirdProjectPageTabletBtn.addEventListener("click",()=>{
    window.open("https://snazzy-palmier-0c89af.netlify.app/");
});


const fourthProjectCodeTabletBtn = document.getElementById("fourth-project-code-tablet");

const fourthProjectPageTabletBtn = document.getElementById("fourth-project-page-tablet");

fourthProjectCodeTabletBtn.addEventListener("click",()=>{
    window.open("https://github.com/moonrose93/Interactive-rating-component-React.js.git");
});

fourthProjectPageTabletBtn.addEventListener("click",()=>{
    window.open("https://sunny-gingersnap-fc6343.netlify.app/");
});


const fifthProjectCodeTabletBtn = document.getElementById("fifth-project-code-tablet");

const fifthProjectPageTabletBtn = document.getElementById("fifth-project-page-tablet");

fifthProjectCodeTabletBtn.addEventListener("click",()=>{
    window.open("https://github.com/moonrose93/movie-app-react.git");
});

fifthProjectPageTabletBtn.addEventListener("click",()=>{
    window.open("https://sage-flan-4c8d1d.netlify.app/");
});


const sixthProjectCodeTabletBtn = document.getElementById("sixth-project-code-tablet");

const sixthProjectPageTabletBtn = document.getElementById("sixth-project-page-tablet");

sixthProjectCodeTabletBtn.addEventListener("click",()=>{
    window.open("https://github.com/moonrose93/advice-generator-app-main.git");
});

sixthProjectPageTabletBtn.addEventListener("click",()=>{
    window.open("https://funny-brigadeiros-ed6c53.netlify.app/");
});

//Linked Projects Mobile:

const firstProjectCodeMobileBtn = document.getElementById("first-project-code-mobile");

const firstProjectPageMobileBtn = document.getElementById("first-project-page-mobile");




firstProjectCodeMobileBtn.addEventListener("click",()=>{
    window.open("https://github.com/moonrose93/Sunnyside-agency-landing-page.git");
});

firstProjectPageMobileBtn.addEventListener("click",()=>{
    window.open("https://stupendous-gnome-6a9313.netlify.app/");
});


const secondProjectCodeMobileBtn = document.getElementById("second-project-code-mobile");

const secondProjectPageMobileBtn = document.getElementById("second-project-page-mobile");

secondProjectCodeMobileBtn.addEventListener("click",()=>{
    window.open("https://github.com/moonrose93/moonrose93-the-creator-landing-page.git");
});

secondProjectPageMobileBtn.addEventListener("click",()=>{
    window.open("https://frolicking-boba-63177b.netlify.app/");
});


const thirdProjectCodeMobileBtn = document.getElementById("third-project-code-mobile");

const thirdProjectPageMobileBtn = document.getElementById("third-project-page-mobile");

thirdProjectCodeMobileBtn.addEventListener("click",()=>{
    window.open("https://github.com/moonrose93/FAQ-accordion-built-with-React.git");
});

thirdProjectPageMobileBtn.addEventListener("click",()=>{
    window.open("https://snazzy-palmier-0c89af.netlify.app/");
});


const fourthProjectCodeMobileBtn = document.getElementById("fourth-project-code-mobile");

const fourthProjectPageMobileBtn = document.getElementById("fourth-project-page-mobile");

fourthProjectCodeMobileBtn.addEventListener("click",()=>{
    window.open("https://github.com/moonrose93/Interactive-rating-component-React.js.git");
});

fourthProjectPageMobileBtn.addEventListener("click",()=>{
    window.open("https://sunny-gingersnap-fc6343.netlify.app/");
});


const fifthProjectCodeMobileBtn = document.getElementById("fifth-project-code-mobile");

const fifthProjectPageMobileBtn = document.getElementById("fifth-project-page-mobile");

fifthProjectCodeMobileBtn.addEventListener("click",()=>{
    window.open("https://github.com/moonrose93/movie-app-react.git");
});

fifthProjectPageMobileBtn.addEventListener("click",()=>{
    window.open("https://sage-flan-4c8d1d.netlify.app/");
});


const sixthProjectCodeMobileBtn = document.getElementById("sixth-project-code-mobile");

const sixthProjectPageMobileBtn = document.getElementById("sixth-project-page-mobile");

sixthProjectCodeMobileBtn.addEventListener("click",()=>{
    window.open("https://github.com/moonrose93/advice-generator-app-main.git");
});

sixthProjectPageMobileBtn.addEventListener("click",()=>{
    window.open("https://funny-brigadeiros-ed6c53.netlify.app/");
});


