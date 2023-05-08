let htmlEditor = document.getElementById("html-editor");
let cssEditor = document.getElementById("css-editor");
let jsEditor = document.getElementById("js-editor");
let preview = document.getElementById("preview");

htmlEditor.addEventListener("input", updatePreview);
cssEditor.addEventListener("input", updatePreview);
jsEditor.addEventListener("input", updatePreview);

let newPenButton = document.querySelector(".header .button");
newPenButton.addEventListener("click", function () {
  htmlEditor.value = "";
  cssEditor.value = "";
  jsEditor.value = "";
  preview.srcdoc = "";
});

function updatePreview() {
  let html = htmlEditor.value;
  let css = "<style>" + cssEditor.value + "</style>";
  let js = "<script>" + jsEditor.value + "</script>";
  let previewDoc = preview.contentWindow.document;
  previewDoc.open();
  previewDoc.write(html + css + js);
  previewDoc.close();
}
