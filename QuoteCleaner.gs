function onOpen(e) {
  DocumentApp.getUi().createAddonMenu()
      .addItem('Remove SmartQuotes', 'removeQuotes')
      .addToUi();
}

function onInstall(e) {
  onOpen(e);
}

function removeQuotes(){
  var docBody = DocumentApp.getActiveDocument().getBody();
  docBody.replaceText("”",'"').replaceText("“", '"');
  docBody.replaceText("’", "'").replaceText("‘","'");
}
