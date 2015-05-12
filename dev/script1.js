module.exports.createH1Element = function(message){
    var h1 = document.createElement("h1");
    h1.innerText= message;
    document.body.appendChild(h1);
}