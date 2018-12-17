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
  icon: "<i class='fab fa-js-square'></i>",
  name: "Javacsript"
}, {
  icon: "<img src='./assets/icons/jQuery.png'>",
  name: "jQuery"
}, {
  icon: "<i class='fab fa-react'></i>",
  name: "React"
}, {
  icon: "<img src='./assets/icons/firebase.png'>",
  name: "Firebase"
}, {
  icon: "<i class='fab fa-html5'></i>",
  name: "HTML5"
}, {
  icon: "<i class='fab fa-css3-alt'></i>",
  name: "CSS3"
}, {
  icon: "<i class='fab fa-sass'></i>",
  name: "Sass"
}, {
  icon: "<i class='fab fa-git-square'></i>",
  name: "Git"
}, {
  icon: "<img src='./assets/icons/vsCode.png'>",
  name: "VSCode"
}, {
  icon: "<i class='fab fa-sketch'></i>",
  name: "Sketch"
}, {
  icon: "<i class='fab fa-adobe'></i>",
  name: "Adobe Suite"
}
]

projects.map((project, index) => {
  const projectName = $("<h3>").text(project.name);
  const projectSkills = $("<h4>").text(project.skills);
  const projectDesc = $("<p>").text(project.description);
  const projectInfo = $("<div class='projects__projectInfo'>").append(projectName, projectSkills, projectDesc);
  const projectSite = $("<a class='projects__projectButtons--link'>").text("site").attr({"href": project.siteURL, "target": "_blank"});
  const projectCode = $("<a class='projects__projectButtons--link'>").text("code").attr({"href": project.githubURL, "target": "_blank"});
  const projectButtons = $("<div class='projects__projectButtons'>").append(projectSite, projectCode)
  const projectImage = $("<img class='projects__projectImage'>").attr("src", project.image);
  const projectLinks = $("<div class='projects__projectLinks'>").append(projectButtons, projectImage);
  console.log("index", index)
  const singleProject = $("<div class='projects__singleProject'>").append(projectInfo, projectLinks)
  index % 2 === 0 ? singleProject.addClass("projects__singleProject--flip") : null ;
  $(".projects").append(singleProject);
  console.log("I'm running")
});

const skillList = $("<div class='skills__list'>");
skills.map(skill => {
  const skillName = $("<h5>").text(skill.name);
  const skillGroup = $("<div class='skills__skill'>").append(skill.icon, skillName);
  skillList.append(skillGroup);
  console.log("skills is running too")
});
$(".skills").append(skillList);


$("section").waypoint(function (direction) {
  if (direction == "down"){
    $(".menu__list--item").removeClass("menu__list--itemActive");
    $(`#${this.element.id}Link`).addClass("menu__list--itemActive");
    $(`#${this.element.id}`).addClass("sectionTransition--activate");
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