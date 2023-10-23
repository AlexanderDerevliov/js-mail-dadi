
console .log (`Gioco dei dadi`)


const player = Math.floor(Math.random() * 6) + 1;
console.log(player);

const computer = Math.floor(Math.random() * 6) + 1;
console.log(computer);

let result = 'PAREGGIO';

if (player > computer){
    result = 'HAI VINTO'
}
else if(player < computer){
    result= 'HAI PERSO'
}
console.log(result);
  