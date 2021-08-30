var  chiffre  =  parseInt ( prompt('Entrez un chiffre.') ) ;


  function table ( chiffre ) {

    for (i=1;i<=10;i++)

    {
        resultat  =  chiffre * i ;
        document.write( i  +  "*"  +  chiffre  +  "="  +  resultat  +  "</br>") ;
        console.log( i  +  " * "  +  chiffre  +  " = "  +  resultat) ;

    }    
}

table( chiffre ) ;
