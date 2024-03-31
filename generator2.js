document.addEventListener("DOMContentLoaded", function () {
  if (!window.location.href.includes("/post?f=6&mode=newtopic")) return;

  const targetFieldset = document.querySelector(".fields1");
  if (!targetFieldset) return;

  // Crée et insère le formulaire
  insertForm(targetFieldset);
  setupFormListener();
});

function insertForm(target) {
  const formHtml = createFormHtml();
  const formContainer = document.createElement("div");
  formContainer.innerHTML = formHtml;
  target.insertBefore(formContainer, target.firstChild);
}

function createFormHtml() {
  return `<form id="formGenerateur" class="customForm">
  <div class="form" style="padding: 20px;">
  
  <h2>Première partie</h2>
  
  <!-- champ du formulaire - champ pour texte court -->
  <label for="triggerWarnings">Trigger Warnings :</label>
  <input type="text" id="triggerWarnings" name="triggerWarnings">
  <!-- fin du champ -->
  
  <label for="prenomNom">Prénom Nom :</label>
  <input type="text" id="prenomNom" name="prenomNom">
  
  <label for="citation">Citation :</label>
  <input type="text" id="citation" name="citation">
  
  <!-- champs du formulaire permettant l'ajout de l'url de l'avatar -->
  <label for="avatarcélébrite">Url de l'avatar de la célébrité :</label>
  <input type="text" id="avatarCelebrite" name="avatarCelebrite">
  <!-- fin du champ -->
  
  <label for="age">Age :</label>
  <input type="text" id="age" name="age">
  
  <label for="dateNaissance">Date de Naissance :</label>
  <input type="text" id="dateNaissance" name="dateNaissance">
  
  <label for="lieuNaissance">Lieu de Naissance :</label>
  <input type="text" id="lieuNaissance" name="lieuNaissance">
  
  <label for="nationalite">Nationalité :</label>
  <input type="text" id="nationalite" name="nationalite">
  
  <label for="occupation">Occupation :</label>
  <input type="text" id="occupation" name="occupation">
  
  <label for="statutCivil">Statut Civil:</label>
  <input type="text" id="statutCivil" name="statutCivil">
  
  <label for="caractere">Caractère :</label>
  <input type="text" id="caractere" name="caractere">
  
  <label for="faceclaim">Faceclaim :</label>
  <input type="text" id="faceclaim" name="faceclaim">
  
  <!-- champ du formulaire - menu déroulant permettant de sélectionner une proposition -->
  <label for="groupe">Groupe :</label>
  <select id="groupe" name="groupe">
    <option value="">Choisir le groupe</option>
    <option value="Groupe1">Groupe 1</option>
    <option value="Groupe2">Groupe 2</option>
    <option value="Groupe3">Groupe 3</option>
    <option value="Groupe4">Groupe 4</option>
  </select>
  <!-- fin du champ -->
  
  <label for="credits">Crédits :</label>
  <input type="text" id="credits" name="credits">
  
  <h2>Deuxième partie</h2>
  
  <!-- champ du formulaire - champ pour texte long -->
  <label for="histoire">Histoire du personnage :</label>
  <textarea id="histoire" name="histoire"></textarea>
  <!-- fin du champ -->
  
  <h2>Troisième partie</h2>
  
  <label for="pseudo">Pseudo, prénom :</label>
  <input type="text" id="pseudo" name="pseudo">
  
  <label for="pronoms">Pronoms :</label>
  <input type="text" id="pronoms" name="pronoms">
  
  <label for="pays">Pays:</label>
  <input type="text" id="pays" name="pays">
  
  <label for="typePersonnage">Type de personnage:</label>
  <select id="typePersonnage" name="typePersonnage">
    <option value="">Choisir le type de personnage</option>
    <option value="inventé">Inventé</option>
    <option value="éphémère">Ephémère</option>
    <option value="pré-lien">Pré-lien</option>
  </select>
  
  <label for="motFin">Le mot de la fin:</label>
  <input type="text" id="motFin" name="motFin"><br><br>
  
  <!-- bouton permettant de générer le code -->
  <button type="submit" id="generateBtn" style="cursor: pointer;">Générer</button>
  
  <!-- fin du bouton -->
  </div>
  </form>
  `;
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
