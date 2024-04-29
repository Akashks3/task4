
//json resume

const resumedata={
    "about me":[
        { 
"about":"BCA fresher with a strong in computer application ,programming languages,and technical skills.I'M self learner and team player eager to contribute to a organization's success by leveraging my knowledge and passion for technology.Motivated to learn and grow ,seeking a challenging opportunity to apply my skills and gain practical experience in the field of computer",
}
],
"contact":[
    {
    "name":"akash",
    "email": "saraakas4342@gmail.com",
    "phone": "6383221660",
    "url":"https://jopubop03u7etplptg3uba.on.drv.tw/www.akaskcv.com/",
}
],
    "CERTIFICATION":[
      {
        "CERTIFICATION 1":"Javascript Infosys on sep 2023",
        "CERTIFICATION 2":"google for education partner cerificated for Python on aug 2023",
      }
    ],
    "education": [
      {
        "Institution": "University of madras",
        "degree": "Bachelor of computer application",
        "name of collage": "drbccc hindu collage",
        "name of ":"",
      }
    ],
    "hard skills":[
      "JavaScript",
      "mysql",
      "Node.js",
      "HTML",
      "php",
      "CSS"
    ],
    "soft skills":[
        "Teamwork & communication",
              "Self-learning",
              "Time management",
            ],
    "project":[
        "Web Curriculum vitae",
        "Vaccination Alert For Infants portal",

    ],
    };
console.log(resumedata);
    //  for loop
    
    const resumeData =    { "about me":[
      { 
"about":"BCA fresher with a strong in computer application ,programming languages,and technical skills.I'M self learner and team player eager to contribute to a organization's success by leveraging my knowledge and passion for technology.Motivated to learn and grow ,seeking a challenging opportunity to apply my skills and gain practical experience in the field of computer",
}
],
"contact":[
  {
  "name":"akash",
  "email": "saraakas4342@gmail.com",
  "phone": "6383221660",
  "url":"https://jopubop03u7etplptg3uba.on.drv.tw/www.akaskcv.com/",
}
],
  "CERTIFICATION":[
    {
      "CERTIFICATION 1":"Javascript Infosys on sep 2023",
      "CERTIFICATION 2":"google for education partner cerificated for Python on aug 2023",
    }
  ],
  "education": [
    {
      "Institution": "University of madras",
      "degree": "Bachelor of computer application",
      "name of collage": "drbccc hindu collage",
      "year of passing":"2002",
    }
  ],
  "hard skills":[
    "JavaScript",
    "mysql",
    "Node.js",
    "HTML",
    "php",
    "CSS"
  ],
  "soft skills":[
      "Teamwork & communication",
            "Self-learning",
            "Time management",
          ],
  "project":[
      "Web Curriculum vitae",
      "Vaccination Alert For Infants portal",

  ],
  }
;

for (let i = 0; i < resumeData.education.length; i++) {
  let f=resumeData.education[i];
  console.log(f["name of collage"]);
}


resumeData.education.forEach((education) => {
  console.log(education["year of passing"]);
});
for (const education of resumeData.education) {
  console.log(education.Institution);
}

    