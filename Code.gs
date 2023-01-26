/**
 * Script qui permet de transformer un Gdoc en html
 * 
 * Service nécessaire : Drive
 * V1
 * 30/11/2022
 * ADargouge
 * 
 *  \    /\
 *   )  ( ')
 *  (  /  )
 *   \(__)|
 */


/**
 * Fonction pour ajouter un menu au google doc permettant d'afficher la sidebar
 */
function onOpen() {
  DocumentApp.getUi().createMenu("-HF- Menu").addItem("Ouvrir le menu d'envoi", "openSidebar").addToUi();
  openSidebar();
}
/**
 * Fonction de gestion de l'affichage de la sidebar
 */
function openSidebar() {
  let html = HtmlService.createTemplateFromFile("sidebar").evaluate().setTitle("Envoi de mail").setFaviconUrl("https://i.ibb.co/1zdcTkX/Home-Friend-logo-small.png")
  DocumentApp.getUi().showSidebar(html)
}
/**
 * Fonction pour ajouter un fichier à l'interieur du html
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}
/**
 * Fonction d'envoi de mail
 */
function sendMail(infos, id = DocumentApp.getActiveDocument().getId) {
  let destinataire = infos[0];
  let objet = infos[1];

  let html = DoctoHtml(id)

  const options = {
    htmlBody: html,
    noReply: true
  }

  GmailApp.sendEmail(destinataire, objet, null,options)

}
/**
 * Fonction d'affichage d'erreur sur l'envoi de mail
 */
function failure() {
  DocumentApp.getUi().alert("Erreur votre mail n'as pas pu être envoyé")
}
/**
 * Fonction d'affichage de réussite sur l'envoi de mail
 */
function success() {
  DocumentApp.getUi().alert("Votre mail à bien été envoyé")
}
/**
 * Fonction pour récupérer le Html brut du fichier cible
 */
function DoctoHtml(docID) {

  let file = Drive.Files.get(docID);
  let url = file.exportLinks['text/html'];

  var oauth = ScriptApp.getOAuthToken();
  let headers = {
    'Authorization': 'Bearer ' + oauth,
    'Accept': 'application/json'
  }
  let options = {
    'method': 'GET',
    'headers': headers,
  }

  let response = UrlFetchApp.fetch(url, options)
  Logger.log(response.getContentText())
  Logger.log(inline_html(response.getContentText()))
  return inline_html(response.getContentText())
}
/**
 * Fonction pour faire un appel d'api pour récupérer le CSS inliné dans l'Html
 */
function inline_html(html) {
  let payload = "returnraw=true&source_url=&source="
  payload += encodeURIComponent(html)
  
  const header = {
    "content-type": "application/x-www-form-urlencoded",
    "payload": payload
  }
  let reponse = UrlFetchApp.fetch("https://inlinestyler.visigo.com/styler/convert/",header);
  let inlined = XmlService.parse("<d>"+reponse.getContentText()+"</d>").getRootElement().getText()
  return inlined 
}
/**
 * fonction pour récupérer l'email de l'utilisateur
 */
function getUser(){
  return Session.getActiveUser().getEmail();
}


