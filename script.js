var counter = 1;
setInterval(function(){
    document.getElementById('R' + counter).checked = true ;
    counter++;
    if(counter>3){
        counter=1;
    }
}, 5000);


function toggleNavbar(parameter) {
    var navbarLinks = document.getElementById("navbar-links");
    if (parameter === true) {
        navbarLinks.style.display = "block";
        navbarLinks.children[0].style.display = "block";
        document.querySelector('.navbar').style.display='block';
        document.getElementById('closenavbar').style.display='block';
        document.getElementById('closenavbar').classList.add('placeclosebtn');
        document.querySelector('.toggle-button').style.display='none';
        parameter=false;
    }
    else{
        navbarLinks.style.display = "none";
        navbarLinks.children[0].style.display = "flex";
        document.querySelector('.navbar').style.display='flex';
        document.getElementById('closenavbar').style.display='none';
        document.querySelector('.toggle-button').style.display='block';
        parameter=true;
    }
}

  