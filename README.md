# Tutoriel : Générateur de Fiche de Présentation

## Pré-requis
- Connaissance en HTML pour personnaliser la structure du formulaire / fiche de présentation.
- Connaissance en CSS pour styliser le formulaire / fiche de présentation.
- Ne pas être effrayé par le JS :) 

## Objectif
Faciliter la création de fiches de présentation pour les utilisateurs moins à l'aise avec le remplissage manuel. Le formulaire générera automatiquement le code de la fiche avec les informations fournies, prêt à être copié/collé dans un nouveau sujet de présentation.

## Installation du Code

1. **Création d'une Nouvelle Feuille HTML :**
   - Accédez au panneau d'administration de votre site, se rendre dans module > gestion des pages html.
   - Créez une nouvelle page HTML et collez-y le code fourni.
   - Donnez un titre explicite à la page, comme "Générateur de Présentation".

2. **Intégration via Iframe :**
   - Copiez l'URL de votre nouvelle page HTML.
   - Ouvrez un nouveau sujet dans votre forum et insérez l'URL dans un iframe :
     ```<iframe src="https://nomduforum.com/h4-generateur-de-presentation" height="800px" width="100%" frameborder="0" scrolling="yes"></iframe>```

Vous devriez maintenant avoir le formulaire qui s’affiche et la possibilité de générer le code de la fiche de présentation par défaut présent dans le tutoriel. 

## Personnalisation des Champs du Formulaire

Pour modifier ou ajouter des champs dans le formulaire, localisez les éléments `<input>`, `<textarea>`, et `<select>` dans le code HTML.

- **Pour un champ de texte court :**
  ```html
  <label for="nomPersonnage">Nom du Personnage :</label>
  <input type="text" id="nomPersonnage" name="nomPersonnage">
  ```

- **Pour un champ de texte long :**
  ```html
  <label for="histoire">Histoire du personnage :</label>
  <textarea id="histoire" name="histoire"></textarea>
  ```

- **Pour un menu déroulant :**
  ```html
  <label for="groupe">Groupe :</label>
  <select id="groupe" name="groupe">
    <option value="">Choisir le groupe</option>
    <option value="Groupe1">Groupe 1</option>
    <option value="Groupe2">Groupe 2</option>
    <option value="Groupe3">Groupe 3</option>
    <option value="Groupe4">Groupe 4</option>
  </select>
  ```

Changez l'attribut `for` du `<label>` et les attributs `id` et `name` de l'`<input>` pour refléter le contenu souhaité. 

Le label sera ce qui sera visuellement affiché dans votre formulaire. Vous pouvez donc mettre quelque chose de différent et beaucoup plus long au besoin pour décrire le champ.

## Personnalisation de la Fiche Générée

Dans le script JavaScript, chaque champ du formulaire est associé à une variable récupérée par la fonction `genererCode()`. Nommez les variables en fonction de l'`id` des champs pour faciliter la correspondance. Dans cette fonction il se trouve autant de variables que de champs dans le formulaire. 

- **Exemple de fonction :**
  ```javascript
  function genererCode() {     
    var prenomNom = document.getElementById('prenomNom').value;
    var citation = document.getElementById('citation').value;
    // Suite du code...
  }
  ```

Prenons l’exemple du prenomNom. On nomme la variable prenomNom. Ce code va rechercher l’id prenomNom présent dans le formulaire et récupérer la valeur inscrite dans le champ pour ensuite la placer dans votre code de présentation.

Pour cela il faudra vous rendre ici : 

  ```javascript
    var codeGenere = `<div class="fiche">
<span>${prenomNom}</span>
<span>${citation}</span>
  ```
  
Ce bout de code est l’emplacement où vous aller coller votre code de fiche de présentation. 

Le code de présentation fournit ne sert qu’à titre d’exemple. Vous pouvez réutiliser sa structure si vous le souhaitez mais ce n’est pas obligatoire.

Les champs que vous souhaitez voir remplit automatiquement par le formulaire devront être remplacés par le nom de la variable en question. Ici je veux que le nom/prénom et la citation soient affichés grâce aux formulaires je mets donc `{nomPrenom}` et `{citation}` aux emplacements où je veux que mon texte soit affiché.

Si vous avez par exemple plusieurs endroits où vous souhaitez voir le nom/prénom affiché, il est tout à fait possible de mettre `{nomPrenom}` à plusieurs emplacements de votre fiche. 


## Personnalisation du Style

- **Style de la Fiche :** 
Comme une fiche habituelle, vous pouvez mettre votre css dans la feuille de style de votre forum ! 

Si jamais vous testez le code tel qu’il est là dans le code fournit, le rendu de la fiche risque d’être bien sale car il n’y a pas le style qui va avec. Le code de la fiche est libre vous pouvez l’utiliser, le personnaliser et le réadapter comme bon vous semble.

- **Style du Formulaire :**
Le style appliqué au formulaire est des plus basique. Si vous souhaitez le modifier, rien de plus simple ! Il se trouve dans la page html en bas de votre code. Adapter le style à votre forum.
