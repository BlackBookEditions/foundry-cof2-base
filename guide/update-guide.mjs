// Met à jour les pages du guide du système
main()

async function main() {
  const compendiumName = "cof-base.cof-2-guide-du-systeme"

  // Fait le lien entre un fichier html et l'id d'une page de journal
  const fileName_pageId = {
    introduction: "Xr7GWCaNfcxZlsnY",
    acteurs: "9Bn7F4sxyKm3TX74",
    objets: "e46m0KDmGFAP5USg",
    actions_effets: "a0cY3q3XV4o8Y13V",
    jets_messages: "7BoZ8Un0GrShNPtF",
  }

  // Répertoire où se trouvent les fichiers html à partir du répertoire data
  const folderRef = "modules/cof2-base/guide/html/"
  const filesList = await foundry.applications.apps.FilePicker.implementation.browse("data", folderRef)
  console.log("Liste des fichiers", filesList)

  // Seulement les fichiers html
  const htmlFiles = filesList.files.filter((f) => f.includes(".html"))
  console.log("Liste des fichiers html", htmlFiles)

  for (let file of htmlFiles) {
    filebase = file.replace(".html", "").replace(folderRef, "")
    let targetId = fileName_pageId[filebase]

    console.log("targetId", targetId)
    if (targetId) {
      for (let journal of game.packs.get(compendiumName)) {
        let journalpage = journal.pages.get(targetId)
        if (journalpage) {
          const fileData = await fetch(file)         
          let filecontent = await fileData.text()
          journalpage.update({ "text.content": filecontent })
          console.log("Mise à jour réussie depuis le fichier :", file)
        }
      }
    }
  }
}