// {/* <table id="sampleTable" border="1"> 
//         <tr>
//             <td>Row1 cell1</td> 
//             <td>Row1 cell2</td>
//         </tr> 
//         <tr>
//             <td>Row2 cell1</td> 
//             <td>Row2 cell2</td>
//         </tr> 
//         </table>
        
//         <input type="button" onclick="insertRow()" value="Insert row">   */}

//         In a JS file, write a JavaScript function to add rows to a table. 

function insertRow(){
    let table = document.getElementById("sampleTable");

    let addRow = table.insertRow();

    let cell1 = addRow.insertCell(0);
    let cell2 = addRow.insertCell(1);

    cell1.innerHTML = "row3 cell1";
    cell2.innerHTML = "row3 cell2";
}