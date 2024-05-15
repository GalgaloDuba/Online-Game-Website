function sendmessage(sectionId){
    var iframe = document.getElementsByTagName('iframe')[0].contentWindow;

    iframe.postMessage(sectionId,'*');
}
// Create a new <style> element
var styleElement = document.createElement('style');

// Set the CSS rules for the media query
var mediaQueryCSS = `
@media screen and (max-width: 785px) {
  .width-70 {
    width: 100%;
    margin-left: 0;
  }
  .sidebar {
    position: relative;
    width: 100%;
    margin-top: 2px;
  }
  iframe {

    position: absolute;
    text-align: center;
    width: 100%;
    height: 500px;
    margin-top: 400px;
    margin-left: 3%;
    background-color: white;
  }
  footer {
    margin-bottom: 0;
    margin-top: 1000px;
    height: auto;
    background-color: rgb(17, 16, 16);
  }
}
`;

// Append the CSS rules to the <style> element
styleElement.appendChild(document.createTextNode(mediaQueryCSS));

// Append the <style> element to the <head> of the document
document.head.appendChild(styleElement);
