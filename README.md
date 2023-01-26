# GDoc-to-mail-templater
Ce programme permet de transformer un document Google Doc en Mail et de l'envoyer.
Il permet aussi de transformer votre Google Docs en template de mail qui va automatiquement récupérer les information depuis un sheet et les associer aux mot clé dans le document. 

## Mise en place
Commencer par créer un document GDoc et associez y un document App Script
Copiez les fichier dans App Script

## Fonctionement
Un menu est ajouté au gDoc, il permet d'ouvrir la sidebar
Sur la sidebar 2 partie, la première qui permet d'envoyer le document courant comme un mail, la seconde qui permet d'envoyer plusieurs mails en utilisant le document courant comme un template, et d'y ajouter une source de donnée google sheet pour pouvoir remplacer les mots-clés par les données.

### Partie 1 - Envoi du document courant
Dans le champs destinataire, renseignez le ou les destinataires en les séparant d'une virgule si besoin,
Ajoutez votre objet et vous pourrez envoyer le mail a vos destinataires

### Partie 2 - Envoi du document comme un template [WIP]
<b><i>Cette partie n'est pas encore fonctionnelle depuis la sidebar (uniquement depuis le code GAS)</i></b>
<br>
Pour cette partie il faut mettre, dans le corps du document, des mots-clé entre double accolade "{{" "}}" ensuite ajouter dans la sidebar l'ensemble des données necessaire, id de la source de donnée sheet, nom de la feuille 
<br>
<b>Attention les mots clé et le noms des colonnes de la source de données doivent être identiques</b>


