function lancio() {
    const num_pc1=Math.round(Math.random()*5+1);
    const num_pc2=Math.round(Math.random()*5+1);
          
    document.getElementById("numero_pc1").innerHTML ="Lancio computer " + num_pc1 + ", ";
    document.getElementById("numero_pc2").innerHTML =num_pc2;
    document.getElementById("image_pc1").src=num_pc1+"pc.png";
    document.getElementById("image_pc2").src=num_pc2+"pc.png";
    const totale_pc=num_pc1+num_pc2;
    document.getElementById("totale_pc").innerHTML =" , con un totale di " + totale_pc + " punti";
      
          
    const num_1=Math.round(Math.random()*5+1);
    const num_2=Math.round(Math.random()*5+1);
          
    document.getElementById("numero_1").innerHTML ="Tu hai ottenuto " + num_1 + ", ";
    document.getElementById("numero_2").innerHTML =num_2;
    document.getElementById("image_1").src=num_1+".png";
    document.getElementById("image_2").src=num_2+".png";
    const totale1=num_1+num_2;
    document.getElementById("totale1").innerHTML =" e hai totalizzato " + totale1 + " punti";
      
  if(totale1 > totale_pc)
      document.getElementById("vinto").innerHTML = "HAI VINTO";
  else
      document.getElementById("vinto").innerHTML = "HAI PERSO";
  }