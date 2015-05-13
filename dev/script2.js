module.exports.createH2Element = function(message){
    var h2 = document.createElement("h2");
    h2.innerText= message;
    document.body.appendChild(h2);
}