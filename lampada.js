const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function lampOn (){
    lamp.src = 'ligada.jpg';
}

function lampOff(){
    lamp.src = 'desligada.jpg';
}

function lampBroken (){
    lamp.src = 'quebrada.jpg';
}

// turnOn.addEventListener('click', lampOn); // Função do funcionamento do botão
//turnOff.addEventListener('click', lampOff); 

lamp.addEventListener('mouseover', lampOn); //Acende
lamp.addEventListener('mouseleave', lampOff); //Apaga
lamp.addEventListener('dblclick', lampBroken); //Quebra


