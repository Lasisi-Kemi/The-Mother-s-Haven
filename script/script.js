let interest;
let changeColor;
let selectedInterest = [];
let selectedProfile = [];
let backToTop;
let askQuestion;
let slider;

//Animation
window.addEventListener('load', () => {
    AOS.init({
     offset: 120, // offset (in px) from the original trigger point
     delay: 200, // values from 0 to 3000, with step 50ms
     duration: 1000, // values from 0 to 3000, with step 50ms
     easing: 'ease-in-out', // default easing for AOS animations
     once: false, // whether animation should happen only once - while scrolling down
     mirror: true,
    });
  });
//animation ends here

// Get all navigation links
let navLinks = document.querySelectorAll('.navigation-links');
navLinks.forEach(function(navLink) {
  navLink.addEventListener('click', function() {
    navLinks.forEach(function(link) {
      link.classList.remove('active');
    });
    this.classList.add('active');
  });
});

function myInterest(added) {
    if(selectedInterest.includes(added)) {
        alert("you can't select the same box twice")
        delete selectedInterest[selectedInterest.indexOf(added)];
        interest = document.getElementById(`interest-${added}`);
        interest.style.backgroundColor = "ffffff";
    }else {
        if(selectedInterest.length < 5) {
            interest = document.getElementById(`interest-${added}`);
            interest.style.backgroundColor = "rgba(255, 219, 236, 1)";
            selectedInterest.push(added);
        }else{
            alert("you can't select more than five");
        }
    }   
}

/*backtotop */

backToTop = document.querySelector("#backToTop"); 
window.addEventListener('scroll', () => {
    let position = window.scrollY
    if(position > 300) {
        backToTop.style.display = "block"
    }
    else {
        backToTop.style.display = "none"
    }
})

backToTop.addEventListener("click", () => {
    document.body.scrollTop = 0 //For Safari
    document.documentElement.scrollTop = 0 //For chrome, Firefox, IE and Opera
})

/* backtotop ends here */


let communityFilters = document.querySelectorAll('#community-filter li'); 
let communityGallery = document.querySelectorAll('#community-profile-news-filters .community-filters-section-array .community-filters-section-list'); 
for(let i=0; i<communityFilters.length; i++) {
    communityFilters[i].addEventListener('click', function(e) {
        e.preventDefault();
        for(let j=0; j<communityFilters.length; j++) {
            communityFilters[j].classList.remove("active")
        }
        communityFilters[i].classList.add("active")
        let dataFilter = communityFilters[i].getAttribute("data-filter")
        for(let k=0; k<communityGallery.length; k++) {
            if(dataFilter === "*") {
                communityGallery[k].style.display = "flex"
                communityGallery[k].style.flexDirection = "column" 
            }
            else if(communityGallery[k].getAttribute("data-filter") === dataFilter) {
                //console.log("hmm")
                communityGallery[k].style.display = "flex"
                communityGallery[k].style.flexDirection = "column"
            }
            else {  
                communityGallery[k].style.display = "none"   
            }
        }
        
        AOS.refresh()
    });
};

//jQuery('#community-filters-section-array').css("overflow-y", "scroll");


//privacy pop up
window.onload = function() {
    document.getElementById('privacy-pop').style.display = 'block';
}

document.getElementById('privacy-acknowledge').addEventListener('click', function() {
    document.getElementById('privacy-popup').style.display = 'none'
})
/*privacy pop up ends here*/

function askQuestionPrompt(){
    prompt('Share with us');
}

function notificationButton() {
    if (this.value === '1') {
        // turn on notification
      } else {
        // turn off notification
      };
}

function setUp () {
    askQuestion = document.querySelector('.ask-a-question-tags-questions');
    slider = document.querySelector('.slider');

    askQuestion.addEventListener('click', askQuestionPrompt);
    slider.addEventListener('input', notificationButton)
}

setUp();