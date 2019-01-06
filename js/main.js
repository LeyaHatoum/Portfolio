//ARRAYS FOR PROJECTS
//----------------------------------------------------------------------
const projects = [
  {
    name: "What Does Gordon Think?",
    skills: "Jquery, Javascript, HTML & CSS, Sass, Git, Responsive, Accessible",
    description: "Ever wanted to get personally insulted by Gordon Ramsay? This site allows the user to put in the name of a dish and generates a personalized Gordon Ramsay insult in a gif.",
    image: "./assets/projects/gordonRamsay.png",
    siteURL: "https://leyahatoum.github.io/leya_hatoum_project3/",
    githubURL: "https://github.com/LeyaHatoum/leya_hatoum_project3"
  },
  {
    name: "Harper",
    skills: "HTML & CSS, Git, Sass, Responsive, Accessible",
    description: "A fully responsive multi-page website",
    image: "./assets/projects/harper.png",
    siteURL: "http://leya.space/Harper/",
    githubURL: "https://github.com/LeyaHatoum/leya_hatoum_project2"
  },
  {
    name: "The Multiverse",
    skills: "Rick & Morty API, React, Javascript, HTML & CSS, Sass, Git, Responsive, Accessible",
    description: "This site is based on the Rick & Morty cartoon series. The user can explore different dimensions, see the planets in each dimension, and check out all the residents of each planet. All the data displayed is retrieved from two different endpoints of the Rick & Morty API.",
    image: "./assets/projects/rickAndMorty.png",
    siteURL: "https://project-5-bed09.firebaseapp.com/",
    githubURL: "https://github.com/LeyaHatoum/leya_hatoum_project5"
  },
  {
    name: "Middl",
    skills: "Yelp! API, Google Geocode API, Google Maps API, Firebase, React, Javascript, HTML & CSS, Group Programming, Sass, Git, Responsive, Accessible",
    description: "Middl is an app that helps you find a bar or a coffee shop halfway in between the user and their date, it also factors in both the user and their date's modes of transportation. The results are retrieved using several APIs. The app makes use of the Firebase database and User Authentication features so that users can save their default address and mode of transportation, and can even message each other.",
    image: "./assets/projects/middl.png",
    siteURL: "https://meet-halfway-905ad.firebaseapp.com/",
    githubURL: "https://github.com/LeyaHatoum/project6"
  }
]

//ARRAYS FOR SKILLS
//----------------------------------------------------------------------
const skills = [
  {
    icon: "<img src='./assets/icons/skillsJS.svg'>",
    name: "Javacsript"
  }, {
    icon: "<img src='./assets/icons/skillsJQUERY.svg'>",
    name: "jQuery"
  }, {
    icon: "<img src='./assets/icons/skillsReact.svg'>",
    name: "React"
  }, {
    icon: "<img src='./assets/icons/skillsFirebase.svg'>",
    name: "Firebase"
  }, {
    icon: "<img src='./assets/icons/skillsHTML5.svg'>",
    name: "HTML5"
  }, {
    icon: "<img src='./assets/icons/skillsCSS3.svg'>",
    name: "CSS3"
  }, {
    icon: "<img src='./assets/icons/skillsSASS.svg'>",
    name: "Sass"
  }, {
    icon: "<img src='./assets/icons/skillsGit.svg'>",
    name: "Git"
  }, {
    icon: "<img src='./assets/icons/skillsVSCode.svg'>",
    name: "VSCode"
  }, {
    icon: "<img src='./assets/icons/skillsSKETCH.svg'>",
    name: "Sketch"
  }, {
    icon: "<img src='./assets/icons/skillsPSD.svg'>",
    name: "Photoshop"
  }, {
    icon: "<img src='./assets/icons/skillsAI.svg'>",
    name: "Illustrator"
  }, {
    icon: "<img src='./assets/icons/skillsID.svg'>",
    name: "InDesign"
  }, {
    icon: "<img src='./assets/icons/skillsAE.svg'>",
    name: "After Effects"
  }
]

//INITIALIZE LIBRARIES
//----------------------------------------------------------------------
AOS.init();

// MAP THROUGH PROJECTS & SKILLS
//----------------------------------------------------------------------
projects.map((project, index) => {
  const projectName = $("<h3>").text(project.name);
  const projectSkills = $("<h4>").text(project.skills);
  const projectDesc = $("<p>").text(project.description);
  const projectSite = $("<a class='projects__projectButtons--link'>").text("site").attr({"href": project.siteURL, "target": "_blank"});
  const projectCode = $("<a class='projects__projectButtons--link'>").text("code").attr({"href": project.githubURL, "target": "_blank"});
  const projectButtons = $("<div class='projects__projectButtons'>").append(projectSite, projectCode)
  const projectInfo = $("<div class='projects__projectInfo'>").append(projectName, projectSkills, projectDesc, projectButtons);
  const projectImage = $("<img class='projects__projectImage'>").attr("src", project.image);
  const projectLinks = $("<div class='projects__projectLinks'>").append(projectImage);
  const singleProject = $(`<div class='projects__singleProject wrapper'
  data-aos='fade-up'
  data-aos-offset='50'
  data-aos-delay='50'
  data-aos-duration='1000'
  data-aos-easing='ease-in-out'
  >`).append(projectInfo, projectLinks)
  index % 2 === 0 ? singleProject.addClass("projects__singleProject--flip") : null ;
  $(".projects").append(singleProject);
});

const skillList = $("<div class='skills__list wrapper'>");
skills.map(skill => {
  const skillName = $("<h5>").text(skill.name);
  const skillGroup = $(`<div class='skills__skill'
  data-aos='fade-up'
  data-aos-offset='50'
  data-aos-delay='100'
  data-aos-duration='500'
  data-aos-easing='ease-in-out'
  >`).append(skill.icon, skillName);
  skillList.append(skillGroup);
});
$(".skills").append(skillList);


// STRIKE THROUGH NAV ON SCROLL
// ONLY APPEARS ON OVER 550PX -- RESIZE NOT FUNCTIONAL
//----------------------------------------------------------------------
if ($(window).width() > 550) {
  // AOS.init();
  $("section").waypoint(function (direction) {
    if (direction == "down"){
      $(".menu__list--item").removeClass("menu__list--itemActive");
      $(`#${this.element.id}Link`).addClass("menu__list--itemActive");
    }
  },{offset: "50%"});
  
  $("section").waypoint(function (direction) {
    if (direction == "up"){
      $(".menu__list--item").removeClass("menu__list--itemActive");
      $(`#${this.element.id}Link`).addClass("menu__list--itemActive");
    }
  },{offset: "-50%"});
  
  $("#home").waypoint(function () {
    $(".menu__list--item").removeClass("menu__list--itemActive");
  })
}

$(window).on("resize", function () {
  if ($(window).width() > 550) {
    $("section").waypoint(function (direction) {
      if (direction == "down") {
        $(".menu__list--item").removeClass("menu__list--itemActive");
        $(`#${this.element.id}Link`).addClass("menu__list--itemActive");
      }
    }, { offset: "50%" });

    $("section").waypoint(function (direction) {
      if (direction == "up") {
        $(".menu__list--item").removeClass("menu__list--itemActive");
        $(`#${this.element.id}Link`).addClass("menu__list--itemActive");
      }
    }, { offset: "-50%" });

    $("#home").waypoint(function () {
      $(".menu__list--item").removeClass("menu__list--itemActive");
    })
  }
})

$(window).on("resize", function () {
  if ($(window).width() < 551) {
    $("section").waypoint(function (direction) {
      if (direction == "down") {
        $(".menu__list--item").removeClass("menu__list--itemActive");
      }
    }, {
      offset: "50%"
    });

    $("section").waypoint(function (direction) {
      if (direction == "up") {
        $(".menu__list--item").removeClass("menu__list--itemActive");
      }
    }, {
      offset: "-50%"
    });

    $("#home").waypoint(function () {
      $(".menu__list--item").removeClass("menu__list--itemActive");
    })
  }
})




//MOBILE HAMBURGER FUNCTIONALITY -- CHANGES ICON AND TOGGLES NAV
//----------------------------------------------------------------------
$(".menu__hamburger").on("click", function (){
  $(".menu__list").toggleClass("menu--show")
  $(".menu__hamburger").children(".fas").toggleClass("fa-bars").toggleClass("fa-times")
})


//ANIME.JS MOVING CIRCLE
//----------------------------------------------------------------------
const myAnime = document.getElementById('myAnime');
const numberOfEls = 50;
const duration = 5500;
const delay = duration / numberOfEls;

let tl = anime.timeline({
  duration: delay,
  complete: function () {
    tl.restart();
  }
});

function createEl(i) {
  let el = document.createElement('div');
  const rotate = (360 / numberOfEls) * i;
  const translateY = -50;
  const hue = Math.round(360 / numberOfEls * i);
  el.classList.add('el');
  el.style.backgroundColor = 'hsl(' + hue + ', 40%, 60%)';
  el.style.transform = 'rotate(' + rotate + 'deg) translateY(' + translateY + '%)';
  tl.add({
    begin: function () {
      anime({
        targets: el,
        backgroundColor: ['hsl(' + hue + ', 40%, 60%)', 'hsl(' + hue + ', 60%, 80%)'],
        rotate: [rotate + 'deg', rotate + 10 + 'deg'],
        translateY: [translateY + '%', translateY + 10 + '%'],
        scale: [1, 1.25],
        opacity: [1],
        easing: 'easeInOutSine',
        direction: 'alternate',
        duration: duration * .1
      });
    }
  });
  myAnime.appendChild(el);
};

for (let i = 0; i < numberOfEls; i++) createEl(i);

//Trying to make it interactive on mouseover/hover -- check anime library for that though
// $(".el").on("mouseover", function () {
//   $(this)
// }