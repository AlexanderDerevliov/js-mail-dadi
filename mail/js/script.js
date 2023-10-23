
const eMail = ["pippobaudo@gmail.com", "pluto96@cloud.com", "nonsochemailinventare@libero.it" , "alex.feelred@gmail.com"];
  


const userEmail = prompt ("Ciao, Inserisci qui la tua E-Mail")



let found = false;

for (let i = 0; i < eMail.length; i++) {
    const curEmail = eMail[i];

    if (curEmail === userEmail) {
        found = true
    }
}

if (found) {

    console.log ("complimenti, puoi accedere");

} else {
    console.log ("Ci dispiace, deve inserire una mail valida, oppure registrarti");

}




