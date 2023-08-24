const servicecards = [
    {
        iconclass: 'fas fa-atom',
        header: "Data science",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis mattis aliquam faucibus purus in. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar."
    },
    {
        iconclass: 'fas fa-brain',
        header: "Machine Learning",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus eget nunc scelerisque viverra mauris in aliquam. In ornare quam viverra orci sagittis eu volutpat."
    },
    {
        iconclass: "fa-solid fa-circle-nodes",
        header: "Deep learning",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus ultricies tristique nulla aliquet enim tortor at auctor urna. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Massa sapien faucibus et molestie ac."
    },
];

function generateworkCards(servicecards) {
    let html = "";
    for (const card of servicecards) {
        html += `
            <div class="card">
                <div class="icon"><i class="${card.iconclass}"></i></div>
                <div class="text">
                    <h3>${card.header}</h3>
                    <p>${card.paragraph}</p>
                </div>
            </div>
        `;
    }
    return html;
}
document.addEventListener("DOMContentLoaded",() => {
    const generatedHTML = generateworkCards(servicecards);
    let servicescards = document.getElementById("myservicecards");
    servicescards.innerHTML = generatedHTML;
});
/////////////////
const workingcards = [
    {
        iconclass: "fa-solid fa-database",
        header: "1-Data analysis and preprocessing",
        paragraph: "I assist in analyzing and preparing large datasets for machine learning models, ensuring data quality."
    },
    {
        iconclass: "fa-solid fa-laptop-code",
        header: "2-Model development and training",
        paragraph: "I design and develop machine learning models tailored to specific business needs This involves selecting appropriate algorithms, fine-tuning model parameters, and training the models using available data"
    },
    {
        iconclass: "fa-solid fa-code",
        header: "3-Model evaluation and validation",
        paragraph: "I evaluate the performance of machine learning models, assessing their accuracy, precision, recall, and other relevant metrics. I also validate the models to ensure their robustness and generalizability."
    },
    {
        iconclass: "fa-solid fa-microchip",
        header: "4-Deployment and integration",
        paragraph: "I deploy machine learning models into production environments, integrating them into existing systems or developing new systems to leverage their capabilities."
    },
    {
        iconclass: "fa-solid fa-bug",
        header: "5-Continuous monitoring and improvement",
        paragraph: "I establish monitoring systems to track the performance of deployed models, making necessary improvements and updates to ensure they remain effective and up-to-date."
    },
    {
        iconclass: "fa-solid fa-user",
        header: "6-Customized solutions",
        paragraph: "I collaborate with clients to understand their unique business challenges, developing customized machine learning solutions that address their specific needs and objectives."
    },
];

function generateworkCards(workingcards) {
    let html = "";
    for (const card of workingcards) {
        html += `
            <div class="card">
                <div class="icon"><i class="${card.iconclass}"></i></div>
                <div class="text">
                    <h3>${card.header}</h3>
                    <p>${card.paragraph}</p>
                </div>
            </div>
        `;
    }
    return html;
}
document.addEventListener("DOMContentLoaded",() => {
    const generatedHTML = generateworkCards(workingcards);
    let servicescards = document.getElementById("workingcards");
    servicescards.innerHTML = generatedHTML;
});

/////////////////////////////////////////////////////////////
const comments=[
    {
    icon:"fa-solid fa-star",
    paragraph:"I am truly impressed with the work of our machine learning engineer. They have transformed our data analysis and preprocessing process, ensuring the quality of our datasets. Their expertise in developing and training machine learning models has been instrumental in solving complex business problems. The accuracy and precision of the models they have built are outstanding, and their commitment to continuous monitoring and improvement is commendable. We are grateful to have such a talented professional on our team.",
    name:"Karim Ahmed",
    position:"ceo"
},
{
    icon:"fa-solid fa-star",
    paragraph:"Our machine learning engineer has exceeded our expectations in every aspect of their work. Their dedication to developing customized solutions for our unique business challenges has been remarkable. They collaborate closely with our team, understanding our objectives and tailoring the machine learning models to address our specific needs. The deployment and integration process was seamless, and the models are performing exceptionally well in our production environment. We appreciate their expertise and the value they bring to our organization.",
    name:"mohamed Hamdi",
    position:"back-end developer"
},
{
    icon:"fa-solid fa-star",
    paragraph:"I cannot praise our machine learning engineer enough for their exceptional work. Their abilities in model evaluation and validation have provided us with valuable insights into the performance and robustness of our machine learning models. Their expertise in data analysis and preprocessing has ensured the reliability of our datasets. The continuous monitoring and improvement they implement have allowed us to stay ahead in our industry. Their professionalism, knowledge, and dedication make them an invaluable asset to our team. We are incredibly satisfied with their work.",
    name:"Nancy Mahmoud",
    position:"data scientist"
}
]
function icongenerator(iconclass)
{
    let html="";
    for(let i=0;i<5;i++)
    {
        html += `
         <i class="${iconclass}" ></i>
        `;
    }
    return html;
}
function commentsgenerator(commentsicon)
{
    let html=""
    for (const comment of commentsicon) {
        html += `
        <div class="card">
            <div class="stars">${icongenerator(comment.icon)}</div>
            <p>${comment.paragraph}</p>
            <div class="person">
                <h2>${comment.name}</h2>
                <h3>${comment.position}</h3>
            </div>
        </div>
        `;
    }
    return html;
}
document.addEventListener("DOMContentLoaded",() => {
    const generatedHTML2 = commentsgenerator(comments);
    let commcards = document.getElementById("cc");
    commcards.innerHTML = generatedHTML2;
});
//////////////////////////////////////
window.onload=()=>
{
    let allelement = document.getElementById("button_all");
    let mlelement = document.getElementById("button_ml");
    let dlelement = document.getElementById("button_dl");
    let dselement = document.getElementById("button_ds");
    let facelement = document.getElementById("button_fac");
    
    const projects = [
        {
            projecttype: 5,
            image: "processproject.png",
            name: "process scheduling system",
            subtext: "data structure",
            iconclass: "fa-solid fa-location-arrow",
            reference: "https://github.com/Karimgebril09/process-scheduling-system"
        },
        {
            projecttype: 5,
            image: "paint.png",
            name: "paint for kids",
            subtext: "OOP",
            iconclass: "fa-solid fa-location-arrow",
            reference: "https://github.com/Karimgebril09/Paint-Project"
        },
        {
            projecttype: 4,
            image: "datascience1.jpg",
            name: "data science proj1",
            subtext: "anaylsis/visualization",
            iconclass: "fa-solid fa-location-arrow",
            reference: "#none"
        },
        {
            projecttype: 4,
            image: "datascience2.png",
            name: "data science proj2",
            subtext: "anaylsis/visualization",
            iconclass: "fa-solid fa-location-arrow",
            reference: "#none"
        }
        ,
        {
            projecttype: 3,
            image: "NN.jpg",
            name: "deeplearning proj1",
            subtext: "CNN",
            iconclass: "fa-solid fa-location-arrow",
            reference: "#none"
        }
        ,
        {
            projecttype: 2,
            image: "ml1.jpg",
            name: "machine learning proj1",
            subtext: "supervised learning",
            iconclass: "fa-solid fa-location-arrow",
            reference: "#none"
        }
    ];
    
    function updateProjectCards(type) {
        const generatedHTML = projectcardgenerator(projects, type);
        let projectcards = document.getElementById("pcards");
        projectcards.innerHTML = generatedHTML;
    }
    
    allelement.addEventListener("click", () => {
        resetButtonColors();
        allelement.style.backgroundColor = "orange";
        updateProjectCards(1);
    });
    
    mlelement.addEventListener("click", () => {
        resetButtonColors();
        mlelement.style.backgroundColor = "orange";
        updateProjectCards(2);
    });
    
    
    dlelement.addEventListener("click", () => {
        resetButtonColors();
        dlelement.style.backgroundColor = "orange";
        updateProjectCards(3);
    });
    
    dselement.addEventListener("click", () => {
        resetButtonColors();
        dselement.style.backgroundColor = "orange";
        updateProjectCards(4);
    });
    
    facelement.addEventListener("click", () => {
        resetButtonColors();
        facelement.style.backgroundColor = "orange";
        updateProjectCards(5);
    });
    
    function resetButtonColors() {
        allelement.style.backgroundColor = "white";
        mlelement.style.backgroundColor = "white";
        dselement.style.backgroundColor = "white";
        dlelement.style.backgroundColor = "white";
        facelement.style.backgroundColor = "white";
    }
    
    updateProjectCards(1);
    
    function projectcardgenerator(projects, type) {
        let html = "";
        for (const project of projects) {
            if (type === 1 || project.projecttype === type) {
                html += `
                    <div class="projectcard">
                        <div class="projectimage"><img src="${project.image}"></div>
                        <div class="textandlink">
                            <div class="projecttext">
                                <h2>${project.name}</h2>
                                <h5>${project.subtext}</h5>
                            </div>
                            <div class="projectlink">
                                <a href="${project.reference}"><i class="${project.iconclass}"></i></a>
                            </div>
                        </div>
                    </div>
                `;
            }
        }
        return html;
    }  
}

function changebg()
{
    var navbar=document.getElementById("h");
    var scrollvalue=window.scrollY;
 //   console.log(scrollvalue);
    if(scrollvalue<500)
    {
        navbar.classList.remove("bgcolor");
    }
    else{
        navbar.classList.add("bgcolor");
    }
}

window.addEventListener("scroll",changebg)