document.getElementById("button").onclick = function() {
    var xhtml= new XMLHttpRequest();
xhtml.onreadystatechange =function() {
    if(this.readyState==4 && this.status==200){
        alert("added data");
    }
};
xhtml.open('GET','',true);
xhtml.send();
}