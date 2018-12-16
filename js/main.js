const projects = [{
    name: "Harper",
    skills: "HTML & CSS",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, modi harum voluptatum nobis aut cupiditate eligendi est, illum, libero ratione fuga asperiores et? Laborum enim laboriosam quidem architecto fuga ducimus?",
    image: "",
    siteURL: "TBD",
    githubURL: "https://github.com/LeyaHatoum/leya_hatoum_project2"
  },
  {
    name: "Gordon Ramsay Insult",
    skills: "Jquery, Javascript, HTML & CSS",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, modi harum voluptatum nobis aut cupiditate eligendi est, illum, libero ratione fuga asperiores et? Laborum enim laboriosam quidem architecto fuga ducimus?",
    image: "",
    siteURL: "https://leyahatoum.github.io/leya_hatoum_project3/",
    githubURL: "https://github.com/LeyaHatoum/leya_hatoum_project3"
  },
  {
    name: "Rick & Morty API",
    skills: "React, Javascript, HTML & CSS",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, modi harum voluptatum nobis aut cupiditate eligendi est, illum, libero ratione fuga asperiores et? Laborum enim laboriosam quidem architecto fuga ducimus?",
    image: "",
    siteURL: "https://project-5-bed09.firebaseapp.com/",
    githubURL: "https://github.com/LeyaHatoum/leya_hatoum_project5"
  },
  {
    name: "Meet Me Halfway",
    skills: "Firebase, React, Javascript, HTML & CSS",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, modi harum voluptatum nobis aut cupiditate eligendi est, illum, libero ratione fuga asperiores et? Laborum enim laboriosam quidem architecto fuga ducimus?",
    image: "",
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

projects.map(project => {
  const projectName = $("<h3>").text(project.name);
  const projectSkills = $("<h4>").text(project.skills);
  const projectDesc = $("<p>").text(project.description);
  const projectInfo = $("<div>").append(projectName, projectSkills, projectDesc);
  const projectSite = $("<a>").text("site").attr("href", project.siteURL);
  const projectCode = $("<a>").text("code").attr("href", project.githubURl);
  //You need to add the image in the background
  const projectLinks = $("<div>").append(projectSite, projectCode);
  $(".projects").append(projectInfo, projectLinks);
  console.log("I'm running")
});

skills.map(skill => {
  const skillName = $("<h5>").text(skill.name);
  const skillGroup = $("<div>").append(skill.icon, skillName);
  $(".skills").append(skillGroup);
  console.log("skills is running too")
});