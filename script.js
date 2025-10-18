//test pour la recuperation des données d'un textearea

const titreEntre = document.getElementById("note-titre");
const contenuEntre = document.getElementById("note-contenu");
const contenuHistorique = document.getElementById("historique-contenu")
const boutonEnregister = document.getElementById("bouton-enregistrer");
const boutonHistorique = document.getElementById("bouton-historique");


//const local = JSON.parse(localStorage.getItem("notes"));
let notes = JSON.parse(localStorage.getItem("notes")) || [];

//console.log(contenuHistorique);

boutonEnregister.addEventListener("click", function() {

    /*const notes = {
        titre: titreEntre.value,
        contenu: contenuEntre.value
    }*/

    const titre = titreEntre.value.trim();
    const contenu = contenuEntre.value.trim()
    if(titre && contenu){
        nouvelleNote = {titre, contenu};
        //ajout de la note dans le tableau
        notes.push(nouvelleNote);
        //sauvergarde dans le localStorage
        localStorage.setItem("notes", JSON.stringify (notes));
        //alerte de confirmation
        alert ("Note enregistrée !");
        //afficher les notes enregistrées
        afficherNotes();
        //vider les champs 
        titreEntre.value = ""; 
        contenuEntre.value = "";

    }else{
        alert ("Veuillez remplir tous les champs !");
    }
},false);

boutonHistorique.addEventListener("click", function(){
    afficherNotes();
},false);

//foncton pour afficher les notes enregistrées
function afficherNotes(){
    contenuHistorique.innerHTML = "`<h1>Historique</h1><br>";
    //var elementDiv = document.createElement("div");
    //elementDiv.classList.add("note")
    notes.forEach(function(note, index) {
        //elementDiv.innerHTML +=`<h3>${note.titre}</h3><p>${note.contenu}</p>`
        //contenuHistorique.appendChild(elementDiv);
        contenuHistorique.innerHTML +=`
            
            <div class="note-historique">
                <h3>${note.titre}</h3>
                <p>${note.contenu}</p>
            </div>`;
    }); 
 }
    
