

function slider(){

    li = document.querySelectorAll('.interview li');
  
    document.querySelector('.interview ul').className = 'move';

    setTimeout(function(){
        document.querySelector('.interview ul').appendChild(li[0]);
        document.querySelector('.interview ul').className = 'move2';
        }, 1000);
     
  
}

setInterval(slider, 2000);