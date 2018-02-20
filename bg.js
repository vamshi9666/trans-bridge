chrome.runtime,onmessage.addListener(startTrans);
window.word = "namaste";
function startTrans(request , sender, sendResponse){
    console.log(request);
    word = request.text;
}
