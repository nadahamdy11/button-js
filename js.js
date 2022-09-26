document.getElementsByTagName('button')[0].textContent='dark-mode';

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    
    var button = document.getElementsByTagName('button')[0];
    if(button.textContent == 'dark-mode'){
    button.textContent='light-mode';
    }
    else{
    button.textContent='dark-mode';
    }
}

document.getElementsByTagName('i')[0];

function modeicon() {
    var element = document.body;
    element.classList.toggle("darkicon");

} 
