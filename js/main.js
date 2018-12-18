const projects = [{
    name: "Harper",
    skills: "HTML & CSS",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, modi harum voluptatum nobis aut cupiditate eligendi est, illum, libero ratione fuga asperiores et? Laborum enim laboriosam quidem architecto fuga ducimus?",
    image: "./assets/projects/harper.png",
    siteURL: "TBD",
    githubURL: "https://github.com/LeyaHatoum/leya_hatoum_project2"
  },
  {
    name: "Gordon Ramsay Insult",
    skills: "Jquery, Javascript, HTML & CSS",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, modi harum voluptatum nobis aut cupiditate eligendi est, illum, libero ratione fuga asperiores et? Laborum enim laboriosam quidem architecto fuga ducimus?",
    image: "./assets/projects/gordonRamsay.png",
    siteURL: "https://leyahatoum.github.io/leya_hatoum_project3/",
    githubURL: "https://github.com/LeyaHatoum/leya_hatoum_project3"
  },
  {
    name: "Rick & Morty API",
    skills: "React, Javascript, HTML & CSS",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, modi harum voluptatum nobis aut cupiditate eligendi est, illum, libero ratione fuga asperiores et? Laborum enim laboriosam quidem architecto fuga ducimus?",
    image: "./assets/projects/rickAndMorty.png",
    siteURL: "https://project-5-bed09.firebaseapp.com/",
    githubURL: "https://github.com/LeyaHatoum/leya_hatoum_project5"
  },
  {
    name: "Meet Me Halfway",
    skills: "Firebase, React, Javascript, HTML & CSS",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, modi harum voluptatum nobis aut cupiditate eligendi est, illum, libero ratione fuga asperiores et? Laborum enim laboriosam quidem architecto fuga ducimus?",
    image: "./assets/projects/middl.png",
    siteURL: "https://meet-halfway-905ad.firebaseapp.com/",
    githubURL: "https://github.com/LeyaHatoum/project6"
  }
]

const skills = [{
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
  icon: "<img src='./assets/icons/skillsSass.svg'>",
  name: "Sass"
}, {
  icon: "<img src='./assets/icons/skillsGit.svg'>",
  name: "Git"
}, {
  icon: "<img src='./assets/icons/skillsVSCode.svg'>",
  name: "VSCode"
}, {
  icon: "<img src='./assets/icons/skillsSketch.svg'>",
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


AOS.init();

projects.map((project, index) => {
  const projectName = $("<h3>").text(project.name);
  const projectSkills = $("<h4>").text(project.skills);
  const projectDesc = $("<p>").text(project.description);
  const projectInfo = $("<div class='projects__projectInfo'>").append(projectName, projectSkills, projectDesc);
  const projectSite = $("<a class='projects__projectButtons--link'>").text("site").attr({"href": project.siteURL, "target": "_blank"});
  const projectCode = $("<a class='projects__projectButtons--link'>").text("code").attr({"href": project.githubURL, "target": "_blank"});
  const projectButtons = $("<div class='projects__projectButtons visibilityHidden'>").append(projectSite, projectCode)
  const projectImage = $("<img class='projects__projectImage'>").attr("src", project.image);
  const projectLinks = $("<div class='projects__projectLinks'>").append(projectButtons, projectImage);
  console.log("index", index)
  const singleProject = $("<div class='projects__singleProject wrapper'>").append(projectInfo, projectLinks)
  index % 2 === 0 ? singleProject.addClass("projects__singleProject--flip") : null ;
  $(".projects").append(singleProject);
});

const skillList = $("<div class='skills__list wrapper'>");
skills.map(skill => {
  const skillName = $("<h5>").text(skill.name);
  const skillGroup = $("<div class='skills__skill'>").append(skill.icon, skillName);
  skillList.append(skillGroup);
});
$(".skills").append(skillList);


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

$(".projects__projectLinks").on("mouseover", function () {
  $(this).children(".projects__projectButtons").removeClass("visibilityHidden")
})

$(".projects__projectLinks").on("mouseout", function () {
  $(this).children(".projects__projectButtons").addClass("visibilityHidden")
})

$(".menu__hamburger").on("click", function (){
  $(".menu__list").toggleClass("menu--show")
  $(".menu__hamburger").children(".fas").toggleClass("fa-bars").toggleClass("fa-times")
})