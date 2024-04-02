// On affiche le générateur que sur le forum voulu
document.addEventListener("DOMContentLoaded", function () {
  if (!window.location.href.includes("/post?f=6&mode=newtopic")) return;
  document.querySelector("#formGenerateur").style.display = "block";

  document.getElementById("generateBtn").addEventListener("click", getData);
});

function getData() {
  // Le container de tous les inputs
  const generator = document.querySelector("#formGenerateur");
  // On réccupère tous les inputs
  const inputs = generator.querySelectorAll("input, select, textarea");

  const payload = {};
  // Pour chaque input, on donne son nom en clé et sa valeur à la clé
  Array.from(inputs).forEach((input) => {
    // L'input doit avoir un nom (ça exclu les boutons par exemple)
    if (input.name) {
      payload[input.name] = input.value;
    }
  });

  const generatedCode = generateCodeFromPayload(payload);
  insertGeneratedCodeIntoEditor(generatedCode);
}

function setupFormListener() {
  const form = document.querySelector("#formGenerateur");
  form.addEventListener("submit", handleFormSubmit);
}

function handleFormSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const payload = Object.fromEntries(formData.entries());

  const codeGenerated = generateCodeFromPayload(payload);
  insertGeneratedCodeIntoEditor(codeGenerated);
}

function generateCodeFromPayload(payload) {
  const {
    triggerWarnings,
    prenomNom,
    citation,
    avatarCelebrite,
    age,
    dateNaissance,
    lieuNaissance,
    nationalite,
    occupation,
    statutCivil,
    caractere,
    faceclaim,
    groupe,
    credits,
    histoire,
    pseudo,
    pronoms,
    pays,
    typePersonnage,
    motFin,
  } = payload;

  return `<div class="fiche">      
  <span>${prenomNom}</span>
  <span>${citation}</span><div class="firstSection">
    <img class="avatar" src="${avatarCelebrite}" alt="">
    <div class="infoPerso">
      <div class="tw">
        <span>trigger warnings :</span>
        <span>${triggerWarnings}</span>
      </div>
      <div class="bio">
        <span>âge :</span> ${age} ans. <span>date et lieu de naissance :</span> ${dateNaissance} à ${lieuNaissance}.
        <span>nationalité :</span>
        ${nationalite}. <span>
          occupation :</span> ${occupation}. <span>statut
          civil :</span> ${statutCivil}. <span>caractère :</span> ${caractere}
      </div>
      <div class="adminPerso">
        <span>faceclaim :</span> ${faceclaim}. <span>groupe :</span> ${groupe}. <span>crédits :</span> ${credits}.
      </div>
    </div>
  </div><div class="secondSection">
    ${histoire}
  </div><div class="thirdSection">
    <span>pseudo, prénom :</span> ${pseudo}. <span>pronoms :</span> ${pronoms}. <span>pays :</span> ${pays}. <span>type de personnage :</span> ${typePersonnage}. <span>le mot de la fin :</span> ${motFin}.
  </div>
  </div>`;
}

function insertGeneratedCodeIntoEditor(code) {
  const editorTextarea = document.querySelector("textarea[placeholder]");
  if (!editorTextarea) {
    console.error("Le textarea de l'éditeur n'a pas été trouvé.");
    return;
  }

  const instance = $(editorTextarea).sceditor("instance");
  if (!instance) {
    console.error("Instance de sceditor non trouvée.");
    return;
  }

  instance.val(code);
}
