document.getElementById("button").onclick = function() {
  var xhtml= new XMLHttpRequest();
xhtml.onreadystatechange =function() {
  if(this.readyState==4 && this.status==200){
      alert("updated data");
  }
};
xhtml.open('GET','<int:pk>',true);
xhtml.send();
}