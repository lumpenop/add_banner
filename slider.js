

function slider(){

    li = document.querySelectorAll('.interview li');
  
    document.querySelector('.interview ul').className = 'move';

    setTimeout(function(){
        document.querySelector('.interview ul').appendChild(li[0]);
        document.querySelector('.interview ul').className = 'move2';
        }, 1000);
     
}

rollin = setInterval(slider, 2000);


function left(){
    clearInterval(rollin);
    slider()
    /* rollin = setInterval(slider, 2000); */
}

function right(){
    clearInterval(rollin);
    li = document.querySelectorAll('.interview li');
    newLi=document.createElement('li');
    newLi.innerHTML = li[3].innerHTML;

    document.querySelector('.interview ul').prepend(newLi);
    document.querySelector('.interview ul').removeAttribute('class');
    document.querySelector('.interview ul').className = 'move_right';


    setTimeout(function(){
        document.querySelector('.interview ul').className = 'move_right2';
        document.querySelector('.interview ul').removeChild(li[3]);
        }, 100);
    rollin = setInterval(slider, 2000);
}