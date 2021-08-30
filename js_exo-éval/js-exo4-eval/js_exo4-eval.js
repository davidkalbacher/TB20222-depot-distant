

   let PU = parseInt(prompt("Veuillez entrer le Prix Unitaire du produit"));
   let QTECOM = parseInt(prompt("veuillez entrer la quantité que vous souhaitez commander"));
   let PAP;
 let PORT;
  let TOT = PU*QTECOM;

  let REM;
   let P_REM;

  if(TOT >= 100 && TOT <= 200) {
    REM = (5*TOT) / 100;
    P_Remise = TOT-REM ;
    console.log("boucle 1");
  }

 else if(TOT > 200){
  console.log("boucle 2");
  

    REM = TOT- (TOT*0.9);   

    console.log("remise : "+ REM);
    P_Remise = TOT-REM;
    console.log("remise : "+ P_Remise);
    

   }
 
   else{
    REM=0;
    P_Remise=TOT
    
    console.log("boucle 3");
}
    

  if(P_Remise > 500) {
   PORT = 0;
   PAP=P_Remise;
   }

  if (P_Remise <500) {

    console.log("prix remise < 500");
    
  PORT = P_Remise*0.02;

  console.log("port = "+ PORT);
  PAP=P_Remise+PORT;
  }

  if( PORT < 6 && PORT !=0 ){
    let PortMini = 6;
    PAP = P_Remise + PortMini;
    PORT=6;
}


function arrondir1() {
    PAP = PAP.toFixed(2);
    //return PAP;
}

function arrondir2() {
    REM = REM.toFixed(2);
   // return REM;
}

function arrondir3() {
    PORT = PORT.toFixed(2);
    //return PORT;
}

arrondir1();
arrondir2();
arrondir3();


  document.write ( " Vous devez payer "  +  PAP  +  " €.</br> " ) ;    
  document.write ( "Comprenant "  +  REM  +  "€ de remise. </br>" ) ;
  document.write ( " Et "  +  PORT  +  " € de frais de port. " ) ;


