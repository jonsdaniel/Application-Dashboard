function addRow(tableID) {

    var table = document.getElementById(tableID);

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    var cell1 = row.insertCell(0);
    cell1.contentEditable = 'true';
    rowCount + 1;

    var cell2 = row.insertCell(1);
    cell2.contentEditable = 'true';
    rowCount + 1;

    var cell3 = row.insertCell(2);
    cell3.contentEditable = 'true';
    rowCount + 1;

    var cell4 = row.insertCell(3);
    cell4.contentEditable = 'true';
    rowCount + 1;

    var cell5 = row.insertCell(4);
    cell5.contentEditable = 'true';
    rowCount + 1;

    var cell6 = row.insertCell(5);
    cell6.contentEditable = 'true';
    rowCount + 1;

    var cell7 = row.insertCell(6);
    var element1 = document.createElement("input");
    element1.type = "checkbox";
    element1.name = "chkbox[]";
    cell7.appendChild(element1);
}

function deleteRow(tableID) {
    try {
        var table = document.getElementById(tableID);
        var rowCount = table.rows.length;

        for (var i = 0; i < rowCount; i++) {
            var row = table.rows[i];
            var chkbox = row.cells[6].childNodes[0];
            if (null != chkbox && true == chkbox.checked) {
                table.deleteRow(i);
                rowCount--;
                i--;
            }


        }
    } catch (e) {
        alert(e);
    }
}