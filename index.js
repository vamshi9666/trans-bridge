window.addEventListener('mouseup',getinput);
function getinput(){
    let selInput = window.getSelection().toString().trim();
    if (selInput.length > 0){
        let onAirMessage = {
            text : selInput
        };
        window.requestAnimationFrame.sendMeaasage(onAirMessage);
    }
}