user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";

function addroom(){
    room_name=document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
           purpose : "add room name"
     });
     localStorage.setItem("room_name",room_name);
     window.location="room.html"
  }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
   console.log("room name-"+Room_names);
   row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#" + Room_names+"</div><hr>";
document.getElementById("output").innerHTML+Room;

});});}
getData();

function redirecttoroomname(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}
