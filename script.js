var counter = 1;
setInterval(function(){
    document.getElementById('R' + counter).checked = true ;
    counter++;
    if(counter>3){
        counter=1;
    }
}, 5000);