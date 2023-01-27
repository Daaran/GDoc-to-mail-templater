/**
 * Fonction pour récupérer l'id d'un fichier et appliquer le template associé
 */
function findText(docId,list) {
  const doc = DocumentApp.openById(docId)
  const body = doc.getBody();
  const regex = /\{\{.*?\}\}/
  const regexString = "\{\{.*?\}\}"

  Logger.log(list)

  while (body.findText(regexString) !== null) {
    let elem = body.findText(regexString).getElement()
    let text = elem.asText().getText()
    let key = TextEquiv(text.match(regexString)[0])
    text = text.replace(regex,list[key])
    elem.asText().setText(text)
  }
  doc.saveAndClose()
  return docId;
}
/**
* Function to find and replace text 
*/
function TextEquiv(text) {
  text = text.toString()
  return text.replace('{{','').replace('}}','')
}
/**
* Function to copy doc
*/
function copyDoc(mail) {
  Logger.log("Copie du document en cours pour "+mail)
  const doc = DocumentApp.getActiveDocument();
  const main_id = doc.getId();

  let copy = DriveApp.getFileById(main_id).makeCopy("Template")//DocumentApp.create("Template")
  //copy.getBody().setText(doc.getBody().getText())
  let id = copy.getId()
  Logger.log("Copie du document terminée pour "+mail+" - "+id)
  return id
}
/**
 * Récupère les données du sheet et de la feuille donnée et les transforme en clé/valeur dans un objet
 */
function prepareData(id, sheetName) {
  const sheet = SpreadsheetApp.openById(id).getSheetByName(sheetName)

  let values = sheet.getDataRange().getValues();
  let header = values.shift().flat();
  let out = []
  values.forEach(val => {
    let temp = {}
    header.forEach((key, idx) => temp[key] = val[idx])
    out.push(temp)
  })
  return out
}
/**
* Function to remove file from drive 
*/
function deleteFile(fileId){
  Drive.Files.remove(fileId)
}

function main(){
  Logger.log("Formatage des données en cours")
  let list = prepareData();
  Logger.log("Donées formatées")
  list.forEach(e => {
    let objet = "Ici l'objet du mail à envoyer"
    let id = copyDoc(e.Mail);
    findText(id,e);
    sendMail([e.Mail,objet],id);
    deleteFile(id)
    })
}

