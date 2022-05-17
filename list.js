const ListTheTable = (e) => {
    e.preventDefault();
    var xhtml= new XMLHttpRequest();
    text="";
xhtml.onreadystatechange =function() {
    if(this.readyState==4 && this.status==200){
        var tableHeader="";
        for(i=0;i<response.tableData.header.length;i++){
            tableHeader+=("<th>"+response.tableData.header[i]+"</th>");
            }
        tableHeader="<thead><tr>"+tableHeader+"</tr></thead>";
        var tableBody="";
        for(i=0;i<response.tableData.rows.length;i++){
            var tableRow="";
            for(j=0;j<response.tableData.rows[i].length;j++){
                tableRow+="<td>"+response.tableData.rows[i][j]+"</td>";
                }
            tableBody=tableBody+"<tr>"+tableRow+"</tr>";
            }     
        tableBody="<tbody>"+tableBody+"</tbody>";
        document.getElementById("table").innerHTML=tableHeader+tableBody;
    }
};
xhtml.open('GET','',true);
xhtml.send();
}