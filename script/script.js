let interest;
let changeColor;
let selectedInterest = [];
let backToTop;

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

/*let navbar = document.querySelector('#nav');
  window.addEventListener('scroll', () => {
    let position = window.scrollY
    if(position > 69) {
        navbar.classList.add("scrolled")
    }
    else {
        navbar.classList.remove("scrolled")
    }
})*/


let communityFilters = document.querySelectorAll('#community-filters li'); 
let communityGallery = document.querySelectorAll('#community-profile-news-filters .community-filters-section-array .community-profile-news-filters'); 
for(let i=0; i<communityFilters.length; i++) {
    communityFilters[i].addEventListener('click', function(e) {
        e.preventDefault();
        for(let j=0; j<communityFilters.length; j++) {
            communityFilters[j].classList.remove("active")
        }
        communityFilters[i].classList.add("active")
        let dataFilter = communityFilters[i].getAttribute("data-filter")
        for(let k=0; k<portfolioGallery.length; k++) {
            if(dataFilter === "*") {
                communityGallery[k].style.display = "flex"   
            }
            else if(communityGallery[k].getAttribute("data-filter") === dataFilter) {
                //console.log("hmm")
                communityGallery[k].style.display = "flex"
            }
            else {  
                communityGallery[k].style.display = "none"   
            }
        }
        
        AOS.refresh()
    });
}



function setUp() {
    

    
}


setUp()


/*function myInterest(val) {
    if (selectedInterest.includes(val)){
        delete selectedInterest[selectedInterest.indexOf(val)]
        selectedInterest.length = selectedInterest.length - 1
        let changeColor = document.getElementById(`interest-${val}`);
            changeColor.style.backgroundColor = "#ffffff";
    } else {
        if( selectedInterest.length < 5){
           let changeColor = document.getElementById(`interest-${val}`);
            changeColor.style.backgroundColor = "#00FF00";
            selectedInterest.push(val)
        }
    }
}*/