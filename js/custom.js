// the first two lines corespond to the mixitup plugin.
// the appropriate element is selected and the plugin is applyed to it. 

var containerE1 = document.querySelector('.mx-container');
var mixer = mixitup(containerE1);

let pageContents = {
  home: {
    name: `I'm Kostas Panagiotakis`,
    article: `A</span><span class="invisible">`,
    occupation: '[" Web Developer.", " Graphic Artist.", "3D Visualizer"]',
    description: `In a professional context it often happens that private clients corder a publication to be made.`,
    socials: {
      s1: {
        link: "https://www.linkedin.com/in/panagiotakiskostas/",
        icon: `<i class="lab la-linkedin-in"></i>`
      },
      s2: {
        link: "https://www.deviantart.com/panagiotakis",
        icon: `<i class="lab la-deviantart"></i>`
      },
      s3: {
        link: "https://github.com/koiranos",
        icon: `<i class="lab la-github"></i>`
      }
    }

  },
  about: {},
  resume: {},
  skills: {},
  work: {
    workControls: `<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>`,
    work1: {
      type: 'Web Development Project',
      title: `Website <span class="base-color">Design and Development</span>`,
      description: 'Gas station construction company in Greece.',
      images: {
        image1: './images/p1img1.jpg',
        image2: './images/p1img2.jpg',
        image3: './images/p1img3.jpg',
      },
      analysis: `This website was created after a thourough discustion with the client regarding the structure and overall design of the layout. <br>The technologies that were used are HTML, CSS, Javascript.`
    },
    work2: {
      type: 'Digital Art Project',
      title: `Painting <span class="base-color">Digital Art</span>`,
      description: 'Hand of Hope',
      images: {
        image1: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/598c4479-fd0f-4306-8191-2b68bd1765d1/dbjultq-4ccd05e6-c01f-46df-97e4-30b79db4767d.jpg/v1/fill/w_1280,h_1811,q_75,strp/magic_hand_by_panagiotakis_dbjultq-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xODExIiwicGF0aCI6IlwvZlwvNTk4YzQ0NzktZmQwZi00MzA2LTgxOTEtMmI2OGJkMTc2NWQxXC9kYmp1bHRxLTRjY2QwNWU2LWMwMWYtNDZkZi05N2U0LTMwYjc5ZGI0NzY3ZC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.4KB3KSVQgoFIyyfpNIW6qgCbZZ3GnxIaFbw4Md17iyo',
      },
      analysis: `Have you ever felt that your actions or words have a possitive impact to others?<br>By helping others you change the their route hopefully to a better one.<br>This is the invisible power that Gob embraces you with and it is the mightest of all.<br>The painting was done in photoshop with a wacom tablet.`
    },
    work3: {
      type: '3D Graphics Project',
      title: `3D <span class="base-color">Visualization</span>`,
      description: 'Living Room Interior Design',
      images: {
        image1: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/598c4479-fd0f-4306-8191-2b68bd1765d1/ddz2ume-1009c958-212f-4d1d-9bcb-ace6cbc247dc.jpg/v1/fill/w_1600,h_900,q_75,strp/home_visualization___living_room__1_by_panagiotakis_ddz2ume-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD05MDAiLCJwYXRoIjoiXC9mXC81OThjNDQ3OS1mZDBmLTQzMDYtODE5MS0yYjY4YmQxNzY1ZDFcL2RkejJ1bWUtMTAwOWM5NTgtMjEyZi00ZDFkLTliY2ItYWNlNmNiYzI0N2RjLmpwZyIsIndpZHRoIjoiPD0xNjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Q-NcUhe35Fc_kanpt9v9hz0H8p7thokxMrrAKYdICrY',
        image2: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/598c4479-fd0f-4306-8191-2b68bd1765d1/ddz2uso-b732c79e-4bbd-423c-966c-3e6bb0bb9859.jpg/v1/fill/w_1280,h_720,q_75,strp/home_visualization___living_room__1_by_panagiotakis_ddz2uso-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03MjAiLCJwYXRoIjoiXC9mXC81OThjNDQ3OS1mZDBmLTQzMDYtODE5MS0yYjY4YmQxNzY1ZDFcL2RkejJ1c28tYjczMmM3OWUtNGJiZC00MjNjLTk2NmMtM2U2YmIwYmI5ODU5LmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.1NfD4eo_oE8GzFdbZaqvn2mTeI_PQTv2KxY_l_rWovc',
        image3: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/598c4479-fd0f-4306-8191-2b68bd1765d1/ddz2ume-1009c958-212f-4d1d-9bcb-ace6cbc247dc.jpg/v1/fill/w_1600,h_900,q_75,strp/home_visualization___living_room__1_by_panagiotakis_ddz2ume-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD05MDAiLCJwYXRoIjoiXC9mXC81OThjNDQ3OS1mZDBmLTQzMDYtODE5MS0yYjY4YmQxNzY1ZDFcL2RkejJ1bWUtMTAwOWM5NTgtMjEyZi00ZDFkLTliY2ItYWNlNmNiYzI0N2RjLmpwZyIsIndpZHRoIjoiPD0xNjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Q-NcUhe35Fc_kanpt9v9hz0H8p7thokxMrrAKYdICrY',
      },
      analysis: `This is an interior design sudjestion for the living room area of a house in Kozani, Greece.<br> 3D Studio Max was used for the models.<br>The scene was rendered with V-ray renderer.<br>The post production was done in Photoshop.`
    },
    work4: {
      type: 'Web Development Project',
      title: `Greek TV Channels <span class="base-color">Web Application</span>`,
      description: 'Website for watching Greek TV channels online.',
      images: {
        image1: './images/p4img1.jpg',
        image2: './images/p4img2.jpg',
        image3: './images/p4img3.jpg',
      },
      analysis: `I created this web application because I do not own a TV and I wanted to be able to watch the national and private networks in my country.<br>The site was make with React and Next.js. A bootswatch theme was used for styling and two react players for previewing the channels.`
    }
  },
  blog: {},
  contact: {}
}

// this function adds the appropriate content to the bootstrap modal.

function workItemContent(itemName) {

  let objectWork = pageContents.work[itemName]; 
  document.querySelector('#workItemModalLabel').textContent = objectWork.type;
  document.querySelector('#project-title').innerHTML = objectWork.title;
  document.querySelector('#project-description').textContent = objectWork.description;

  let itemImages = Object.keys(objectWork.images);
  let workImageContent = ``;
  for(let i = 0; i < itemImages.length; i++) {
    workImageContent += `<div class="carousel-item ${i===0? `active` : ``}">
    <img id="project-image-${i}" src="${objectWork.images[itemImages[i]]}" class="d-block" alt="img${i}">
  </div>`;
  }
  itemImages.length != 1? workImageContent += pageContents.work.workControls : ``;
  
  document.querySelector('#image-content').innerHTML = workImageContent;
  document.querySelector('#project-analysis').innerHTML = objectWork.analysis;
}

$(document).ready(function() {

  // the below query selector implements pagination to the site

  $('#pagepiling').pagepiling({
    scrollingSpeed: 800,
    verticalCentered: true,
    touchSensitivity: 2000,
    navigation: {
      'textColor': '#fff',
      'bulletsColor': '#fff',
      'position': 'right',
      'tooltips': ['HOME', 'ABOUT ', 'RESUME', 'SKILLS', 'WORK ', 'CONTACT ']
    },
    sectionsColor: ['#222222', '#222222', '#222222', '#222222', '#222222', '#222222', '#222222'],
  });

  // the folowing snipet is used to prevent spaming

  let myMail = document.querySelectorAll('.hidden-mail').forEach(item => {
    item.addEventListener("click", function(event) {
      event.preventDefault();
      let mail = event.target.attributes[1].value.replace(/AT/, '@').replace(/DOT/, '.');
      this.classList.remove("font-italic");
      this.innerHTML = mail;
    });
  });

  // following code needs to be removed and implemented with CSS

  let hoveringWork = document.querySelectorAll('.work-item').forEach(item => {
    item.addEventListener("mouseover", function() {
      item.children[1].classList.add("shower");
    });

    item.addEventListener("mouseleave", function() {
      item.children[1].classList.remove("shower");
    })
  });
  
});
