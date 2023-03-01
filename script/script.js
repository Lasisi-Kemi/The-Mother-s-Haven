let interest;
let changeColor;
let selectedInterest = [];

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