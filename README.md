# GDoc-to-mail-templater
#
## Français
#
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
#
## English
#

This program allow you to transform a Gdoc into a mail and send it.
It also allow you to transform this Gdoc into a mail template, to automatically get data froma Gsheet and to repllace it into tag in the body of the doc.

## Settings
First create a new Google Doc file, and add it an app script extention project. Then copy the files into the AppScript project.

## Fonctionement
A menu is aded to the Gdoc menu, this let you open a sidebar.
On the sidebar ther is 2 part,
One to send the current doc body as a mail
the second that let the cureetn doc act as a Template, to then replace data into it and send custom mails, based on a Google Sheet data source.

### Part 1 - Send current doc body 
In the recipient input, you can add one or more recipient, separated by commas.
Add the mail subject, and you can send the doc as a mail

### Part 2 - Send current doc body as a template [WIP]
<b><i>This part is currently not working from sidebar (only from GAS code)</i></b>
<br>
For this part you need to put in the doc body, key words into double curly brace "{{""}}", then add in the sidebar all the data source infos, id, and sheet name
<br>
<b>Warning the key word neet to be the same as columns frist row name in the GSheet</b>

