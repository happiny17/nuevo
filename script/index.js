// Get a reference to the database service
var database = firebase.database();

var username = document.getElementById('username');
var password = document.getElementById('password');

window.alert(username + "    " + password);


function saludar(){
  window.alert('is working');

}

function callLogin(){
    document.getElementById('id02').style.display='block';
}
// Get the modal
var modal = document.getElementById('content');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function callSingup(){
    document.getElementById('id01').style.display='block';
}
// Get the modal
var modal = document.getElementById('content');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function publicar_post(){
    var titulo = document.getElementById("titulo").textContent;
    var autor = document.getElementById("autor").textContent;
    var contenido = document.getElementById("contenido").textContent;

    window.alert("hola mundo");
    alert("hola mundo");
}