document.getElementById("button").onclick = function() {
    var xhtml= new XMLHttpRequest();
    let datatab = [
        name= nameInput.value(),
        emai =emailInput.value(),
        mobile_number = mobileInput.value(),
        birth = dateInput.value(),
        gpa = gpaInput.value(),
        gender = data.gender,
        level = data.level,
        status = data.status,
        department = data.department, 
    ]
xhtml.open("POST","manage.py");
xhtml.onreadystatechange =function() {
    if(this.readyState==4 && this.status==200){
        xhtml.send(data);
    }
};
}