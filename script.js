var counter = 1;
setInterval(function(){
    document.getElementById('R' + counter).checked = true ;
    counter++;
    if(counter>3){
        counter=1;
    }
}, 5000);





function toggleNavbar() {
    var navbarLinks = document.getElementById("nav-links-ph");
    if (navbarLinks.style.display === "none") {
        navbarLinks.style.display = "flex";
    } else {
        navbarLinks.style.display = "none";
    }
}

  