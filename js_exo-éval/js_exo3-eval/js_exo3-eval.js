//let  tableau  =  [ "Audrey" ,  "Aurélien" ,  "Flavien" ,  "Jérémy" ,  "Laurent" ,  "Melik" ,  "Nouara" ,  "Salem" ,  "Samuel" ,  "Stéphane" ] ;
//console . log ( "le tableau de départ est : "  +  tableau )

//let prenom = prompt("veuillez saisir un prenom")



var tableau = ["audrey","aurelien", "flavien", "jeremy", "laurent", "melik", "nouara", "salem", "samuel", "stephane"];
var prenom = window.prompt(`Veuillez choisir un prénom parmi ${[...tableau]}.`)
let pos = tableau.indexOf(prenom);
console.log(pos);
let supprItem = tableau.splice(pos,1);
let final = tableau.push();
if(pos==-1){
    document.write("Ce prénom n'est pas dans le tableau, désolée !");
}
else  {
    document.write("Les prénoms restants sont : " + tableau);
    console.log(tableau);
}


