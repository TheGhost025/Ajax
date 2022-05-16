document.getElementById("button").onclick = function() {
  var xhtml= new XMLHttpRequest();
xhtml.open("POST","manage.py");
xhtml.onreadystatechange =function() {
  if(this.readyState==4 && this.status==200){
  }
};
xhtml.send(data);
}