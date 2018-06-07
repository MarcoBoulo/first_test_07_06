// Ostralopitec


function supprime_ligne( ligne ){

  var nbr_ligne = document.getElementsByClassName('ligne').length;

  if( nbr_ligne == 1 ){
    if (window.confirm("Voulez-vous réellement tout supprimer ?")) {
        ligne.remove();
    }

  } else {
    ligne.remove();
  }

  maj_compteur();

}



maj_compteur();

function maj_compteur(){
  var nbr_ligne = document.getElementsByClassName('ligne').length;
  document.getElementById('count').textContent = nbr_ligne;
  if( nbr_ligne == 0 ){
    document.getElementById("count").className += " alert";
  }
}






for(var i=0; i<document.getElementsByClassName('ligne').length; i++) {

        // console.log('Ligne : '+i);
        document.getElementsByClassName('ligne')[i].order = i+1;

        // Pour le fun -> affiche le numéro initial de la ligne
        document.getElementsByClassName('ligne')[i].addEventListener("click",
          function(){
           console.log('Ligne : '+ this.order);
          }
        );

}






for(var i=0; i<document.getElementsByClassName('poubelle').length; i++) {

        // Exo
        document.getElementsByClassName('poubelle')[i].addEventListener("click",
          function(){
            // this.parentElement.remove();
            supprime_ligne( this.parentElement );
          }
        );

}
